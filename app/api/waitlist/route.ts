import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  let email = '';
  if (isJson) {
    const body = await req.json().catch(() => ({}));
    email = String(body?.email ?? '').trim();
  } else {
    // Native form POST: the no-JS / progressive-enhancement fallback.
    const form = await req.formData();
    email = String(form.get('email') ?? '').trim();
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
