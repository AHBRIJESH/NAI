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
  glow: number;
}

export const MotionDotCanvas: React.FC<MotionDotCanvasProps> = ({
  className = '',
  dotColor = 'rgba(29, 78, 216, ', // royal blue base
  lineColor = 'rgba(59, 130, 246, ',
  dotCount = 100,
  deflectionRadius = 125,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || window.innerHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const mouse = {
      x: -2000,
      y: -2000,
      isActive: false,
    };

    let rect = canvas.getBoundingClientRect();

    const updateRect = () => {
      if (canvas) {
        rect = canvas.getBoundingClientRect();
      }
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      updateRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
      mouse.isActive = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updateRect, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize dots with responsive density
    const dots: Dot[] = [];
    const surfaceDensity = Math.floor((width * height) / 8000) + 35;
    const count = Math.min(Math.max(dotCount, 80), Math.min(180, surfaceDensity));

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      dots.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 1.6 + 1.4,
        baseAlpha: Math.random() * 0.35 + 0.25,
        glow: 0,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // Natural gentle drift
        d.x += d.vx;
        d.y += d.vy;

        // Wrap around boundaries
        if (d.x < -15) d.x = width + 15;
        if (d.x > width + 15) d.x = -15;
        if (d.y < -15) d.y = height + 15;
        if (d.y > height + 15) d.y = -15;

        // Instant electrostatic discharge & glow on cursor proximity
        let isDischarging = false;
        let force = 0;

        if (mouse.isActive) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < deflectionRadius && dist > 0) {
            isDischarging = true;
            force = (deflectionRadius - dist) / deflectionRadius;
            const angle = Math.atan2(dy, dx);

            // Immediate electrostatic repulsion push away from cursor (zero delay)
            const push = force * 6.5;
            d.x += Math.cos(angle) * push;
            d.y += Math.sin(angle) * push;

            // Impart immediate velocity momentum
            d.vx += Math.cos(angle) * force * 0.4;
            d.vy += Math.sin(angle) * force * 0.4;
          }
        }

        // Instant glow activation without hesitation
        if (isDischarging) {
          d.glow = Math.max(d.glow, 0.5 + force * 0.5);
        } else if (d.glow > 0) {
          d.glow = Math.max(0, d.glow - 0.08);
        }

        // Natural velocity damping
        d.vx *= 0.96;
        d.vy *= 0.96;
        if (Math.abs(d.vx) < 0.15) d.vx += (Math.random() - 0.5) * 0.08;
        if (Math.abs(d.vy) < 0.15) d.vy += (Math.random() - 0.5) * 0.08;

        // Draw dot: GLOW ONLY the ones the cursor comes upon (fast hardware-accelerated concentric glow)
        if (d.glow > 0.05) {
          // 1. Soft radial electric discharge aura
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius * (1.8 + d.glow * 1.5), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${d.glow * 0.32})`;
          ctx.fill();

          // 2. Concentrated inner glow
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius * (1.2 + d.glow * 0.5), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${d.glow * 0.65})`;
          ctx.fill();

          // 3. Electric core with bright white-hot center
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius * 1.15, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 1)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius * 0.65, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${d.glow * 0.95})`;
          ctx.fill();
        } else {
          // Normal clean resting dot
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${dotColor}${d.baseAlpha})`;
          ctx.fill();
        }

        // Connect nearby dots with faint neural lines (dots to dots ONLY)
        for (let j = i + 1; j < dots.length; j++) {
          const d2 = dots[j];
          const ldx = d.x - d2.x;
          const ldy = d.y - d2.y;
          const lDist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (lDist < 78) {
            const lineAlpha = (1 - lDist / 78) * 0.22;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.strokeStyle = `${lineColor}${lineAlpha})`;
            ctx.lineWidth = 0.8;
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
      window.removeEventListener('scroll', updateRect);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
