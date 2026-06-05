'use client';

import { useRef, useState, useEffect } from 'react';

const items = [
  { tone: 'forest', quote: "I stopped narrating my day from the couch. He opens Rooted, sees the last feed, the next med, and I actually get to nap.", name: "Sarah R., Brooklyn", stars: 5 },
  { tone: 'cream',  quote: "The hydration nudges sound like a friend, not a fitness app. After two weeks I noticed I was drinking water again.", name: "Maya K., Oakland", stars: 5 },
  { tone: 'sage',   quote: "I'm the partner. Before Rooted I always felt a step behind. Now I know what's been happening before I even ask.", name: "James T., Austin", stars: 5 },
  { tone: 'forest', quote: "It's the only app I've kept on my home screen. Everything else felt like another to-do list. Rooted feels like help.", name: "Priya S., Toronto", stars: 5 },
  { tone: 'beige',  quote: "The Mom and Baby cards next to each other — that's the entire reason I use it. We're both being cared for.", name: "Chloe D., Portland", stars: 5 },
  { tone: 'forest', quote: "Logged a feeding from my lock screen at 2am. That alone was worth it.", name: "Alex M., Chicago", stars: 5 },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const t = trackRef.current;
    if (!t) return;
    setCanPrev(t.scrollLeft > 8);
    setCanNext(t.scrollLeft < t.scrollWidth - t.clientWidth - 8);
  };

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    t.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
    return () => t.removeEventListener('scroll', updateArrows);
  }, []);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 404, behavior: 'smooth' });
  };

  return (
    <section className="testimonials">
      <div style={{ padding: '0 24px' }}>
        <div className="section-label">Real beta families</div>
        <h2 className="section-title">Loved by parents who are running on no sleep.</h2>
        <p className="section-lede">A small group of beta families have been using Rooted for the last few months. Here&apos;s what they&apos;ve told us.</p>
      </div>
      <div className="t-track-wrap">
        <div className="t-track" ref={trackRef}>
          {items.map((t, i) => (
            <div key={i} className={`t-card tone-${t.tone}`}>
              <span className="t-quote-mark">&ldquo;</span>
              <p className="t-quote">{t.quote}</p>
              <div className="t-name">{t.name}</div>
              <div className="t-stars">{'★'.repeat(t.stars)}</div>
            </div>
          ))}
        </div>
        <div className="t-controls">
          <button className="t-arrow" onClick={() => scroll(-1)} disabled={!canPrev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4 L5 9 l6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="t-arrow" onClick={() => scroll(1)} disabled={!canNext} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 4 l6 5 l-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
