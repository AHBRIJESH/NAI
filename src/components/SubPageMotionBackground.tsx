import React from 'react';
import { motion } from 'motion/react';

export const SubPageMotionBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-0">
      {/* Light Sculpture Architectural Texture from Hero */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.14] mix-blend-multiply filter contrast-125 brightness-105 pointer-events-none"
        style={{ backgroundImage: `url('/images/hero_sculpture.jpg')` }}
      />

      {/* Subtle Architectural Dot Grid */}
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Primary Floating Ambient Blue Glow */}
      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.12, 0.94, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-16 right-1/4 w-[540px] h-[540px] rounded-full bg-blue-200/50 blur-[130px] pointer-events-none"
      />

      {/* Secondary Floating Ambient Crimson Accent */}
      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 35, -25, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-8 w-[440px] h-[440px] rounded-full bg-red-100/40 blur-[125px] pointer-events-none"
      />

      {/* Soft Sky Blue Bottom Glow */}
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-[480px] h-[480px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none"
      />
    </div>
  );
};

export default SubPageMotionBackground;
