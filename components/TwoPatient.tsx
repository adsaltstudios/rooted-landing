export function TwoPatient() {
  return (
    <section id="two-patient" className="two-patient">
      <div className="reveal" data-reveal="true" style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="section-label">Two patients, one calm app</div>
        <h2 className="section-title">
          A postpartum view that keeps <em>both of you</em> in mind.
        </h2>
      </div>
      <div className="two-patient-grid">
        <div className="patient-card mom reveal" data-reveal="true">
          <span className="pill-tag"><span className="dot" /> Mom</span>
          <h3>Recovery, one gentle step at a time.</h3>
          <p>Hydration, medications, pelvic floor, mood, sleep, and pain: tracked softly, with prompts that read like a friend, not a chart.</p>
          <ul>
            <li>Medication reminders that don&apos;t feel like alarms</li>
            <li>Hydration and rest, gently nudged</li>
            <li>Mood and pelvic floor check-ins, judgement-free</li>
            <li>Postpartum appointments, in one place</li>
          </ul>
          <svg className="leaf-deco" width="220" height="220" viewBox="0 0 64 64" aria-hidden="true">
            <path d="M32 4 C20 14 14 28 14 44 C28 44 40 28 32 4 Z" fill="#A6B68C"/>
            <path d="M32 4 C44 14 50 28 50 44 C36 44 24 28 32 4 Z" fill="#7E9168"/>
          </svg>
        </div>
        <div className="patient-card baby reveal" data-reveal="true">
          <span className="pill-tag"><span className="dot" /> Baby</span>
          <h3>Feedings, diapers, and tiny wins.</h3>
          <p>One-tap logging for the things you&apos;d rather not have to remember. The first focused gaze. The first long stretch. All of it, gently captured.</p>
          <ul>
            <li>Feeding, diaper, and sleep logs in a single tap</li>
            <li>Wet-diaper count and weight trends</li>
            <li>Pediatric appointments and milestones</li>
            <li>Daily care notes, shared with your partner</li>
          </ul>
          <svg className="leaf-deco" width="220" height="220" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="22" fill="#EFDCC4"/>
            <circle cx="26" cy="28" r="2.5" fill="#8E6B3F"/>
            <circle cx="38" cy="28" r="2.5" fill="#8E6B3F"/>
            <path d="M26 38 q6 4 12 0" stroke="#8E6B3F" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
