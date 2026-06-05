import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Supabase client using the public anon key.
 *
 * The waitlist relies on an INSERT-only RLS policy: anyone may add their email
 * to public.waitlist_signups, but no one can read the list with this key. The
 * anon key is safe to ship anywhere (it's public by design). The service-role
 * key is intentionally NOT used here, so the landing page never carries a
 * credential that can read the rest of the database.
 *
 * Returns null when env vars are missing so the route can degrade gracefully.
 */
export function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
