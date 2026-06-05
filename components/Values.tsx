export function Values() {
  const items = [
    {
      title: 'Care together.',
      body: "Two patients, one app. Mom's recovery and Baby's care live side by side — never split between sticky notes and group texts.",
      link: 'For new mothers',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 42 C 12 34, 6 25, 6 17 a 9 9 0 0 1 18 0 a 9 9 0 0 1 18 0 c 0 8 -6 17 -18 25 z"
            stroke="#6E8E65" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
    {
      title: 'Grow together.',
      body: 'A shared view of what just happened, what comes next, and what each of you noticed today. No briefing required.',
      link: 'For co-parents',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="17" cy="18" r="6" stroke="#2F4A37" strokeWidth="2"/>
          <circle cx="31" cy="18" r="6" stroke="#C9904A" strokeWidth="2"/>
          <path d="M7 40 c0-6 4-11 10-11 s10 5 10 11" stroke="#2F4A37" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M21 40 c0-6 4-11 10-11 s10 5 10 11" stroke="#C9904A" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      ),
    },
    {
      title: 'Rooted in love.',
      body: "Soft, never clinical. Calm prompts instead of alarms. The voice of a friend who happens to be a doula — not another to-do list.",
      link: 'Our approach',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 6 C 16 12, 12 18, 12 24 C 18 24, 24 18, 24 6 Z" fill="#A6B68C"/>
          <path d="M24 6 C 32 12, 36 18, 36 24 C 30 24, 24 18, 24 6 Z" fill="#7E9168"/>
          <line x1="24" y1="6" x2="24" y2="42" stroke="#2F4A37" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="section values-section">
      <div className="section-narrow reveal" data-reveal="true">
        <div className="section-label" style={{ textAlign: 'center' }}>How Rooted helps</div>
        <h2 className="section-title">We&apos;re here to hold the household.</h2>
        <div className="values-grid">
          {items.map((it, i) => (
            <div key={i} className="value-card">
              <div className="value-icon">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
              <button className="learn-more">
                {it.link}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8m-3-3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
