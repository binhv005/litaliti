import React from 'react';

const WAVE = 'M0 40 C200 0 380 10 560 44 C740 78 900 70 1080 36 C1240 6 1360 12 1440 34 L1440 80 L0 80 Z';

// Full-width coloured band with wavy top and bottom edges (fixed-height waves + solid body).
export default function WaveBand({ color }) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg className="absolute top-0 left-0 w-full h-16 block" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d={WAVE} fill={color} />
      </svg>
      <div className="absolute inset-x-0 top-[63px] bottom-[63px]" style={{ backgroundColor: color }} />
      <svg
        className="absolute bottom-0 left-0 w-full h-16 block rotate-180 -scale-x-100"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path d={WAVE} fill={color} />
      </svg>
    </div>
  );
}
