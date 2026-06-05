import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
  }

  const supabase = getSupabaseClient();

  if (!supabase) {
    // Supabase not configured — accept gracefully in dev
    console.warn('[waitlist] Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
    return NextResponse.json({ ok: true });
  }

  const { error } = await supabase
    .from('waitlist_signups')
    .insert({ email });

  if (error) {
    // Postgres unique violation (code 23505) = duplicate
    if (error.code === '23505') {
      return NextResponse.json({ error: "You're already on the list." }, { status: 409 });
    }
    console.error('[waitlist] Supabase error:', error.message);
    return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
