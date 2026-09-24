import React from 'react';
import { ArrowRight, Play, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookCall: () => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <section className="relative w-full min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#030712] text-white border-b border-slate-800">
      
      {/* 100% UNTOUCHED HIGH-RESOLUTION HERO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        <img
          src="/images/hero_ai_lifecycle.jpg"
          alt="NAIR.AI Autonomous AI Lifecycle Architecture"
          className="w-full h-full object-cover object-[78%_center] sm:object-[72%_center] lg:object-right xl:object-center"
          loading="eager"
          decoding="async"
        />

        {/* Seamless Soft Dark Ambient Scrim on Left Edge to Protect Text Legibility without Washing out the Image */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[68%] lg:w-[48%] xl:w-[42%] bg-gradient-to-r from-[#030712]/85 via-[#030712]/40 to-transparent pointer-events-none" />
      </div>

      {/* HERO CONTENT: Positioned on Left to Keep 3D Sculpture & Landscape Fully Visible */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1536px] mx-auto px-6 sm:px-8 md:px-10 lg:pl-12 lg:pr-8 xl:pl-16 xl:pr-12 py-16 sm:py-20 lg:py-28 text-left"
      >
        <div className="max-w-xl lg:max-w-[540px] xl:max-w-[580px]">
          
          {/* Strategic AI Implementation Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base font-bold text-[#38BDF8] mb-3 leading-relaxed tracking-wide drop-shadow-sm"
          >
            Want to implement AI, but not sure where to start? Work smarter—not harder—with these proven strategies.
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-3xl sm:text-5xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.08] mb-4 text-white drop-shadow-md"
          >
            <span className="text-[#DC2626]">Autonomous AI Systems.</span>{' '}
            <span className="text-[#3B82F6]">Built to Ship.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed mb-7 font-normal drop-shadow-sm"
          >
            We engineer production-grade multi-agent swarms and zero-retention inference pipelines deployed directly within your private enterprise infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7"
          >
            <button
              type="button"
              onClick={onBookCall}
              className="px-7 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all duration-200 shadow-xl shadow-red-600/30 hover:scale-102 active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Book an AI strategy call</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection('capabilities')}
              className="px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm tracking-wider font-bold text-white hover:text-white border border-white/25 hover:border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-200 shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>Explore Sovereign Engine</span>
            </button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs font-mono text-slate-300 pt-4 border-t border-white/15"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-semibold text-slate-200">Zero Data Retention</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#DC2626]" />
              <span className="font-semibold text-slate-200">3–4 Week Sprints</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-semibold text-slate-200">SOC2 Type II Aligned</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
