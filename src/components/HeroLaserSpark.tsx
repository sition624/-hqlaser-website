'use client';

import { useEffect, useState } from 'react';

export default function HeroLaserSpark() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm">
      {mounted ? (
        // Design-focused product image with rotation and mask effects
        <div className="relative w-full h-full">
          {/* Background image - rotated and scaled */}
          <img
            src="/images/laser-hero-design.jpg"
            alt="HQ Laser Equipment - Designed & Engineered"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: 'rotate(-90deg) scale(1.8)',
              transformOrigin: 'center center',
              filter: 'brightness(0.7) contrast(1.1)',
            }}
          />

          {/* Blur overlay for depth */}
          <div className="absolute inset-0 backdrop-blur-[2px]" />

          {/* Gradient overlays for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-[#0A1628]/30" />

          {/* Vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
        </div>
      ) : null}

      {/* Corner marks */}
      <div className="absolute top-6 left-6 w-10 h-10 border-l-2 border-t-2 border-cyan-400/60" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-cyan-400/60" />

      {/* Tech grid pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
