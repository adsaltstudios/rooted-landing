'use client';

import React from 'react';
import { AppHeader, RCard, RSectionTitle, LambMark, Icon, FONT_DISPLAY, FONT_BODY, R_GREEN, R_TEXT, R_TEXT_MUTED, R_TEXT_SOFT, R_BEIGE } from './AppComponents';

function BabyStat({ icon, label, value, sub }: { icon: string; label: string; value: string; sub: string }) {
  return (
    <RCard tone="cream" padding={16}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
        <Icon name={icon} size={18} color={R_GREEN} />
        <div style={{ fontFamily: FONT_BODY, fontSize: 10.5, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: R_TEXT_SOFT }}>{label}</div>
      </div>
      <div style={{ fontFamily: FONT_DISPLAY, fontSize: 30, fontWeight: 500, color: R_TEXT, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: R_TEXT_MUTED, marginTop: 4 }}>{sub}</div>
    </RCard>
  );
}

const feeds = [
  { time: '4:12 pm', detail: 'Bottle · 4 oz · L', mins: '18 min' },
  { time: '1:45 pm', detail: 'Breast · L → R', mins: '22 min' },
  { time: '11:00 am', detail: 'Bottle · 3.5 oz', mins: '16 min' },
  { time: '8:30 am', detail: 'Breast · R', mins: '20 min' },
];

export function BabyScreen() {
  return (
    <div style={{ paddingBottom: 100 }}>
      <AppHeader
        greeting="9 days old · 7 lb 4 oz"
        title={<>Iris&apos;s <em style={{ fontStyle: 'normal', fontWeight: 800, color: '#8E6B3F' }}>day</em></>}
      />
      <div style={{ padding: '0 20px' }}>
        <RCard tone="beige" padding={18}>
          <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8E6B3F' }}>Last activity</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 500, color: R_TEXT, marginTop: 4 }}>Feeding · 4 oz, left side</div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: R_TEXT_MUTED, marginTop: 2 }}>About 2 hours ago · 4:12 pm</div>
        </RCard>
      </div>
      <div style={{ padding: '20px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <BabyStat icon="baby" label="Feedings" value="6" sub="of ~8" />
        <BabyStat icon="droplets" label="Wet diapers" value="7" sub="healthy range" />
        <BabyStat icon="circle-dashed" label="Dirty" value="3" sub="today" />
        <BabyStat icon="moon" label="Sleep" value="14h" sub="5 stretches" />
      </div>
      <div style={{ padding: '24px 20px 0' }}>
        <RSectionTitle action="+ Log">Today&apos;s feeds</RSectionTitle>
        <RCard tone="white" padding={4}>
          {feeds.map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderBottom: i < feeds.length - 1 ? '1px solid #EFE7D8' : 'none' }}>
              <div style={{ width: 8, height: 8, borderRadius: 999, background: R_BEIGE }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: FONT_BODY, fontSize: 14, fontWeight: 600, color: R_TEXT }}>{f.detail}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: R_TEXT_MUTED }}>{f.mins}</div>
              </div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: R_TEXT_SOFT, fontWeight: 500 }}>{f.time}</div>
            </div>
          ))}
        </RCard>
      </div>
      <div style={{ padding: '24px 20px 0' }}>
        <RCard tone="sage">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 48, height: 48 }}><LambMark size={48} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: R_TEXT_MUTED }}>Milestone</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 19, fontWeight: 500, color: R_TEXT, marginTop: 2 }}>First focused gaze</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: R_TEXT_MUTED }}>Logged yesterday</div>
            </div>
          </div>
        </RCard>
      </div>
    </div>
  );
}
