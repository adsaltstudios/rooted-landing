import { ImageResponse } from 'next/og';

export const alt = 'Rooted: Postpartum, held together.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Branded Open Graph card, generated at build time via next/og (no binary asset needed).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '96px',
          background: '#2F4A37',
          color: '#F3EADA',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, letterSpacing: 8, color: '#A7B98C', marginBottom: 30 }}>
          ROOTED
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 110, fontWeight: 800, lineHeight: 1.02, letterSpacing: -4 }}>
          <div>Postpartum,</div>
          <div>held together.</div>
        </div>
        <div style={{ display: 'flex', fontSize: 36, color: 'rgba(250,247,242,0.85)', marginTop: 40, maxWidth: 880, lineHeight: 1.3 }}>
          {'A calm home for the fourth trimester. Track Mom\'s recovery and Baby\'s care, side by side.'}
        </div>
      </div>
    ),
    { ...size },
  );
}
