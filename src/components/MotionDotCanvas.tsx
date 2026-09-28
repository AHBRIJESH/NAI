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
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export const MotionDotCanvas: React.FC<MotionDotCanvasProps> = ({
  className = '',
  dotColor = 'rgba(29, 78, 216, ', // royal blue base
  lineColor = 'rgba(59, 130, 246, ',
  dotCount = 100, // increased dot count for rich constellation feel
  deflectionRadius = 140,
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

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      if (mx >= -100 && mx <= width + 100 && my >= -100 && my <= height + 100) {
        mouse.x = mx;
        mouse.y = my;
        mouse.isActive = true;
      } else {
        mouse.isActive = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
      mouse.isActive = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize dots with higher density
    const dots: Dot[] = [];
    const surfaceDensity = Math.floor((width * height) / 8000) + 35;
    const count = Math.min(Math.max(dotCount, 90), Math.min(220, surfaceDensity));

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      dots.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 1.8 + 1.3,
        baseAlpha: Math.random() * 0.35 + 0.25,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw dots
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

        // Mouse deflection & discharge effect (like earlier)
        let isDischarging = false;
        let dischargeForce = 0;

        if (mouse.isActive) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < deflectionRadius && dist > 0) {
            isDischarging = true;
            dischargeForce = (deflectionRadius - dist) / deflectionRadius;
            const angle = Math.atan2(dy, dx);
            // Repulsive electrostatic discharge push away from cursor
            d.x += Math.cos(angle) * dischargeForce * 5.8;
            d.y += Math.sin(angle) * dischargeForce * 5.8;
          }
        }

        // Draw dot: GLOW ONLY the ones the cursor comes upon
        if (isDischarging) {
          ctx.save();
          // Vibrant electrostatic discharge glow on touched dots only
          ctx.shadowColor = 'rgba(56, 189, 248, 0.95)';
          ctx.shadowBlur = 10 + dischargeForce * 14;

          // Subtle aura expansion
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius * (1.35 + dischargeForce * 0.8), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${0.25 + dischargeForce * 0.4})`;
          ctx.fill();

          // Bright charged dot body
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius * 1.25, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 1)';
          ctx.fill();
          ctx.restore();
        } else {
          // Normal clean dot without global halo
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${dotColor}${d.baseAlpha})`;
          ctx.fill();
        }

        // Connect nearby dots with faint neural web lines (dots to dots ONLY, no lines to cursor)
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
