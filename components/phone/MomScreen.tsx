'use client';

import React from 'react';
import { AppHeader, RCard, RRing, RChip, RSectionTitle, RButton, Icon, FONT_DISPLAY, FONT_BODY, R_GREEN, R_TEXT, R_TEXT_MUTED, R_TEXT_SOFT, SHADOW_SM } from './AppComponents';

function MedRow({ icon, name, detail, time, done }: { icon: string; name: string; detail: string; time: string; done?: boolean }) {
  return (
    <div style={{ background: '#FFFFFF', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: SHADOW_SM, opacity: done ? 0.6 : 1 }}>
      <div style={{ width: 38, height: 38, borderRadius: 12, background: '#EAF0DF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={18} color={R_GREEN} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 15, fontWeight: 600, color: R_TEXT, textDecoration: done ? 'line-through' : 'none' }}>{name}</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 12.5, color: R_TEXT_MUTED }}>{detail}</div>
      </div>
      <div style={{ fontFamily: FONT_BODY, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: done ? '#6E8E65' : R_TEXT_SOFT, textAlign: 'right' }}>{time}</div>
    </div>
  );
}

export function MomScreen() {
  return (
    <div style={{ paddingBottom: 100 }}>
      <AppHeader
        greeting="Day 9 postpartum"
        title={<>Sarah&apos;s <em style={{ fontStyle: 'normal', fontWeight: 800, color: R_GREEN }}>recovery</em></>}
      />
      <div style={{ padding: '0 20px' }}>
        <RCard tone="white" padding={18} style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <RRing value={0.65} size={64} label="65%" color="#A6B68C" />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_BODY, fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: R_TEXT_SOFT }}>Today</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 19, fontWeight: 500, color: R_TEXT, marginTop: 2 }}>You&apos;re moving gently.</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: R_TEXT_MUTED, marginTop: 2 }}>Hydration · Sleep · 1 med pending</div>
          </div>
        </RCard>
      </div>
      <div style={{ padding: '24px 20px 0' }}>
        <RSectionTitle action="+ Add">Hydration</RSectionTitle>
        <RCard tone="cream">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 14 }}>
            <div>
              <span style={{ fontFamily: FONT_DISPLAY, fontSize: 36, fontWeight: 500, color: R_GREEN }}>42</span>
              <span style={{ fontFamily: FONT_BODY, fontSize: 14, color: R_TEXT_MUTED, marginLeft: 6 }}>oz of 80</span>
            </div>
            <RChip tone="sage">On track</RChip>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {([1,1,1,1,1,0.5,0,0,0,0] as number[]).map((f, i) => (
              <div key={i} style={{ flex: 1, height: 36, background: '#EFE7D8', borderRadius: 6, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: `${f * 100}%`, background: '#A6B68C' }} />
              </div>
            ))}
          </div>
        </RCard>
      </div>
      <div style={{ padding: '24px 20px 0' }}>
        <RSectionTitle action="Edit">Medications</RSectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <MedRow icon="pill" name="Prenatal vitamin" detail="1 tablet" time="Done · 8:00 am" done />
          <MedRow icon="pill" name="Ibuprofen" detail="400mg · with food" time="Soon · 2:00 pm" />
          <MedRow icon="pill" name="Stool softener" detail="Optional" time="9:00 pm" />
        </div>
      </div>
      <div style={{ padding: '24px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <RCard tone="sage" padding={18}>
          <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: R_TEXT_MUTED }}>Mood</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 24, fontWeight: 500, color: R_TEXT, marginTop: 6 }}>Tender</div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: R_TEXT_MUTED, marginTop: 2 }}>Logged 9:42 am</div>
        </RCard>
        <RCard tone="cream" padding={18}>
          <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: R_TEXT_MUTED }}>Sleep</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 24, fontWeight: 500, color: R_TEXT, marginTop: 6 }}>5h 40m</div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: R_TEXT_MUTED, marginTop: 2 }}>3 wakings</div>
        </RCard>
      </div>
      <div style={{ padding: '24px 20px 0' }}>
        <RCard tone="white">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <Icon name="leaf" color={R_GREEN} size={22} />
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 19, fontWeight: 500, color: R_TEXT }}>Pelvic floor check-in</div>
          </div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: R_TEXT_MUTED, lineHeight: 1.5, marginBottom: 12 }}>
            Two gentle minutes: breathe and notice. No reps, no pressure.
          </div>
          <RButton variant="primary" size="sm">Start</RButton>
        </RCard>
      </div>
    </div>
  );
}
