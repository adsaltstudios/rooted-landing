'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

function scrollToSection(id: string) {
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
}

export function HeroLamb({ onJoin }: { onJoin: () => void }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => ref.current?.classList.add('entered'));
  }, []);

  const headline = 'Postpartum, held together.';
  const m = headline.match(/^(.*?)(held together\.?|together\.?)$/i);
  const headLead = m ? m[1] : headline;
  const headTail = m ? m[2] : '';

  return (
    <section className="hero hero-lamb" ref={ref}>
      <div className="hero-lamb-bg" aria-hidden="true">
        <div className="halo halo-1" />
        <div className="halo halo-2" />
        <div className="halo halo-3" />
        <svg className="leaf leaf-tl" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 6 C20 16 14 30 14 46 C28 46 40 30 32 6 Z" fill="#A6B68C" opacity="0.55"/>
          <line x1="32" y1="6" x2="20" y2="46" stroke="#7E9168" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
        </svg>
        <svg className="leaf leaf-tr" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 6 C44 16 50 30 50 46 C36 46 24 30 32 6 Z" fill="#B9C39A" opacity="0.5"/>
          <line x1="32" y1="6" x2="44" y2="46" stroke="#7E9168" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
        </svg>
        <svg className="leaf leaf-bl" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 6 C20 16 14 30 14 46 C28 46 40 30 32 6 Z" fill="#7E9168" opacity="0.45"/>
        </svg>
        <svg className="leaf leaf-br" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 6 C44 16 50 30 50 46 C36 46 24 30 32 6 Z" fill="#A6B68C" opacity="0.55"/>
        </svg>
      </div>

      <div className="hero-lamb-content">
        <div className="hero-eyebrow hero-eyebrow-dark">
          <span className="dot" /> Now in private beta
        </div>

        <div className="hero-lamb-mark-wrap">
          <div className="hero-lamb-glow" aria-hidden="true" />
          <Image
            className="hero-lamb-mark"
            src="/assets/lamb-mark.png"
            alt="Rooted lamb mark"
            width={340}
            height={340}
          />
        </div>

        <h1 className="hero-title hero-title-dark">
          {headLead}
          {headTail && <em>{headTail}</em>}
        </h1>
        <p className="hero-sub hero-sub-dark">
          Rooted is the calm command center for new parents — track Mom&apos;s recovery and Baby&apos;s care, side by side, so neither of you has to hold it all in your head.
        </p>
        <div className="hero-cta-row">
          <button className="btn-pill primary lg" onClick={onJoin}>
            Join the waitlist
          </button>
          <button className="btn-pill outline lg" onClick={() => scrollToSection('#features')}>
            See how it works
          </button>
        </div>
      </div>
      <div className="hero-scroll-cue hero-scroll-cue-dark" />
    </section>
  );
}
