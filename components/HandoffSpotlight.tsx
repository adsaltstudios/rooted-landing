'use client';

import { PhoneFrame } from './phone/PhoneFrame';
import { HandoffScreen } from './phone/HandoffScreen';

export function HandoffSpotlight() {
  return (
    <section id="handoff" className="handoff-spotlight">
      <div className="handoff-grid">
        <div className="handoff-text reveal" data-reveal="true">
          <div className="section-label">The Handoff</div>
          <h2 className="section-title" style={{ maxWidth: '18ch' }}>
            &ldquo;I&apos;ve got it from <em>here.</em>&rdquo;
          </h2>
          <p className="section-lede" style={{ marginBottom: 0 }}>
            When one of you needs to rest, the other gets a calm briefing — last feed, last diaper, next med, what Mom needs, what Baby needs. No briefing required.
          </p>
          <div className="quote">
            &ldquo;Marcus opens the app and knows exactly what&apos;s been happening. I get to actually rest, instead of narrating my day from bed.&rdquo;
          </div>
          <div className="attribution">— Sarah, beta tester · Day 12 postpartum</div>
        </div>
        <div className="handoff-visual reveal" data-reveal="true">
          <div className="device-stage">
            <PhoneFrame scale={0.92}><HandoffScreen /></PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
