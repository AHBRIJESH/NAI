import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import heroBgImage from '../assets/new_hero_img.png';

interface HeroProps {
  onBookCall: () => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[64vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#030712] text-white border-b border-slate-800">
      
      {/* HIGH-RESOLUTION HERO VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={heroBgImage}
          className="w-full h-full object-cover object-center"
        >
          <source src="/her_vid.mp4" type="video/mp4" />
          <img
            src={heroBgImage}
            alt="NAIR.AI Autonomous AI Collaboration and Enterprise Intelligence"
            className="w-full h-full object-cover object-center"
          />
        </video>

        {/* RTS Labs Style Ambient Video Tint: Unified semi-transparent tint allowing the video to shine through */}
        <div className="absolute inset-0 bg-[#030712]/55 pointer-events-none" />

        {/* Subtle Directional Readability Scrim for Left-Side Text */}
        <div className="absolute inset-0 sm:inset-y-0 sm:left-0 sm:right-auto sm:w-[65%] lg:w-[50%] xl:w-[45%] bg-gradient-to-b from-[#030712]/80 via-[#030712]/40 to-[#030712]/60 sm:bg-gradient-to-r sm:from-[#030712]/80 sm:via-[#030712]/35 sm:to-transparent pointer-events-none" />
      </div>

      {/* HERO CONTENT: Compact, Minimal, High-Contrast */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-10 lg:pl-12 lg:pr-8 xl:pl-16 xl:pr-12 pt-16 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 lg:pb-16 text-left"
      >
        <div className="max-w-xl lg:max-w-[540px] xl:max-w-[580px]">
          
          {/* Sentence 1: Strategic AI Implementation Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-[11px] sm:text-sm md:text-base font-bold text-white mb-2 sm:mb-3 leading-relaxed tracking-wide drop-shadow-md"
          >
            Want to implement AI, but not sure where to start? Work smarter not harder with these proven strategies.
          </motion.p>

          {/* Sentence 2: Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-2xl sm:text-5xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.08] mb-3 sm:mb-4 text-white drop-shadow-md"
          >
            <span className="text-[#DC2626]">Autonomous AI Systems.</span>{' '}
            <span className="text-[#3B82F6]">Built to Ship.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-base md:text-lg text-slate-200 leading-relaxed mb-5 sm:mb-6 font-normal drop-shadow-sm"
          >
            We engineer production-grade multi-agent swarms and zero-retention inference pipelines deployed directly within your private enterprise infrastructure.
          </motion.p>

          {/* Single Focused Call-To-Action Button */}
          <motion.div
            variants={itemVariants}
            className="flex items-center"
          >
            <button
              type="button"
              onClick={onBookCall}
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all duration-200 shadow-xl shadow-red-600/30 hover:scale-102 active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Book an AI strategy call</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
