function scrollToSection(id: string) {
  if (typeof window === 'undefined') return;
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
}

export function SubHero({ onJoin }: { onJoin: () => void }) {
  return (
    <section className="sub-hero">
      <h2>Care for her. Care for baby. Together.</h2>
      <p>The first months after birth ask everything of two people at once. Rooted helps you do it gently, and on the same page.</p>
      <div className="cta-row">
        <button className="btn-pill primary lg" onClick={onJoin}>Join the waitlist</button>
        <button className="btn-pill outline lg" onClick={() => scrollToSection('#features')}>Take a look inside</button>
      </div>
    </section>
  );
}
