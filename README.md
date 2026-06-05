# Rooted — Landing Page

The marketing landing page for **Rooted**, the calm command center for new parents:
track Mom's recovery and Baby's care side by side. This site introduces the product
and collects email signups for the pre-launch waitlist.

Built from a [Claude Design](https://claude.ai/design) handoff (the "Lamb Hero" v2).

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **CSS custom properties** for the design system (no Tailwind) — tokens + styles in `app/globals.css`
- **Cormorant Garamond** + **Inter** via `next/font/google`
- **Supabase** for the waitlist (`@supabase/supabase-js`)
- **lucide-react** for icons

## Local development

```bash
nvm use            # Node 20 (see .nvmrc)
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev        # http://localhost:3000
```

`npm run build` produces the production build; `npm run lint` runs ESLint.

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key (safe to expose) |

The landing page uses **only the public anon key**. The waitlist relies on an
INSERT-only row-level-security policy: anyone can add their email, but no one can
read the list with this key. The Supabase **service-role key is intentionally not
used here**, so this deployment never carries a credential that can read the rest
of the database.

## Database setup

The waitlist writes to a `waitlist_signups` table. Run the SQL in
[`supabase/waitlist_signups.sql`](supabase/waitlist_signups.sql) once in the
Supabase SQL editor — it creates the table, enables RLS, and adds the
INSERT-only policy.

## Waitlist API

`POST /api/waitlist` with `{ "email": "..." }`:

- Invalid email → `400`
- New signup → `200 { ok: true }`
- Already on the list → `409`

The handler ([`app/api/waitlist/route.ts`](app/api/waitlist/route.ts)) runs
server-side and inserts via the anon client in [`lib/supabase.ts`](lib/supabase.ts).
If env vars are missing it logs a warning and returns `200` so local dev never hard-fails.

## Deployment (Vercel)

This project deploys on Vercel (project `rooted-landing`). Set
`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in the Vercel
project's environment variables for Production and Preview.

- Preview: `vercel deploy`
- Production: `vercel --prod`

Node version is pinned to 20 via `.nvmrc`.
