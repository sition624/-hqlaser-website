'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function HeroLaserSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Spark emission point (58% width, 62% height - where laser hits metal)
    const emitX = () => canvas.width * 0.58;
    const emitY = () => canvas.height * 0.62;

    // Resize canvas to match container
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    // Create a new particle
    const createParticle = (): Particle => {
      // Angle between -60° and 30° (mostly upward-right)
      const angle = (-60 + Math.random() * 90) * (Math.PI / 180);
      const speed = 2 + Math.random() * 4;
      const maxLife = 30 + Math.random() * 30;

      return {
        x: emitX() / window.devicePixelRatio,
        y: emitY() / window.devicePixelRatio,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: maxLife,
        maxLife,
        size: 1 + Math.random() * 2,
      };
    };

    // Get particle color based on life (white -> gold -> orange-red)
    const getParticleColor = (life: number, maxLife: number): string => {
      const progress = 1 - life / maxLife; // 0 = new, 1 = dying

      if (progress < 0.3) {
        // Bright white/cyan
        const alpha = 0.9 + Math.random() * 0.1;
        return `rgba(255, 255, 240, ${alpha})`;
      } else if (progress < 0.6) {
        // Golden yellow
        const alpha = 0.7 + Math.random() * 0.2;
        return `rgba(255, 200, 50, ${alpha})`;
      } else {
        // Orange-red, fading out
        const alpha = (1 - progress) * 0.8;
        return `rgba(255, 100, 30, ${alpha})`;
      }
    };

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Generate new particles (maintain 30-40 active)
      const targetCount = 35;
      const currentCount = particlesRef.current.length;
      if (currentCount < targetCount) {
        const toAdd = Math.min(3, targetCount - currentCount);
        for (let i = 0; i < toAdd; i++) {
          particlesRef.current.push(createParticle());
        }
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // Gravity
        p.life--;

        // Draw particle
        if (p.life > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = getParticleColor(p.life, p.maxLife);
          ctx.fill();

          // Add glow effect for bright particles
          if (p.life / p.maxLife > 0.7) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
            const glowAlpha = (p.life / p.maxLife - 0.7) * 0.5;
            ctx.fillStyle = `rgba(255, 220, 100, ${glowAlpha})`;
            ctx.fill();
          }
        }

        return p.life > 0;
      });

      // Draw spark emission point glow
      const glowX = emitX() / window.devicePixelRatio;
      const glowY = emitY() / window.devicePixelRatio;
      const gradient = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, 15);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.3, 'rgba(100, 200, 255, 0.4)');
      gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');
      ctx.beginPath();
      ctx.arc(glowX, glowY, 15, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
      {/* Background image */}
      <img
        src="/images/laser-cutting-hero.jpg"
        alt="Fiber Laser Cutting"
        className="w-full h-full object-cover"
        style={{ objectPosition: '35% center' }}
      />

      {/* Spark particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent pointer-events-none" />

      {/* Corner marks */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
    </div>
  );
}
