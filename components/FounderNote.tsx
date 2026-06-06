import Image from 'next/image';

export function FounderNote() {
  return (
    <section id="founder" className="founder-note">
      <div className="founder-grid">
        <div className="founder-portrait reveal" data-reveal="true">
          <Image
            src="/assets/founder.jpg"
            alt="Adam, founder of Rooted"
            fill
            sizes="(max-width: 980px) 320px, 360px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="founder-text reveal" data-reveal="true">
          <div className="section-label">Why we built Rooted</div>
          <h2>I built Rooted for my wife. Then I built it for us.</h2>
          <p>Our daughter arrived last winter. Three days in, I realized we were running our household out of a Notes app, a shared calendar, and a group text with my mother-in-law. My wife was exhausted, I was a step behind, and we kept losing the thread on her medications.</p>
          <p>So I built Rooted, first for the two of us, then for the small group of friends who asked if they could borrow it. It&apos;s been quietly running in our home for months, and it&apos;s changed how we move through the day.</p>
          <p>Now I want to find out if it can help your household too. The waitlist below isn&apos;t a marketing list. It&apos;s how I&apos;ll decide whether to take Rooted further, and whether it&apos;s something families would pay for.</p>
          <div className="founder-signature">Adam</div>
          <div className="founder-meta">Founder · Husband · Dad</div>
        </div>
      </div>
    </section>
  );
}
