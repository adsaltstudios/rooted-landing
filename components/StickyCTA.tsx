'use client';

import { useEffect, useState } from 'react';

// Mobile-only. Keeps the waitlist one thumb-tap away once the hero form has
// scrolled off, and gets out of the way once the closing form is in view.
export function StickyCTA({ onJoin }: { onJoin: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const join = document.getElementById('join');
      const joinInView = join ? join.getBoundingClientRect().top < window.innerHeight * 0.9 : false;
      setShow(pastHero && !joinInView);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`sticky-cta ${show ? 'show' : ''}`} inert={show ? undefined : true}>
      <button className="btn-pill primary lg" onClick={onJoin}>
        Hold my spot
      </button>
    </div>
  );
}
