'use client';

import { useEffect, useState } from 'react';

export default function HeroLaserSpark() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-sm bg-[#0F1B2D]">
      {mounted ? (
        // Design-focused product image - clean display
        <img
          src="/images/laser-hero-design.jpg"
          alt="HQ Laser Equipment - Designed & Engineered"
          className="w-full h-auto object-contain"
          style={{
            transform: 'rotate(90deg)',
            maxHeight: '600px',
          }}
        />
      ) : null}
    </div>
  );
}
