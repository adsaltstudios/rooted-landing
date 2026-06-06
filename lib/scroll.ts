// Smooth-scroll helpers that respect the user's reduced-motion preference.
// Offset matches the `scroll-margin-top` used for hash navigation in globals.css.

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToId(id: string, offset = 84) {
  if (typeof window === 'undefined') return;
  const el = document.querySelector(id.startsWith('#') ? id : `#${id}`);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - offset,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
}

export function scrollToTop() {
  if (typeof window === 'undefined') return;
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}
