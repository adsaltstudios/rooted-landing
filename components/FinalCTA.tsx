import { EmailForm } from './EmailForm';

export function FinalCTA() {
  return (
    <section id="join" className="final-cta">
      <div className="final-cta-inner">
        <div className="section-label" style={{ color: 'var(--sage-soft)' }}>Join the waitlist</div>
        <h2>Be one of the first families to <em>use it.</em></h2>
        <p>Pop your email below. We&apos;ll send a short welcome, then check in once before opening early access.</p>
        <EmailForm id="final-email-form" ctaLabel="Join the waitlist" />
      </div>
    </section>
  );
}
