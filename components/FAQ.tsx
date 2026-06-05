'use client';

import { useState } from 'react';

const items = [
  { q: "When will Rooted be available?",
    a: "Rooted is in private beta with a small group of families today. The public waitlist opens access in waves through 2026 — earliest sign-ups go first." },
  { q: "How much will it cost?",
    a: "We're still figuring that out — and that's part of what the waitlist is for. Likely a small monthly subscription per household, with a meaningful free window in the first weeks postpartum. Waitlist members will get founding-member pricing." },
  { q: "Is it for expecting parents too?",
    a: "Yes. You can set Rooted up before baby arrives — appointments, hospital bag, medication plan — and it switches into postpartum mode the day you log baby's birth." },
  { q: "Does my partner need their own account?",
    a: "Yes — and that's the whole point. Each co-parent has their own login, sees the same shared household, and gets the calm briefing when the other one needs to rest." },
  { q: "Is my data private?",
    a: "Always. Your household data is yours. We don't sell it, we don't train models on it, and we'll never share it with insurers or advertisers. Encrypted at rest and in transit." },
  { q: "Is this a replacement for medical advice?",
    a: "No. Rooted is a household tool, not a clinician. We're built to support what your OB, midwife, pediatrician, and lactation consultant already tell you — not replace them." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-grid">
        <div className="reveal" data-reveal="true">
          <div className="section-label">Questions</div>
          <h2 className="section-title">Things parents ask us.</h2>
          <p className="section-lede">
            If we don&apos;t answer it here, ask us at{' '}
            <a style={{ color: 'var(--forest-green)', borderBottom: '1.5px solid var(--forest-green)', paddingBottom: 1 }} href="mailto:hello@rootedapp.co">
              hello@rootedapp.co
            </a>.
          </p>
        </div>
        <div className="faq-list reveal" data-reveal="true">
          {items.map((it, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-q">
                <span>{it.q}</span>
                <span className="faq-toggle">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
              <div className="faq-a"><p>{it.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
