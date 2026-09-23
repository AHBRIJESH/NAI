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
    <section className="relative w-full min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#F8FAFC] text-[#0A192F] border-b border-slate-200/80">
      
      {/* FULL-SCREEN HERO IMAGE BACKGROUND (Edge-to-Edge Widescreen) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        <img
          src="/images/hero_ai_lifecycle.png"
          alt="NAIR.AI Autonomous AI Lifecycle Architecture"
          className="w-full h-full object-cover object-[72%_center] sm:object-[68%_center] lg:object-right xl:object-center transition-transform duration-1000 scale-[1.01]"
          loading="eager"
        />

        {/* Left Reading Scrim: Soft elegant white gradient for text clarity without obscuring the AI Lifecycle graphic */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[54%] bg-gradient-to-r from-white/98 via-white/90 to-transparent pointer-events-none" />

        {/* Ambient Top & Bottom Blends */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/50 to-transparent pointer-events-none" />
      </div>

      {/* HERO CONTENT: Left-Aligned Over Panoramic Canvas */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28 text-left"
      >
        <div className="max-w-xl sm:max-w-2xl lg:max-w-2xl xl:max-w-3xl">
          
          {/* Strategic AI Implementation Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base font-semibold text-[#1D4ED8] mb-3.5 max-w-xl leading-relaxed"
          >
            Want to implement AI, but not sure where to start? Work smarter—not harder—with these proven strategies.
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight text-[#0A192F] leading-[1.05] mb-5"
          >
            Autonomous AI Systems.{' '}
            <span className="text-[#1D4ED8]">Built to Ship.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-8 font-normal"
          >
            We engineer production-grade multi-agent swarms and zero-retention inference pipelines deployed directly within your private enterprise infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10"
          >
            <button
              type="button"
              onClick={onBookCall}
              className="px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all duration-200 shadow-xl shadow-red-600/25 hover:scale-102 active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Book an AI strategy call</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection('capabilities')}
              className="px-7 py-4 rounded-full font-mono text-xs sm:text-sm tracking-wider font-bold text-[#0A192F] hover:text-[#1D4ED8] border border-slate-300 hover:border-slate-400 bg-white/95 hover:bg-white backdrop-blur-md transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-[#0A192F] text-[#0A192F]" />
              <span>Explore Sovereign Engine</span>
            </button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono text-slate-600 pt-5 border-t border-slate-300/80"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
              <span className="font-semibold text-slate-800">Zero Data Retention</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#DC2626]" />
              <span className="font-semibold text-slate-800">3–4 Week Sprints</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
              <span className="font-semibold text-slate-800">SOC2 Type II Aligned</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Lifecycle Indicator Badge on Bottom-Right */}
      <div className="hidden lg:flex absolute bottom-8 right-8 xl:right-14 z-10 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg items-center gap-2 font-mono text-xs font-bold text-slate-700 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
        <span>Autonomous AI Lifecycle Architecture</span>
      </div>
    </section>
  );
};

export default Hero;
