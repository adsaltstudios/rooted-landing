'use client';

import React from 'react';
import { AppHeader, RCard, RButton, FONT_DISPLAY, FONT_BODY, R_GREEN, R_TEXT, R_TEXT_MUTED, R_TEXT_SOFT, R_BORDER, SHADOW_SM } from './AppComponents';

function HandoffCell({ label, value, sub, tone }: { label: string; value: string; sub: string; tone: 'beige' | 'cream' }) {
  return (
    <RCard tone={tone} padding={16}>
      <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: R_TEXT_MUTED }}>{label}</div>
      <div style={{ fontFamily: FONT_DISPLAY, fontSize: 24, fontWeight: 500, color: R_TEXT, marginTop: 4, lineHeight: 1.1 }}>{value}</div>
      <div style={{ fontFamily: FONT_BODY, fontSize: 12.5, color: R_TEXT_MUTED, marginTop: 2 }}>{sub}</div>
    </RCard>
  );
}

function NeedRow({ tone, title, items }: { tone: 'mom' | 'baby'; title: string; items: string[] }) {
  const dot = tone === 'mom' ? '#6E8E65' : '#B0613D';
  return (
    <div style={{ background: '#F7EFDF', borderRadius: 16, padding: 16, boxShadow: SHADOW_SM }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: dot }} />
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 17, fontWeight: 600, color: R_TEXT }}>{title}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: FONT_BODY, fontSize: 14, color: R_TEXT }}>
            <span style={{ width: 16, height: 16, borderRadius: 4, border: '1.5px solid ' + R_BORDER, flexShrink: 0 }} />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HandoffScreen() {
  return (
    <div style={{ paddingBottom: 100 }}>
      <AppHeader
        greeting="Saturday, 4:30 pm"
        title={<>Hand off to <em style={{ fontStyle: 'normal', fontWeight: 800, color: R_GREEN }}>Marcus</em></>}
      />
      <div style={{ padding: '0 20px' }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 14, color: R_TEXT_MUTED, lineHeight: 1.6, marginBottom: 18 }}>
          Here&apos;s what&apos;s been happening while you both shift gears.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <HandoffCell label="Last fed" value="4:12 pm" sub="4 oz · left" tone="beige" />
          <HandoffCell label="Last diaper" value="1:30 pm" sub="Wet" tone="beige" />
          <HandoffCell label="Next med" value="2:00 pm" sub="Ibuprofen 400mg" tone="cream" />
          <HandoffCell label="Last sleep" value="2 hr 14 min" sub="Started 11:42" tone="beige" />
        </div>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <NeedRow tone="mom" title="Mom needs" items={['Snack within an hour', 'Quiet rest if possible', 'Refill water bottle']} />
          <NeedRow tone="baby" title="Iris needs" items={['Diaper change soon', 'Tummy time after next feed']} />
        </div>
        <div style={{ marginTop: 20 }}>
          <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: R_TEXT_SOFT, marginBottom: 8 }}>Note from Sarah</div>
          <RCard tone="white" padding={18}>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 17, fontWeight: 500, color: R_TEXT, fontStyle: 'italic', lineHeight: 1.5 }}>
              &ldquo;She fussed a little after the last feed. I think she might want to be held upright for a bit. I&apos;ll be back at 6.&rdquo;
            </div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: R_TEXT_SOFT, marginTop: 10, letterSpacing: '0.04em' }}>4:18 pm</div>
          </RCard>
        </div>
        <div style={{ marginTop: 28 }}>
          <RButton variant="primary" size="lg" full>I&apos;ve got it from here</RButton>
          <div style={{ textAlign: 'center', marginTop: 10, fontFamily: FONT_BODY, fontSize: 12.5, color: R_TEXT_SOFT }}>
            Sarah will get a calm confirmation.
          </div>
        </div>
      </div>
    </div>
  );
}
