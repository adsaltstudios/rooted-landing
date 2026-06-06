'use client';

import { PhoneFrame } from './phone/PhoneFrame';
import { MomScreen } from './phone/MomScreen';
import { BabyScreen } from './phone/BabyScreen';
import { TodayScreen } from './phone/TodayScreen';

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="#A6B68C" strokeWidth="1.5"/>
        <path d="M6 10.5 l3 3 l5.5 -6" stroke="#2F4A37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>{children}</span>
    </li>
  );
}

export function FeatureDive() {
  return (
    <section id="features" className="feature-dive">
      <div className="feature-dive-header reveal" data-reveal="true">
        <div className="section-label">Features</div>
        <h2 className="section-title">A few small things that change <em>everything.</em></h2>
        <p className="section-lede">No dashboards to learn. No alarms. Just the parts of postpartum that are easy to forget, quietly held for you.</p>
      </div>

      <div className="feature-row reveal" data-reveal="true">
        <div className="feature-copy">
          <div className="small-label">Mom&apos;s recovery</div>
          <h3>Medications and recovery, gently held.</h3>
          <p>Soft reminders for ibuprofen and the stool softener you&apos;d rather forget. Hydration nudges that read like a friend handing you a glass of water.</p>
          <ul className="feature-bullets">
            <Bullet>Medication schedule with calm reminders</Bullet>
            <Bullet>Hydration tracking with daily goal</Bullet>
            <Bullet>Mood and sleep check-ins</Bullet>
            <Bullet>Pelvic floor moments: two minutes, no reps</Bullet>
          </ul>
        </div>
        <div className="feature-visual">
          <div className="device-stage">
            <PhoneFrame scale={0.84}><MomScreen /></PhoneFrame>
          </div>
        </div>
      </div>

      <div className="feature-row reverse reveal" data-reveal="true">
        <div className="feature-copy">
          <div className="small-label">Baby&apos;s day</div>
          <h3>Feedings, diapers, sleep: one tap each.</h3>
          <p>The things you&apos;d rather not be tallying in your head. Logged from your lock screen, visible to your partner the moment it happens.</p>
          <ul className="feature-bullets">
            <Bullet>One-tap feeding, diaper, and sleep logs</Bullet>
            <Bullet>Wet-diaper count and weight tracking</Bullet>
            <Bullet>Pediatric appointments in one calm timeline</Bullet>
            <Bullet>Milestones, captured the moment they happen</Bullet>
          </ul>
        </div>
        <div className="feature-visual">
          <div className="device-stage">
            <PhoneFrame scale={0.84}><BabyScreen /></PhoneFrame>
          </div>
        </div>
      </div>

      <div className="feature-row reveal" data-reveal="true">
        <div className="feature-copy">
          <div className="small-label">Today, together</div>
          <h3>One screen for the day you&apos;re both having.</h3>
          <p>Two patient cards, gentle priorities, quick logs in the lower third where your thumb already lives. The whole household, in a glance.</p>
          <ul className="feature-bullets">
            <Bullet>Mom and Baby, side by side</Bullet>
            <Bullet>Three priorities, never a 17-item to-do</Bullet>
            <Bullet>Quick log right where your thumb rests</Bullet>
            <Bullet>&ldquo;About 2 hours ago&rdquo; instead of &ldquo;2h 47m&rdquo;</Bullet>
          </ul>
        </div>
        <div className="feature-visual">
          <div className="device-stage">
            <PhoneFrame scale={0.84}><TodayScreen /></PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
