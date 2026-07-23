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
      // Angle between -80° and 60° (wide spread, mostly upward)
      const angle = (-80 + Math.random() * 140) * (Math.PI / 180);
      const speed = 3 + Math.random() * 5;
      const maxLife = 30 + Math.random() * 30;

      return {
        x: emitX() / window.devicePixelRatio,
        y: emitY() / window.devicePixelRatio,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: maxLife,
        maxLife,
        size: 2 + Math.random() * 3,
      };
    };

    // Get particle color based on life (bright white -> cyan -> blue)
    const getParticleColor = (life: number, maxLife: number): string => {
      const progress = 1 - life / maxLife; // 0 = new, 1 = dying

      if (progress < 0.2) {
        // Bright white/cyan - very bright
        const alpha = 0.95 + Math.random() * 0.05;
        return `rgba(220, 240, 255, ${alpha})`;
      } else if (progress < 0.5) {
        // Cyan/blue-white
        const alpha = 0.8 + Math.random() * 0.15;
        return `rgba(150, 220, 255, ${alpha})`;
      } else {
        // Blue, fading out
        const alpha = (1 - progress) * 0.9;
        return `rgba(80, 160, 255, ${alpha})`;
      }
    };

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Generate new particles (maintain 60-80 active)
      const targetCount = 70;
      const currentCount = particlesRef.current.length;
      if (currentCount < targetCount) {
        const toAdd = Math.min(3, targetCount - currentCount);
        for (let i = 0; i < toAdd; i++) {
          particlesRef.current.push(createParticle());
        }
      }

      // Update and draw particles with glow
      particlesRef.current = particlesRef.current.filter((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // Gravity
        p.life--;

        // Draw particle with glow
        if (p.life > 0) {
          const lifeRatio = p.life / p.maxLife;
          
          // Set shadow for glow effect
          ctx.shadowBlur = 20 + lifeRatio * 15;
          ctx.shadowColor = getParticleColor(p.life, p.maxLife);
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = getParticleColor(p.life, p.maxLife);
          ctx.fill();

          // Extra bright core for new particles
          if (lifeRatio > 0.8) {
            ctx.shadowBlur = 30;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${lifeRatio * 0.9})`;
            ctx.fill();
          }
          
          // Reset shadow
          ctx.shadowBlur = 0;
        }

        return p.life > 0;
      });

      // Draw spark emission point glow (stronger, blue-white)
      const glowX = emitX() / window.devicePixelRatio;
      const glowY = emitY() / window.devicePixelRatio;
      const gradient = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, 25);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      gradient.addColorStop(0.2, 'rgba(180, 220, 255, 0.7)');
      gradient.addColorStop(0.5, 'rgba(100, 180, 255, 0.4)');
      gradient.addColorStop(1, 'rgba(80, 160, 255, 0)');
      ctx.beginPath();
      ctx.arc(glowX, glowY, 25, 0, Math.PI * 2);
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
        style={{ objectPosition: 'left center' }}
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
