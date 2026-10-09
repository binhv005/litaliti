import React, { useEffect, useRef } from 'react';

// Organic pastel blobs (sage green + soft brown) scattered down the page background.
const BLOB_A = 'M60 0 C130 90 190 150 190 280 C190 420 280 520 360 480 C420 450 450 430 500 470 C560 520 640 560 700 520 L700 0 Z';
const BLOB_B = 'M200 700 C160 640 80 600 0 640 L0 1200 L700 1200 L700 560 C640 520 560 560 520 640 C490 700 520 790 500 860 C470 960 380 1010 300 1060 C240 1100 200 1140 190 1200 L0 1200 L0 700 Z';
const BLOB_C = 'M0 80 C120 20 240 60 300 160 C360 260 300 380 190 410 C80 440 0 380 0 280 Z';
const BLOB_D = 'M300 0 C420 40 460 160 400 260 C340 360 200 380 100 320 C0 260 20 120 120 60 C190 20 240 -10 300 0 Z';

const SHAPES = [BLOB_A, BLOB_C, BLOB_D];
const FILLS = ['#E3D3C0', '#EADFD1', '#A98567', '#CDB59C'];
const COUNT = 20;

// Evenly spaced down the page, alternating sides, cycling shape/colour/rotation.
const blobs = Array.from({ length: COUNT }, (_, i) => {
  const onRight = i % 2 === 0;
  const fill = FILLS[(i * 3) % FILLS.length];
  return {
    d: SHAPES[i % SHAPES.length],
    fill,
    top: `${(i / COUNT) * 100 + 1}%`,
    [onRight ? 'right' : 'left']: `${-8 - (i % 3) * 3}%`,
    w: 380 + (i % 4) * 50,
    op: fill === '#A98567' ? 0.4 : 0.55,
    rot: (i * 67) % 360,
  };
});

export default function BackgroundBlobs() {
  const rootRef = useRef(null);

  // Subtle parallax: each blob drifts a little relative to the viewport centre (transform only, rAF-throttled).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const root = rootRef.current;
    if (!root) return undefined;
    const nodes = Array.from(root.children);
    let ticking = false;

    const update = () => {
      ticking = false;
      const pageH = root.offsetHeight;
      const center = window.scrollY + window.innerHeight / 2;
      nodes.forEach((node, i) => {
        const blobY = (parseFloat(blobs[i].top) / 100) * pageH;
        const delta = Math.max(-700, Math.min(700, center - blobY));
        const dir = i % 2 === 0 ? -1 : 1; // alternate drift direction
        node.style.transform = `translate3d(0, ${(delta * 0.07 * dir).toFixed(1)}px, 0) rotate(${blobs[i].rot}deg)`;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {blobs.map((b, i) => (
        <svg
          key={i}
          viewBox="0 0 700 560"
          className="absolute max-w-none will-change-transform"
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            width: `min(${b.w}px, 60vw)`,
            opacity: b.op,
            transform: `rotate(${b.rot}deg)`,
          }}
        >
          <path d={b.d} fill={b.fill} />
        </svg>
      ))}
    </div>
  );
}
