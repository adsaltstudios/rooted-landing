'use client';

import React from 'react';
import { AppHeader, RCard, RRing, RSectionTitle, Icon, FONT_DISPLAY, FONT_BODY, R_GREEN, R_TEXT, R_TEXT_MUTED, R_TEXT_SOFT, R_CREAM, R_BORDER, SHADOW_SM } from './AppComponents';

function QuickLog({ icon, label, tone }: { icon: string; label: string; tone: 'beige' | 'cream' }) {
  const bg = tone === 'beige' ? '#EFDCC4' : '#F4E9DB';
  return (
    <div style={{ background: bg, borderRadius: 16, padding: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
      <Icon name={icon} size={22} color={R_GREEN} />
      <span style={{ fontFamily: FONT_BODY, fontSize: 12, fontWeight: 600, color: R_GREEN, letterSpacing: '0.02em' }}>{label}</span>
    </div>
  );
}

function PriorityRow({ time, tone, title, sub }: { time: string; tone: 'mom' | 'baby'; title: string; sub: string }) {
  const dotColor = tone === 'mom' ? '#6E8E65' : '#C9904A';
  return (
    <div style={{ background: '#FFFFFF', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: SHADOW_SM }}>
      <div style={{ width: 8, height: 40, borderRadius: 999, background: dotColor }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 15, fontWeight: 600, color: R_TEXT }}>{title}</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 12.5, color: R_TEXT_MUTED }}>{sub}</div>
      </div>
      <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: R_TEXT_SOFT, fontWeight: 500 }}>{time}</div>
    </div>
  );
}

export function TodayScreen() {
  return (
    <div style={{ paddingBottom: 100 }}>
      <AppHeader
        greeting="Saturday · Day 9 postpartum"
        title={<span>Good morning,<br /><em style={{ fontStyle: 'italic', color: R_GREEN }}>Sarah</em></span>}
        right={
          <div style={{ width: 40, height: 40, borderRadius: 999, background: R_CREAM, border: '1px solid ' + R_BORDER, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontSize: 16, color: R_GREEN, fontWeight: 600 }}>S</div>
        }
      />
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <RCard tone="cream" padding={20} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <RRing value={0.65} size={68} label="65%" sublabel="Today" color="#A6B68C" />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: R_TEXT_SOFT }}>Mom</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 500, color: R_TEXT, marginTop: 2 }}>Sarah, day 9</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: R_TEXT_MUTED, marginTop: 4 }}>Hydration on track · 1 med soon</div>
          </div>
          <Icon name="chevron-right" color={R_TEXT_SOFT} size={20} />
        </RCard>
        <RCard tone="beige" padding={20} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <RRing value={0.8} size={68} label="6×" sublabel="Feeds" color="#C9904A" track="#F4E2CE" />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8E6B3F' }}>Baby</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 500, color: R_TEXT, marginTop: 2 }}>Iris, 9 days</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: R_TEXT_MUTED, marginTop: 4 }}>Last feed about 2 hr ago</div>
          </div>
          <Icon name="chevron-right" color={R_TEXT_SOFT} size={20} />
        </RCard>
      </div>
      <div style={{ padding: '24px 20px 0' }}>
        <RSectionTitle label="Today" action="See all">Gentle priorities</RSectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PriorityRow time="2:00 pm" tone="mom" title="Ibuprofen 400mg" sub="With food · Mom" />
          <PriorityRow time="3:30 pm" tone="baby" title="Feeding due" sub="About 90 minutes from now" />
          <PriorityRow time="6:00 pm" tone="mom" title="Pelvic floor check-in" sub="2 minutes · gentle" />
        </div>
      </div>
      <div style={{ padding: '28px 20px 0' }}>
        <RSectionTitle label="Quick log">One tap is enough</RSectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          <QuickLog icon="baby" label="Feeding" tone="beige" />
          <QuickLog icon="droplet" label="Diaper" tone="beige" />
          <QuickLog icon="pill" label="Med" tone="cream" />
          <QuickLog icon="moon" label="Sleep" tone="cream" />
        </div>
      </div>
      <div style={{ padding: '28px 20px 0' }}>
        <RCard tone="sage">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: '#FAF7F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="users" color={R_GREEN} size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 19, fontWeight: 500, color: R_TEXT }}>Hand off to Marcus</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: R_TEXT_MUTED, marginTop: 2 }}>3 small notes ready to share</div>
            </div>
            <Icon name="chevron-right" color={R_TEXT_SOFT} />
          </div>
        </RCard>
      </div>
    </div>
  );
}
