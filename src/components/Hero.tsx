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
    hidden: { opacity: 0, y: 24 },
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
    <section className="relative overflow-hidden bg-[#F8FAFC] text-[#0A192F] border-b border-slate-200/80 py-14 sm:py-16 md:py-20">
      {/* Background Architectural Subtle Grid & Soft Ambient Accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-0 right-1/4 w-[460px] h-[460px] rounded-full bg-blue-100/70 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[380px] h-[380px] rounded-full bg-red-100/50 blur-[130px] pointer-events-none" />

      {/* Main Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Strategic Value Proposition & CTAs (6 cols) */}
          <div className="lg:col-span-6">
            
            {/* Strategic AI Implementation Value Proposition */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base font-semibold text-[#1D4ED8] mb-3.5 max-w-xl leading-relaxed">
              Want to implement AI, but not sure where to start? Work smarter—not harder—with these proven strategies.
            </motion.p>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0A192F] leading-[1.06] mb-4">
              Autonomous AI Systems.{' '}
              <span className="text-[#1D4ED8]">Built to Ship.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-7 font-normal">
              We engineer production-grade multi-agent swarms and zero-retention inference pipelines deployed directly within your private enterprise infrastructure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={onBookCall}
                className="px-7 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all duration-200 shadow-xl shadow-red-600/25 hover:scale-102 active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Book an AI strategy call</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollToSection('capabilities')}
                className="px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm tracking-wider font-bold text-[#0A192F] hover:text-[#1D4ED8] border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 transition-all duration-200 shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-[#0A192F] text-[#0A192F]" />
                <span>Explore Sovereign Engine</span>
              </button>
            </motion.div>

            {/* Trust Signals */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                <span className="font-semibold text-slate-700">Zero Data Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#DC2626]" />
                <span className="font-semibold text-slate-700">3–4 Week Sprints</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                <span className="font-semibold text-slate-700">SOC2 Type II Aligned</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: AI Lifecycle Architecture Artwork Showcase (6 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full group">
              
              {/* Diffused Ambient Glow Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400/20 via-sky-300/25 to-indigo-400/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Framed Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white/90 border border-slate-200/90 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:shadow-[0_25px_50px_-12px_rgba(29,78,216,0.2)] group-hover:scale-[1.01]">
                <img
                  src="/images/hero_ai_lifecycle.png"
                  alt="NAIR.AI Autonomous AI Lifecycle — Discover, Prepare, Build, Deploy, Monitor, Evolve"
                  className="w-full h-auto object-cover select-none"
                  loading="eager"
                />

                {/* Subtle Overlay Badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center gap-2 font-mono text-[11px] sm:text-xs font-bold text-slate-700 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
                  <span>Enterprise AI Lifecycle</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
