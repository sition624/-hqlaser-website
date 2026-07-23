'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroLaserSpark() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile on mount
    setIsMobile(window.innerWidth < 1024);

    // Manually trigger play for mobile browsers
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Silent fail - some browsers block autoplay
        });
      }
    }
  }, []);

  const videoSrc = isMobile
    ? '/images/laser-hero-blt520-mobile.mp4'
    : '/images/laser-hero-blt520.mp4';

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
      {/* Background video */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster="/images/laser-hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="w-full h-full object-cover"
      />

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent pointer-events-none" />

      {/* Corner marks */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
    </div>
  );
}
