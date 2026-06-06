import type { CSSProperties } from 'react';

// The Rooted lamb, inline and transparent. Scales crisply at any size and
// avoids shipping the ~390KB raster for a mark shown at 30-128px.
export function LambMark({
  size = 56,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 420 420"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M92 199.05C70.4 181.5 70.4 150.45 100.1 138.3C136.55 124.8 164.9 142.35 173 169.35C159.5 192.3 132.5 207.15 92 199.05Z" fill="#99AB79" stroke="#8C9969" strokeWidth="5.4" strokeLinejoin="round" />
      <path d="M335 199.05C356.6 181.5 356.6 150.45 326.9 138.3C290.45 124.8 262.1 142.35 254 169.35C267.5 192.3 294.5 207.15 335 199.05Z" fill="#99AB79" stroke="#8C9969" strokeWidth="5.4" strokeLinejoin="round" />
      <path d="M147.35 166.65Q124.4 165.3 104.15 185.55" stroke="#8C9969" strokeWidth="4.05" strokeLinecap="round" />
      <path d="M279.65 166.65Q302.6 165.3 322.85 185.55" stroke="#8C9969" strokeWidth="4.05" strokeLinecap="round" />
      <ellipse cx="213.5" cy="209.85" rx="64.8" ry="70.2" fill="#F8E7D6" stroke="#E8C8AC" strokeWidth="4.05" />
      <path d="M213.5 72.15C189.2 72.15 174.35 88.35 171.65 109.95C151.4 101.85 129.8 111.3 119 130.2C98.75 130.2 82.55 146.4 82.55 166.65C82.55 184.2 96.05 199.05 112.25 203.1C104.15 226.05 114.95 249 136.55 255.75C133.85 277.35 148.7 294.9 168.95 294.9C174.35 313.8 191.9 325.95 213.5 325.95C235.1 325.95 252.65 313.8 258.05 294.9C278.3 294.9 293.15 277.35 290.45 255.75C312.05 249 322.85 226.05 314.75 203.1C330.95 199.05 344.45 184.2 344.45 166.65C344.45 146.4 328.25 130.2 308 130.2C297.2 111.3 275.6 101.85 255.35 109.95C252.65 88.35 237.8 72.15 213.5 72.15Z" fill="#F3EADA" stroke="#D9C0A6" strokeWidth="5.4" strokeLinejoin="round" />
      <path d="M168.95 212.55Q181.1 195 194.6 212.55" stroke="#2F4A37" strokeWidth="5.4" strokeLinecap="round" />
      <path d="M232.4 212.55Q244.55 195 258.05 212.55" stroke="#2F4A37" strokeWidth="5.4" strokeLinecap="round" />
      <path d="M202.7 235.5Q213.5 224.7 224.3 235.5" stroke="#2F4A37" strokeWidth="5.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M213.5 235.5L213.5 253.05" stroke="#2F4A37" strokeWidth="5.4" strokeLinecap="round" />
      <path d="M213.5 253.05Q195.95 263.85 189.2 251.7" stroke="#2F4A37" strokeWidth="5.4" strokeLinecap="round" />
      <path d="M213.5 253.05Q231.05 263.85 237.8 251.7" stroke="#2F4A37" strokeWidth="5.4" strokeLinecap="round" />
    </svg>
  );
}
