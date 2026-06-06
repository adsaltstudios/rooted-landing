'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function scrollToSection(id: string) {
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
}

export function Nav({ onJoin }: { onJoin: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cls = `nav nav-v2 ${scrolled ? 'is-scrolled' : 'is-light'}`;

  return (
    <nav className={cls}>
      <div className="nav-left">
        <Link href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="nav-logo nav-logo-v2" aria-label="Rooted home">
          {scrolled ? (
            <Image className="logo-lockup" src="/assets/horizontal-lockup.png" alt="Rooted" width={160} height={34} style={{ height: 34, width: 'auto' }} />
          ) : (
            <>
              <Image className="logo-lamb" src="/assets/lamb-mark.png" alt="" width={36} height={36} />
              <span className="logo-word">Rooted</span>
            </>
          )}
        </Link>
        <div className="nav-links">
          <button className="nav-link" onClick={() => scrollToSection('#two-patient')}>For Mom</button>
          <button className="nav-link" onClick={() => scrollToSection('#two-patient')}>For Baby</button>
          <button className="nav-link" onClick={() => scrollToSection('#handoff')}>Co-parents</button>
          <button className="nav-link" onClick={() => scrollToSection('#faq')}>FAQ</button>
        </div>
      </div>
      <div className="nav-right">
        <button className={`btn-pill ${scrolled ? 'primary' : 'light'}`} onClick={onJoin}>
          Join the waitlist
        </button>
      </div>
    </nav>
  );
}
