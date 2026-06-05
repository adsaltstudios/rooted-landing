-- Rooted landing page — email waitlist
--
-- Run this once in the Supabase SQL Editor for the project that backs the
-- landing page (reused from rooted-app: snsajxnwravyhohzuxnr).
--
-- The landing page's /api/waitlist route writes to this table server-side using
-- the service-role key, which bypasses RLS. RLS is enabled with no anon/
-- authenticated policies, so the table is unreachable by the public anon key.

create table if not exists public.waitlist_signups (
  id         uuid primary key default gen_random_uuid(),
  email      text unique not null,
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

-- Intentionally no policies for anon/authenticated roles:
-- only the server-side service-role key (which bypasses RLS) can read or write.
