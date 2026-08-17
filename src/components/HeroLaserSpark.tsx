'use client';

import { useEffect, useState } from 'react';

export default function HeroLaserSpark() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full bg-[#0F1B2D]">
      {mounted ? (
        // Design-focused product image - clean display (pre-rotated)
        <img
          src="/images/laser-hero-rotated.jpg"
          alt="HQ Laser Equipment - Designed & Engineered"
          className="w-full h-auto"
        />
      ) : null}
    </div>
  );
}
