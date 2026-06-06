import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy · Rooted',
  description: 'How Rooted handles the email you share when you join the waitlist.',
};

/* STARTER privacy policy: plain-language and honest, covering the pre-launch
   waitlist only (this site collects an email and nothing else). Review with
   legal before launch, and write a fuller policy before the app collects
   household or health data. */
export default function PrivacyPage() {
  return (
    <main className="legal">
      <header className="legal-top">
        <Link href="/" className="legal-logo">Rooted</Link>
      </header>

      <article className="legal-body">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">For the Rooted waitlist · Last updated June 2026</p>

        <p>This page collects one thing: the email address you give us when you join the waitlist. Here is exactly what we do with it.</p>

        <h2>What we collect</h2>
        <p>Only your email address, and only when you choose to join the waitlist. We do not ask for your name, your baby&apos;s details, or any health information on this site.</p>

        <h2>How we use it</h2>
        <p>To send you a short welcome, the occasional update about Rooted (one brief note per month at most), and to understand how many families want this before we build further. Nothing else.</p>

        <h2>Where it is stored</h2>
        <p>Your email lives in our database, hosted by Supabase, encrypted in transit and at rest. From this site the waitlist is write-only: it can take new emails, but it cannot read the list back out.</p>

        <h2>What we never do</h2>
        <p>We do not sell your email. We do not share it with advertisers or insurers. We do not train AI models on it.</p>

        <h2>Your choices</h2>
        <p>You can ask us to delete your email at any time. Write to <a href="mailto:hello@rootedapp.co">hello@rootedapp.co</a> and it is gone.</p>

        <h2>The Rooted app</h2>
        <p>When the app launches, it will carry its own, fuller privacy policy for the household and recovery information families track inside it. This page covers the waitlist only.</p>

        <div className="legal-note">
          Questions about any of this? Email <a href="mailto:hello@rootedapp.co">hello@rootedapp.co</a>. This is an early policy for our pre-launch waitlist and may be updated before Rooted opens to the public.
        </div>
      </article>

      <footer className="legal-foot">
        <Link href="/">Back to home</Link>
        <span>© 2026 Rooted</span>
      </footer>
    </main>
  );
}
