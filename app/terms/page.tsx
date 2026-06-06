import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms · Rooted',
  description: 'The basics of using the Rooted waitlist site.',
};

/* STARTER terms: plain-language basics for the pre-launch waitlist site.
   Review with legal before launch. */
export default function TermsPage() {
  return (
    <main className="legal">
      <header className="legal-top">
        <Link href="/" className="legal-logo">Rooted</Link>
      </header>

      <article className="legal-body">
        <h1>Terms</h1>
        <p className="legal-updated">For the Rooted waitlist · Last updated June 2026</p>

        <p>This is the waitlist signup site for Rooted, a tool in development for new parents. A few things to know.</p>

        <h2>Joining the waitlist</h2>
        <p>Adding your email tells us you are interested. It does not guarantee access, a launch date, or a particular price. We will share those details with waitlist members as they firm up.</p>

        <h2>Not medical advice</h2>
        <p>Rooted is a household organization tool, not a medical device and not a substitute for your OB, midwife, pediatrician, lactation consultant, or any other care provider. Always follow the people caring for you and your baby.</p>

        <h2>Things will change</h2>
        <p>Rooted is early. Features, timing, and pricing may change as we learn what families need. The waitlist is part of how we decide what to build.</p>

        <h2>Fair use</h2>
        <p>Please do not abuse the signup form or try to disrupt the site. That is about it.</p>

        <div className="legal-note">
          Questions? Email <a href="mailto:hello@rootedapp.co">hello@rootedapp.co</a>. These are early terms for our pre-launch waitlist and may be updated before Rooted opens to the public.
        </div>
      </article>

      <footer className="legal-foot">
        <Link href="/">Back to home</Link>
        <span>© 2026 Rooted</span>
      </footer>
    </main>
  );
}
