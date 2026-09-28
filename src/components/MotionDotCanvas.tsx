import React, { useEffect, useRef } from 'react';

interface MotionDotCanvasProps {
  className?: string;
  dotColor?: string;
  lineColor?: string;
  dotCount?: number;
  deflectionRadius?: number;
}

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  type: 'core' | 'node' | 'particle';
}

interface PulseRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export const MotionDotCanvas: React.FC<MotionDotCanvasProps> = ({
  className = '',
  dotColor = 'rgba(29, 78, 216, ', // royal blue base
  lineColor = 'rgba(56, 189, 248, ', // electric sky blue lines
  dotCount = 120, // increased base dot density
  deflectionRadius = 150,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || 450;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const mouse = {
      x: -2000,
      y: -2000,
      isActive: false,
    };

    const ripples: PulseRipple[] = [];

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
      mouse.isActive = false;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        ripples.push({
          x,
          y,
          radius: 10,
          maxRadius: 180,
          alpha: 0.6,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    // Initialize rich neural dots with variable hierarchies
    const dots: Dot[] = [];
    // Dynamic density scaling based on viewport surface
    const surfaceDensity = Math.floor((width * height) / 5200);
    const count = Math.max(dotCount, Math.min(220, surfaceDensity + 40));

    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      let type: 'core' | 'node' | 'particle' = 'node';
      let radius = Math.random() * 1.5 + 1.6;
      let baseAlpha = Math.random() * 0.35 + 0.35;

      if (rand < 0.14) {
        // High-energy Core / Hub node
        type = 'core';
        radius = Math.random() * 1.4 + 3.0;
        baseAlpha = Math.random() * 0.25 + 0.65;
      } else if (rand > 0.6) {
        // Ambient Micro-Particle
        type = 'particle';
        radius = Math.random() * 0.6 + 1.0;
        baseAlpha = Math.random() * 0.25 + 0.2;
      }

      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius,
        baseAlpha,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
        type,
      });
    }

    let timestamp = 0;

    const render = () => {
      timestamp += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Render expanding shockwave ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r];
        ripple.radius += 3.5;
        ripple.alpha *= 0.96;

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${ripple.alpha * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (ripple.radius >= ripple.maxRadius || ripple.alpha <= 0.02) {
          ripples.splice(r, 1);
        }
      }

      // Update and draw all dots
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // Smooth drift
        d.x += d.vx;
        d.y += d.vy;

        // Boundary wrap
        if (d.x < -15) d.x = width + 15;
        if (d.x > width + 15) d.x = -15;
        if (d.y < -15) d.y = height + 15;
        if (d.y > height + 15) d.y = -15;

        // Ripple deflection physics
        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r];
          const rdx = d.x - rip.x;
          const rdy = d.y - rip.y;
          const rDist = Math.sqrt(rdx * rdx + rdy * rdy);
          if (Math.abs(rDist - rip.radius) < 25 && rDist > 0) {
            const angle = Math.atan2(rdy, rdx);
            d.x += Math.cos(angle) * rip.alpha * 3;
            d.y += Math.sin(angle) * rip.alpha * 3;
          }
        }

        // Mouse deflection & Synapse filaments
        let isNearMouse = false;
        if (mouse.isActive) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < deflectionRadius && dist > 0) {
            isNearMouse = true;
            const force = (deflectionRadius - dist) / deflectionRadius;
            const angle = Math.atan2(dy, dx);
            d.x += Math.cos(angle) * force * 4.2;
            d.y += Math.sin(angle) * force * 4.2;
          }

          // Interactive neural filament from mouse cursor to nearby nodes
          if (dist < 165 && dist > 0) {
            const mouseFilamentAlpha = (1 - dist / 165) * 0.42;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(d.x, d.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${mouseFilamentAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Dynamic pulse for core hub nodes
        let currentRadius = d.radius;
        if (d.type === 'core') {
          const pulse = Math.sin(timestamp * d.pulseSpeed * 60 + d.pulsePhase);
          currentRadius = d.radius + pulse * 0.65;

          // Soft radiant halo ring around core hub nodes
          ctx.beginPath();
          ctx.arc(d.x, d.y, currentRadius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${0.12 + pulse * 0.06})`;
          ctx.fill();
        }

        // Draw dot body
        ctx.beginPath();
        ctx.arc(d.x, d.y, currentRadius, 0, Math.PI * 2);
        if (isNearMouse) {
          ctx.fillStyle = `rgba(56, 189, 248, 0.95)`;
        } else if (d.type === 'core') {
          ctx.fillStyle = `rgba(2, 132, 199, ${d.baseAlpha})`;
        } else {
          ctx.fillStyle = `${dotColor}${d.baseAlpha})`;
        }
        ctx.fill();

        // Connect nearby dots with delicate neural synaptic web lines
        for (let j = i + 1; j < dots.length; j++) {
          const d2 = dots[j];
          const ldx = d.x - d2.x;
          const ldy = d.y - d2.y;
          const lDist = Math.sqrt(ldx * ldx + ldy * ldy);

          // Connection threshold
          const maxConnectDist = d.type === 'core' || d2.type === 'core' ? 95 : 80;

          if (lDist < maxConnectDist) {
            const lineAlpha = (1 - lDist / maxConnectDist) * 0.28;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.strokeStyle = `${lineColor}${lineAlpha})`;
            ctx.lineWidth = d.type === 'core' || d2.type === 'core' ? 0.95 : 0.65;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, [dotColor, lineColor, dotCount, deflectionRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
};

export default MotionDotCanvas;
