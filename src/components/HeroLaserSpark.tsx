'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number; // 0=white, 1=gold, 2=orange-red
}

export default function HeroLaserSpark() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Desktop: manually trigger video play
  useEffect(() => {
    if (!isDesktop) return;
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Silent fail - some browsers block autoplay
        });
      }
    }
  }, [isDesktop]);

  // Mobile: Canvas spark particle animation
  useEffect(() => {
    if (isDesktop) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Emission point: where laser head contacts the sheet metal (center-ish, mid-lower)
    const emitX = () => canvas.width * 0.5;
    const emitY = () => canvas.height * 0.55;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Create a new spark particle
    const createParticle = (): Particle => {
      // Spread angle: -100° to 80° (upward and sideways, simulating sparks flying)
      const angle = (-100 + Math.random() * 180) * (Math.PI / 180);
      const speed = 2 + Math.random() * 5; // 2-7 px/frame
      const maxLife = 30 + Math.random() * 40; // 30-70 frames

      // Color distribution: 30% white-hot, 40% gold, 30% orange-red
      const colorRoll = Math.random();
      let hue: number;
      if (colorRoll < 0.3) {
        hue = 0; // white-hot
      } else if (colorRoll < 0.7) {
        hue = 1; // gold
      } else {
        hue = 2; // orange-red
      }

      return {
        x: emitX() / (window.devicePixelRatio || 1),
        y: emitY() / (window.devicePixelRatio || 1),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: maxLife,
        maxLife,
        size: 2 + Math.random() * 3, // 2-5px
        hue,
      };
    };

    // Get particle color based on type and life
    const getParticleColor = (particle: Particle): string => {
      const progress = 1 - particle.life / particle.maxLife; // 0=new, 1=dying
      const alpha = Math.max(0, (1 - progress * progress) * 0.95);

      if (particle.hue === 0) {
        // White-hot core -> fades to pale yellow
        const r = 255;
        const g = 255 - progress * 40;
        const b = 220 - progress * 120;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      } else if (particle.hue === 1) {
        // Gold -> orange
        const r = 255;
        const g = 200 - progress * 80;
        const b = 50 - progress * 40;
        return `rgba(${r}, ${g}, ${Math.max(0, b)}, ${alpha})`;
      } else {
        // Orange-red -> dark red
        const r = 255 - progress * 60;
        const g = 120 - progress * 80;
        const b = 20;
        return `rgba(${r}, ${Math.max(0, g)}, ${b}, ${alpha})`;
      }
    };

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Maintain 50-70 active particles
      const targetCount = 60;
      const currentCount = particlesRef.current.length;
      if (currentCount < targetCount) {
        const toAdd = Math.min(3, targetCount - currentCount);
        for (let i = 0; i < toAdd; i++) {
          particlesRef.current.push(createParticle());
        }
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        // Physics update
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12; // Gravity (downward acceleration)
        p.vx *= 0.98; // Air resistance
        p.vy *= 0.98;
        p.life--;

        if (p.life <= 0) return false;

        const lifeRatio = p.life / p.maxLife;
        const color = getParticleColor(p);

        // Glow effect
        ctx.shadowBlur = 15 + lifeRatio * 20;
        ctx.shadowColor = color;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (0.5 + lifeRatio * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Extra bright core for fresh particles
        if (lifeRatio > 0.7) {
          ctx.shadowBlur = 25;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${lifeRatio * 0.8})`;
          ctx.fill();
        }

        // Reset shadow
        ctx.shadowBlur = 0;

        return true;
      });

      // Draw emission point glow (laser contact point)
      const glowX = emitX() / (window.devicePixelRatio || 1);
      const glowY = emitY() / (window.devicePixelRatio || 1);
      const gradient = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, 20);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.3, 'rgba(200, 230, 255, 0.6)');
      gradient.addColorStop(0.6, 'rgba(100, 180, 255, 0.3)');
      gradient.addColorStop(1, 'rgba(80, 160, 255, 0)');
      ctx.beginPath();
      ctx.arc(glowX, glowY, 20, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
      particlesRef.current = [];
    };
  }, [isDesktop]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
      {mounted && isDesktop ? (
        // Desktop: Video
        <video
          ref={videoRef}
          src="/images/laser-hero-blt520.mp4"
          poster="/images/laser-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          {...({ 'webkit-playsinline': 'true' } as Record<string, string>)}
          preload="auto"
          className="w-full h-full object-cover"
        />
      ) : mounted ? (
        // Mobile: Background image + Canvas sparks
        <>
          <img
            src="/images/laser-hero-spark-bg.jpg"
            alt="Laser Cutting"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />
        </>
      ) : null}

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent pointer-events-none" />

      {/* Corner marks */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
    </div>
  );
}
