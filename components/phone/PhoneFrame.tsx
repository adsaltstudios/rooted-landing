'use client';

import React from 'react';
import { IOSDevice, IOSStatusBar } from './IOSFrame';

export function PhoneFrame({
  children,
  scale = 1,
}: {
  children: React.ReactNode;
  scale?: number;
}) {
  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'center', display: 'inline-block' }}>
      <IOSDevice width={320} height={696}>
        <IOSStatusBar time="9:41" />
        <div style={{ position: 'absolute', inset: 0, paddingTop: 50, background: '#FAF7F2', overflow: 'hidden' }}>
          <div style={{ transform: 'scale(0.78)', transformOrigin: 'top center', width: '128.2%', marginLeft: '-14.1%' }}>
            {children}
          </div>
        </div>
      </IOSDevice>
    </div>
  );
}
