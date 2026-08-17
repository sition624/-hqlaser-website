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
        // Design-focused product image with mask effects
        <div className="relative w-full h-full">
          {/* Background image - no rotation, show complete */}
          <img
            src="/images/laser-hero-design.jpg"
            alt="HQ Laser Equipment - Designed & Engineered"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: 'center top',
              filter: 'brightness(0.75) contrast(1.05)',
            }}
          />

          {/* Blur overlay for depth */}
          <div className="absolute inset-0 backdrop-blur-[1px]" />

          {/* Gradient overlays for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-transparent to-[#0A1628]/20" />

          {/* Vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]" />
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
