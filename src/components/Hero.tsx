import React from 'react';
import { motion } from 'motion/react';
import heroBgImage from '../assets/n_hs.png';

interface HeroProps {
  onBookCall: () => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall, onOpenAssessment }) => {
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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col justify-center overflow-hidden bg-[#030712] text-white">
      
      {/* 1. HERO BACKGROUND IMAGE (RAW, UNTINTED) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <img
          src={heroBgImage}
          alt="NAIR.AI Autonomous AI Collaboration and Enterprise Intelligence"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* 3. MAIN FOREGROUND CONTENT (CLEAN, CINEMATIC TYPOGRAPHY & ACTIONS) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 lg:pt-36 pb-20 sm:pb-24 lg:pb-28"
      >
        <div className="max-w-4xl flex flex-col justify-center text-left items-start">
          
          {/* Sentence 1 (Hook: Distinct Crimson Red Gradient) */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm lg:text-base font-bold text-transparent bg-gradient-to-r from-[#F87171] via-[#EF4444] to-[#DC2626] bg-clip-text mb-3 leading-relaxed tracking-wide max-w-2xl drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]"
          >
            Want to implement AI, but not sure where to start? Work smarter not harder with these proven strategies.
          </motion.p>

          {/* Sentence 2 (Headline: Distinct Royal & Sky Blue Gradient) */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.06] mb-5 text-transparent bg-gradient-to-r from-sky-100 via-[#38BDF8] to-[#2563EB] bg-clip-text max-w-4xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]"
          >
            Harness the Power of Autonomous AI
          </motion.h1>

          {/* Sentence 3 (Sub-description: Distinct Crisp Ice-Blue) */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-xl text-blue-100/90 leading-relaxed mb-8 max-w-3xl font-normal drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]"
          >
            Production-grade multi-agent swarms, zero-retention governance, and private inference engines engineered directly into your enterprise infrastructure.
          </motion.p>

          {/* Action Buttons (Brand Color Theme: Royal Blue Gradient + Frosted Glass) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={onBookCall}
              className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] hover:from-[#1E40AF] hover:to-[#1D4ED8] text-white font-mono text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-200 shadow-[0_12px_35px_rgba(29,78,216,0.45)] hover:scale-103 active:scale-97 cursor-pointer border border-blue-400/30"
            >
              Explore Solutions
            </button>

            <button
              type="button"
              onClick={onOpenAssessment}
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-[#38BDF8] hover:border-[#38BDF8]/50 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 border border-white/30 backdrop-blur-md cursor-pointer hover:scale-102 active:scale-98 shadow-md"
            >
              Take Readiness Audit
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* 4. BALANCED COMPACT WAVE STRUCTURE (HARMONIC ACROSS ENTIRE BOTTOM) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none select-none h-10 sm:h-14 md:h-16 lg:h-20">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="relative block w-full h-full"
        >
          <defs>
            {/* Luminous blue/sky aura along the wave crest */}
            <linearGradient id="waveGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15" />
              <stop offset="35%" stopColor="#60A5FA" stopOpacity="0.4" />
              <stop offset="65%" stopColor="#38BDF8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.2" />
            </linearGradient>

            {/* Translucent glass under-swell */}
            <linearGradient id="waveGlassBackdrop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.12" />
            </linearGradient>
            
            {/* Specular crest line highlight */}
            <linearGradient id="crestHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#38BDF8" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#38BDF8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* BACK SWELL: Ambient subtle frosted wave glow */}
          <path
            d="M 0,35 C 240,55 480,10 720,35 C 960,60 1200,10 1440,35 L 1440,80 L 0,80 Z"
            fill="url(#waveGlassBackdrop)"
          />
          <path
            d="M 0,35 C 240,55 480,10 720,35 C 960,60 1200,10 1440,35"
            stroke="url(#waveGlowGradient)"
            strokeWidth="2"
          />

          {/* FOREGROUND MAIN WAVE: Balanced, compact pure white wave across the entire bottom */}
          <path
            d="M 0,42 C 240,65 480,18 720,42 C 960,68 1200,18 1440,42 L 1440,80 L 0,80 Z"
            fill="#FFFFFF"
          />

          {/* Luminous Specular Stroke along the wave rim */}
          <path
            d="M 0,42 C 240,65 480,18 720,42 C 960,68 1200,18 1440,42"
            stroke="url(#crestHighlight)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
