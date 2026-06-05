import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Server-only Supabase client using the service-role key.
 *
 * The waitlist table lives in the production app DB and the anon key is public,
 * so writes go through the service role (which bypasses RLS) and the table stays
 * fully locked to the public. NEVER import this into a client component — the
 * service-role key must never reach the browser.
 *
 * Returns null when env vars are missing so the route can degrade gracefully.
 */
export function getSupabaseAdmin() {
  if (!supabaseUrl || !serviceRoleKey) return null;
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
