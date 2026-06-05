'use client';

import { PhoneFrame } from './phone/PhoneFrame';
import { TodayScreen } from './phone/TodayScreen';
import { MomScreen } from './phone/MomScreen';
import { BabyScreen } from './phone/BabyScreen';
import { HandoffScreen } from './phone/HandoffScreen';

const screens = [
  () => <TodayScreen />,
  () => <MomScreen />,
  () => <BabyScreen />,
  () => <HandoffScreen />,
  () => <TodayScreen />,
  () => <MomScreen />,
];

function ScreenRow({ prefix }: { prefix: string }) {
  return (
    <>
      {screens.map((S, i) => (
        <div key={`${prefix}-${i}`} style={{ flexShrink: 0 }}>
          <PhoneFrame scale={0.78}><S /></PhoneFrame>
        </div>
      ))}
    </>
  );
}

export function DeviceMarquee() {
  return (
    <section className="device-strip-section">
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
        <div className="section-label">Inside the app</div>
        <h2 className="section-title">Calm, organized, designed for two.</h2>
        <p className="section-lede">Soft palette. Generous spacing. One-tap logging. Built so an exhausted parent at 3am can still find what matters in seconds.</p>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <ScreenRow prefix="a" />
          <ScreenRow prefix="b" />
        </div>
      </div>
    </section>
  );
}
