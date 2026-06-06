import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Abuse mitigation ────────────────────────────────────────────────────────
// This is a public, unauthenticated endpoint whose only job is to gauge real
// demand, so junk entries corrupt the signal. Two cheap, privacy-light defenses
// run before any DB write: a honeypot field (filled only by bots, see
// EmailForm.tsx) and a per-IP rate limit to blunt scripted floods.

// Fixed-window per-IP limit. A handful of signups a minute is ample for a human;
// more than that from one IP is almost certainly a script.
const RATE_LIMIT = 5; // requests...
const RATE_WINDOW_MS = 60_000; // ...per 60s window, per IP

// NOTE: this Map lives in a single lambda's memory, so it is BEST-EFFORT only —
// it does not survive cold starts and is not shared across the parallel
// serverless instances Vercel spins up under load. It meaningfully slows one
// attacker hammering a warm instance but is not a hard guarantee. For durable,
// cross-instance limiting, swap this for @upstash/ratelimit (Redis-backed); it
// was left out here to keep the landing page dependency- and config-free.
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    // Opportunistically evict expired windows so the Map can't grow unbounded.
    if (hits.size > 5_000) {
      for (const [key, value] of hits) if (now > value.resetAt) hits.delete(key);
    }
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

// NextRequest.ip was removed in Next.js 15+ (the value now comes from the host),
// so derive the client IP from the proxy headers Vercel sets. x-forwarded-for
// may be a comma-separated chain; the first entry is the originating client.
function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip')?.trim() || 'unknown';
}

async function addToWaitlist(email: string): Promise<'ok' | 'already' | 'error'> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    // Supabase not configured — accept gracefully in dev
    console.warn('[waitlist] Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
    return 'ok';
  }
  const { error } = await supabase.from('waitlist_signups').insert({ email });
  if (error) {
    if (error.code === '23505') return 'already'; // Postgres unique violation = duplicate
    console.error('[waitlist] Supabase error:', error.message);
    return 'error';
  }
  return 'ok';
}

export async function POST(req: NextRequest) {
  const isJson = (req.headers.get('content-type') || '').includes('application/json');

  // Throttle first: cheapest check, and it short-circuits before we read the
  // body or touch the database.
  if (isRateLimited(getClientIp(req))) {
    if (!isJson) {
      return NextResponse.redirect(new URL('/joined?status=error', req.url), 303);
    }
    return NextResponse.json({ error: 'Too many requests. Please wait a minute and try again.' }, { status: 429 });
  }

  let email = '';
  let honeypot = '';
  if (isJson) {
    const body = await req.json().catch(() => ({}));
    email = String(body?.email ?? '').trim();
    honeypot = String(body?.company ?? '').trim();
  } else {
    // Native form POST: the no-JS / progressive-enhancement fallback.
    const form = await req.formData();
    email = String(form.get('email') ?? '').trim();
    honeypot = String(form.get('company') ?? '').trim();
  }

  // Honeypot: the "company" field is hidden from real users, so any value means
  // a bot. Feign success and insert nothing — never signal that it was caught.
  if (honeypot) {
    if (!isJson) {
      return NextResponse.redirect(new URL('/joined?status=ok', req.url), 303);
    }
    return NextResponse.json({ ok: true });
  }

  const status = EMAIL_RE.test(email) ? await addToWaitlist(email) : 'invalid';

  // No-JS path: redirect to a server-rendered confirmation page.
  if (!isJson) {
    return NextResponse.redirect(new URL(`/joined?status=${status}`, req.url), 303);
  }

  // JS path (EmailForm fetch): JSON, unchanged contract.
  if (status === 'invalid') return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
  if (status === 'already') return NextResponse.json({ error: "You're already on the list." }, { status: 409 });
  if (status === 'error') return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status: 500 });
  return NextResponse.json({ ok: true });
}
