'use client';

import { useEffect, useCallback } from 'react';
import { scrollToId } from '@/lib/scroll';
import { Nav } from '@/components/Nav';
import { HeroLamb } from '@/components/HeroLamb';
import { Values } from '@/components/Values';
import { TwoPatient } from '@/components/TwoPatient';
import { FeatureDive } from '@/components/FeatureDive';
import { HandoffSpotlight } from '@/components/HandoffSpotlight';
import { FounderNote } from '@/components/FounderNote';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';

export default function Home() {
  const onJoin = useCallback(() => scrollToId('#join'), []);

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav onJoin={onJoin} />
      <HeroLamb />
      <Values />
      <TwoPatient />
      <FeatureDive />
      <HandoffSpotlight />
      <FounderNote />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA onJoin={onJoin} />
    </>
  );
}
