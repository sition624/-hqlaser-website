'use client';

import { useEffect, useState } from 'react';

export default function HeroLaserSpark() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
      {mounted ? (
        // Unified: Design-focused product image for both desktop and mobile
        <img
          src="/images/laser-hero-design.jpg"
          alt="HQ Laser Equipment - Designed & Engineered"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
      ) : null}

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent pointer-events-none" />

      {/* Corner marks */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
    </div>
  );
}
