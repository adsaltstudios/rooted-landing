'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { scrollToId, scrollToTop } from '@/lib/scroll';

export function Nav({ onJoin }: { onJoin: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cls = `nav nav-v2 ${scrolled ? 'is-scrolled' : 'is-top'}`;

  return (
    <nav className={cls}>
      <div className="nav-left">
        <Link href="/" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="nav-logo nav-logo-v2" aria-label="Rooted home">
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
          <button className="nav-link" onClick={() => scrollToId('#for-mom')}>For Mom</button>
          <button className="nav-link" onClick={() => scrollToId('#for-baby')}>For Baby</button>
          <button className="nav-link" onClick={() => scrollToId('#handoff')}>Co-parents</button>
          <button className="nav-link" onClick={() => scrollToId('#faq')}>FAQ</button>
        </div>
      </div>
      <div className="nav-right">
        <button className="btn-pill primary" onClick={onJoin}>
          Hold my spot
        </button>
      </div>
    </nav>
  );
}
