"use client";

import { useEffect, useRef } from "react";

interface Spark {
  el: HTMLDivElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function HeroLaserAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const rafRef = useRef<number>(0);
  const cuttingHeadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create sparks container
    const sparksLayer = document.createElement("div");
    sparksLayer.style.cssText =
      "position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:15;";
    container.appendChild(sparksLayer);

    const colors = [
      "#FFD700",
      "#FFA500",
      "#FF6347",
      "#FF4500",
      "#FFFFFF",
      "#FFE4B5",
    ];

    function createSpark(originX: number, originY: number) {
      const el = document.createElement("div");
      const size = 2 + Math.random() * 4;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.2;
      const speed = 1.5 + Math.random() * 4;
      const vx = Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1);
      const vy = Math.sin(angle) * speed - Math.random() * 2;

      el.style.cssText = `
        position:absolute;
        width:${size}px;
        height:${size}px;
        border-radius:50%;
        background:${color};
        box-shadow:0 0 ${size + 2}px ${color};
        left:${originX}px;
        top:${originY}px;
        pointer-events:none;
      `;
      sparksLayer.appendChild(el);

      sparksRef.current.push({
        el,
        x: originX,
        y: originY,
        vx,
        vy,
        life: 0,
        maxLife: 40 + Math.random() * 40,
        size,
      });
    }

    let frameCount = 0;

    function animate() {
      frameCount++;

      // Get cutting head position
      const head = cuttingHeadRef.current;
      if (head) {
        const rect = head.getBoundingClientRect();
        const containerRect = container!.getBoundingClientRect();
        const headCenterX = rect.left - containerRect.left + rect.width / 2;
        const headBottomY = rect.top - containerRect.top + rect.height;

        // Create sparks (2-4 per frame for continuous effect)
        const sparkCount = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < sparkCount; i++) {
          createSpark(
            headCenterX + (Math.random() - 0.5) * 8,
            headBottomY + (Math.random() - 0.5) * 4
          );
        }
      }

      // Update sparks
      const gravity = 0.12;
      sparksRef.current = sparksRef.current.filter((spark) => {
        spark.life++;
        if (spark.life >= spark.maxLife) {
          spark.el.remove();
          return false;
        }

        spark.vy += gravity;
        spark.x += spark.vx;
        spark.y += spark.vy;

        const progress = spark.life / spark.maxLife;
        const opacity = 1 - progress;
        const scale = 1 - progress * 0.5;

        spark.el.style.transform = `translate(${spark.x - parseFloat(spark.el.style.left)}px, ${spark.y - parseFloat(spark.el.style.top)}px) scale(${scale})`;
        spark.el.style.opacity = String(opacity);

        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    // Start animation after a short delay
    const startTimeout = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate);
    }, 500);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(rafRef.current);
      sparksRef.current.forEach((s) => s.el.remove());
      sparksRef.current = [];
      if (sparksLayer.parentNode) {
        sparksLayer.parentNode.removeChild(sparksLayer);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-border"
    >
      {/* Base Image */}
      <img
        src="/images/laser-cutting-base.jpg"
        alt="Laser Cutting Machine in Action"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.5) 60%, rgba(10,22,40,0.8) 100%)",
        }}
      />

      {/* Cutting head + laser group - animated left-right */}
      <div
        ref={cuttingHeadRef}
        className="absolute z-[10]"
        style={{
          top: "15%",
          left: "20%",
          animation: "cutting-head-move 6s ease-in-out infinite",
        }}
      >
        {/* Cutting head body */}
        <div className="relative flex flex-col items-center">
          {/* Head housing */}
          <div
            className="w-6 h-10 sm:w-8 sm:h-12 rounded-t-sm"
            style={{
              background:
                "linear-gradient(180deg, #2A4A6B 0%, #1A2740 50%, #0F1B2D 100%)",
              boxShadow:
                "0 0 10px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          />
          {/* Nozzle */}
          <div
            className="w-3 h-3 sm:w-4 sm:h-4"
            style={{
              background:
                "linear-gradient(180deg, #0F1B2D 0%, #162032 100%)",
              clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>

        {/* Laser beam */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full w-[3px]"
          style={{
            height: "45vh",
            maxHeight: "300px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(59,130,246,0.8) 20%, rgba(0,212,255,0.6) 60%, rgba(0,212,255,0.1) 100%)",
            boxShadow:
              "0 0 8px rgba(59,130,246,0.8), 0 0 20px rgba(0,212,255,0.4), 0 0 40px rgba(59,130,246,0.2)",
            animation: "laser-beam-pulse 0.15s ease-in-out infinite alternate",
          }}
        />

        {/* Laser focal point glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "calc(100% + 44vh)",
            width: "24px",
            height: "24px",
            marginTop: "-12px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(59,130,246,0.8) 30%, rgba(0,212,255,0.4) 60%, transparent 100%)",
            boxShadow:
              "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(59,130,246,0.6), 0 0 60px rgba(0,212,255,0.3)",
            animation: "focal-glow 0.3s ease-in-out infinite alternate",
          }}
        />

        {/* Cutting trace - glowing line on the surface */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "calc(100% + 44vh)",
            width: "2px",
            height: "4px",
            background: "#FFFFFF",
            boxShadow:
              "0 0 6px #FFD700, 0 0 12px #FF6347, 0 0 20px rgba(255,99,71,0.5)",
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-accent-blue/40 z-20" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-accent-blue/40 z-20" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-accent-blue/40 z-20" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-accent-blue/40 z-20" />

      {/* Status indicator */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-[#0A1628]/80 border border-border rounded-sm backdrop-blur-sm">
        <div
          className="w-2 h-2 rounded-full bg-green-400"
          style={{
            animation: "status-blink 2s ease-in-out infinite",
          }}
        />
        <span className="text-[10px] font-mono text-text-secondary tracking-wider">
          CUTTING
        </span>
      </div>
    </div>
  );
}
