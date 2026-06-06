'use client';

import { useEffect, useCallback } from 'react';
import { Nav } from '@/components/Nav';
import { HeroLamb } from '@/components/HeroLamb';
import { SubHero } from '@/components/SubHero';
import { Values } from '@/components/Values';
import { TwoPatient } from '@/components/TwoPatient';
import { DeviceMarquee } from '@/components/DeviceMarquee';
import { FeatureDive } from '@/components/FeatureDive';
import { HandoffSpotlight } from '@/components/HandoffSpotlight';
import { FounderNote } from '@/components/FounderNote';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  const onJoin = useCallback(() => {
    const el = document.getElementById('join');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
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
  });

  return (
    <>
      <Nav onJoin={onJoin} />
      <HeroLamb />
      <SubHero onJoin={onJoin} />
      <Values />
      <TwoPatient />
      <DeviceMarquee />
      <FeatureDive />
      <HandoffSpotlight />
      <FounderNote />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
