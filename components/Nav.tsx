'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { scrollToId, scrollToTop } from '@/lib/scroll';

const LINKS = [
  { label: 'For Mom', id: '#for-mom' },
  { label: 'For Baby', id: '#for-baby' },
  { label: 'Co-parents', id: '#handoff' },
  { label: 'FAQ', id: '#faq' },
];

export function Nav({ onJoin }: { onJoin: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const cls = `nav nav-v2 ${scrolled ? 'is-scrolled' : 'is-top'} ${menuOpen ? 'menu-open' : ''}`;
  const goto = (id: string) => { setMenuOpen(false); scrollToId(id); };

  return (
    <nav className={cls}>
      <div className="nav-left">
        <Link href="/" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToTop(); }} className="nav-logo nav-logo-v2" aria-label="Rooted home">
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
          {LINKS.map((l) => (
            <button key={l.id} className="nav-link" onClick={() => scrollToId(l.id)}>{l.label}</button>
          ))}
        </div>
      </div>

      <div className="nav-right">
        <button className="btn-pill primary nav-cta" onClick={onJoin}>Hold my spot</button>
        <button
          type="button"
          className="nav-burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav-burger-box"><span className="nav-burger-inner" /></span>
        </button>
      </div>

      <div id="mobile-nav" className="nav-mobile" inert={!menuOpen || undefined}>
        {LINKS.map((l) => (
          <button key={l.id} className="nav-mobile-link" onClick={() => goto(l.id)}>{l.label}</button>
        ))}
        <button className="btn-pill primary nav-mobile-cta" onClick={() => { setMenuOpen(false); onJoin(); }}>Hold my spot</button>
      </div>
    </nav>
  );
}
