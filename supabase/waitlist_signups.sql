-- Rooted landing page — email waitlist
--
-- Run this in the Supabase SQL Editor for the project that backs the landing
-- page (reused from rooted-app: snsajxnwravyhohzuxnr).
--
-- Security model: the landing page connects with the PUBLIC anon key only.
-- An INSERT-only RLS policy lets anyone add their email, but no one can read,
-- update, or delete the list with the anon key. The service-role key (which
-- bypasses RLS) is intentionally NOT used by the landing page — reads happen
-- from the Supabase dashboard or rooted-app, never from this deployment.

create table if not exists public.waitlist_signups (
  id         uuid primary key default gen_random_uuid(),
  email      text unique not null,
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

-- RLS policies sit on top of SQL grants: the public roles also need the base
-- INSERT privilege, or inserts fail with "permission denied for table".
-- Only INSERT is granted (no SELECT/UPDATE/DELETE) so the list stays unreadable.
grant insert on table public.waitlist_signups to anon, authenticated;

-- Anyone (anon or signed-in) may add their email; that's the whole policy.
-- No SELECT/UPDATE/DELETE policies → the list is not readable via the anon key.
drop policy if exists "Public can join the waitlist" on public.waitlist_signups;
create policy "Public can join the waitlist"
  on public.waitlist_signups
  for insert
  to anon, authenticated
  with check (true);
