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
  dotCount = 65,
  deflectionRadius = 140,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const mouse = {
      x: -1000,
      y: -1000,
      isActive: false,
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isActive = false;
    };

    window.addEventListener('resize', handleResize);
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    // Initialize dots
    const dots: Dot[] = [];
    const count = Math.min(dotCount, Math.floor((width * height) / 10000) + 20);

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      dots.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.2,
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
        if (d.x < -10) d.x = width + 10;
        if (d.x > width + 10) d.x = -10;
        if (d.y < -10) d.y = height + 10;
        if (d.y > height + 10) d.y = -10;

        // Mouse deflection effect (repel/bounce away when mouse approaches)
        if (mouse.isActive) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < deflectionRadius && dist > 0) {
            const force = (deflectionRadius - dist) / deflectionRadius;
            const angle = Math.atan2(dy, dx);
            // Push dot away along deflection angle
            d.x += Math.cos(angle) * force * 5.5;
            d.y += Math.sin(angle) * force * 5.5;
          }
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${dotColor}${d.baseAlpha})`;
        ctx.fill();

        // Connect nearby dots with faint deflection web lines
        for (let j = i + 1; j < dots.length; j++) {
          const d2 = dots[j];
          const ldx = d.x - d2.x;
          const ldy = d.y - d2.y;
          const lDist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (lDist < 75) {
            const lineAlpha = (1 - lDist / 75) * 0.22;
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
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
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
