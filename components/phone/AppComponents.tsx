'use client';

import * as LucideIcons from 'lucide-react';

export { LambMark } from '../LambMark';

// Design tokens (matching the design system)
export const R_GREEN = '#2F4A37';
export const R_GREEN_DEEP = '#1F3326';
export const R_SAGE = '#889B6E';
export const R_CREAM = '#EAD9C0';
export const R_BEIGE = '#DFC9A9';
export const R_NEUTRAL = '#F3EADA';
export const R_TEXT = '#1F2A23';
export const R_TEXT_MUTED = '#5A6B5F';
export const R_TEXT_SOFT = '#5E6A60';
export const R_BORDER = '#D8C8AE';

export const FONT_DISPLAY = 'var(--font-display)';
export const FONT_BODY = 'var(--font-body)';

export const SHADOW_SM = '0 1px 2px rgba(47,74,55,0.04), 0 1px 3px rgba(47,74,55,0.06)';
export const SHADOW_MD = '0 4px 12px rgba(47,74,55,0.06), 0 2px 4px rgba(47,74,55,0.04)';

// Convert kebab-case icon names (lucide CDN style) to PascalCase (lucide-react)
function toPascalCase(name: string) {
  return name.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

export function Icon({
  name,
  size = 20,
  color = R_GREEN,
  stroke = 1.6,
  style = {},
}: {
  name: string;
  size?: number;
  color?: string;
  stroke?: number;
  style?: React.CSSProperties;
}) {
  const iconName = toPascalCase(name);
  const LucideIcon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; color?: string; style?: React.CSSProperties }>>)[iconName];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} strokeWidth={stroke} color={color} style={{ display: 'inline-block', ...style }} />;
}

export function RCard({
  children,
  tone = 'cream',
  padding = 20,
  style = {},
  onClick,
}: {
  children: React.ReactNode;
  tone?: 'cream' | 'beige' | 'sage' | 'neutral' | 'white';
  padding?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const tones: Record<string, string> = {
    cream: R_CREAM, beige: R_BEIGE, sage: '#DEE6CB', neutral: R_NEUTRAL, white: '#F7EFDF',
  };
  return (
    <div
      onClick={onClick}
      style={{
        background: tones[tone], borderRadius: 18, padding,
        boxShadow: SHADOW_SM, cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function RChip({
  children,
  tone = 'sage',
  style = {},
}: {
  children: React.ReactNode;
  tone?: 'sage' | 'warm' | 'danger' | 'neutral' | 'mom' | 'baby' | 'forest';
  style?: React.CSSProperties;
}) {
  const tones: Record<string, { bg: string; fg: string; dot: string | null }> = {
    sage:    { bg: '#DFE7CC', fg: '#3A4D34', dot: '#6E8E65' },
    warm:    { bg: '#EFD8BF', fg: '#6B4925', dot: '#B0613D' },
    danger:  { bg: '#F4DDD4', fg: '#8E3F2E', dot: '#B5604F' },
    neutral: { bg: '#E2E8EA', fg: '#34424B', dot: '#6B7F8E' },
    mom:     { bg: R_CREAM,   fg: R_GREEN,   dot: null },
    baby:    { bg: R_BEIGE,   fg: '#6B4925', dot: null },
    forest:  { bg: R_GREEN,   fg: R_NEUTRAL, dot: null },
  };
  const t = tones[tone];
  return (
    <span style={{ fontFamily: FONT_BODY, fontSize: 12.5, fontWeight: 600, padding: '6px 12px', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 6, background: t.bg, color: t.fg, ...style }}>
      {t.dot && <span style={{ width: 5, height: 5, borderRadius: 999, background: t.dot }} />}
      {children}
    </span>
  );
}

export function RRing({
  value = 0.5,
  size = 72,
  label,
  sublabel,
  color = R_SAGE,
  track = '#E2D5BD',
}: {
  value?: number;
  size?: number;
  label?: string;
  sublabel?: string;
  color?: string;
  track?: string;
}) {
  const pct = Math.round(value * 100);
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: `conic-gradient(${color} 0 ${pct}%, ${track} 0)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: size - 14, height: size - 14, borderRadius: '50%', background: R_NEUTRAL, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: size * 0.26, fontWeight: 500, color: R_GREEN, lineHeight: 1 }}>{label}</div>
        {sublabel && <div style={{ fontFamily: FONT_BODY, fontSize: 10, color: R_TEXT_SOFT, letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: 2 }}>{sublabel}</div>}
      </div>
    </div>
  );
}

export function RSectionTitle({
  children,
  action,
  label,
}: {
  children: React.ReactNode;
  action?: string;
  label?: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '0 0 12px' }}>
      <div>
        {label && <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: R_TEXT_SOFT, marginBottom: 4 }}>{label}</div>}
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 500, color: R_TEXT, letterSpacing: '-0.01em' }}>{children}</div>
      </div>
      {action && <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: R_GREEN, fontWeight: 600 }}>{action}</div>}
    </div>
  );
}

export function AppHeader({
  title,
  greeting,
  right,
}: {
  title: React.ReactNode;
  greeting?: string;
  right?: React.ReactNode;
}) {
  return (
    <div style={{ padding: '8px 20px 14px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {greeting && <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: R_TEXT_MUTED, marginBottom: 4 }}>{greeting}</div>}
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 500, color: R_TEXT, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{title}</div>
        </div>
        {right && <div style={{ flexShrink: 0, marginTop: greeting ? 18 : 0 }}>{right}</div>}
      </div>
    </div>
  );
}

export function RButton({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  onClick,
  style = {},
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'cream';
  size?: 'sm' | 'md' | 'lg';
  full?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  const sizes: Record<string, React.CSSProperties> = {
    sm: { padding: '10px 16px', fontSize: 14 },
    md: { padding: '14px 22px', fontSize: 15 },
    lg: { padding: '17px 24px', fontSize: 16 },
  };
  const variants: Record<string, React.CSSProperties> = {
    primary: { background: R_GREEN, color: R_NEUTRAL },
    secondary: { background: '#DFE7CC', color: R_GREEN },
    ghost: { background: 'transparent', color: R_GREEN },
    cream: { background: R_CREAM, color: R_GREEN, boxShadow: 'inset 0 0 0 1px ' + R_BORDER },
  };
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: FONT_BODY, fontWeight: 600, letterSpacing: '0.01em',
        border: 'none', cursor: 'pointer', borderRadius: 14,
        width: full ? '100%' : 'auto',
        transition: 'background 240ms cubic-bezier(0.4,0,0.2,1)',
        ...sizes[size], ...variants[variant], ...style,
      }}
    >
      {children}
    </button>
  );
}
