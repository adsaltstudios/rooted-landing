'use client';

import { EmailForm } from './EmailForm';
import { LambMark } from './LambMark';
import { PhoneFrame } from './phone/PhoneFrame';
import { TodayScreen } from './phone/TodayScreen';
import { scrollToId } from '@/lib/scroll';

export function HeroLamb() {
  return (
    <section className="hero hero-lamb">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-eyebrow hero-eyebrow-dark">
            <span className="dot" /> Waitlist now open
          </div>

          <h1 className="hero-title hero-title-dark">
            Postpartum,<br />
            <em>held together.</em>
          </h1>

          <p className="hero-sub hero-sub-dark">
            Rooted is the calm home base for new parents. Track Mom&apos;s recovery and Baby&apos;s care, side by side, so neither of you has to hold it all in your head.
          </p>

          <div className="hero-join">
            <EmailForm id="hero-email-form" ctaLabel="Hold my spot" />
            <button className="hero-see-link" onClick={() => scrollToId('#features')}>
              See how it works
            </button>
          </div>
        </div>

        <div className="hero-showcase" aria-hidden="true" inert={true}>
          <div className="hero-phone-rise">
            <div className="hero-phone">
              <PhoneFrame scale={1}>
                <TodayScreen />
              </PhoneFrame>
            </div>
          </div>
          <LambMark className="hero-lamb-badge" size={128} />
        </div>
      </div>

      <div className="hero-scroll-cue hero-scroll-cue-dark" />
    </section>
  );
}
