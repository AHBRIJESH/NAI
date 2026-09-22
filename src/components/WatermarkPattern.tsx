import React from 'react';

interface WatermarkPatternProps {
  color?: string;
  opacity?: number;
  className?: string;
}

export const WatermarkPattern: React.FC<WatermarkPatternProps> = ({
  color = '#FFFFFF',
  opacity = 0.08,
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full opacity-100"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Large Rounded Monogram Ribbon Loop 1 */}
        <path
          d="M-100 200 C150 50, 450 100, 600 350 C750 600, 1100 650, 1550 450"
          stroke={color}
          strokeWidth="120"
          strokeLinecap="round"
          strokeOpacity={opacity}
        />
        {/* Large Rounded Monogram Ribbon Loop 2 */}
        <path
          d="M-50 600 C250 750, 650 600, 800 350 C950 100, 1300 50, 1600 250"
          stroke={color}
          strokeWidth="100"
          strokeLinecap="round"
          strokeOpacity={opacity * 0.75}
        />
        {/* Geometric Corner Loop Accent */}
        <rect
          x="1150"
          y="80"
          width="320"
          height="320"
          rx="120"
          stroke={color}
          strokeWidth="60"
          strokeOpacity={opacity * 0.6}
          transform="rotate(25 1310 240)"
        />
        <rect
          x="-80"
          y="420"
          width="360"
          height="360"
          rx="140"
          stroke={color}
          strokeWidth="70"
          strokeOpacity={opacity * 0.5}
          transform="rotate(-15 100 600)"
        />
      </svg>
    </div>
  );
};

export default WatermarkPattern;
