import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { motion, useMotionValue } from 'motion/react';
import type { AIState } from './smoothui/ai-core';
import AIOrbFace from './smoothui/ai-orb-face';
import { cn } from '@/lib/utils';

interface HeroProps {
  onBookCall: () => void;
  onOpenAssessment: () => void;
}

const REACTION_STATES: AIState[] = [
  'idle',
  'listening',
  'thinking',
  'streaming',
  'done',
];

export const Hero: React.FC<HeroProps> = ({ onBookCall, onOpenAssessment }) => {
  const [orbState, setOrbState] = useState<AIState>('idle');
  const [orbSize, setOrbSize] = useState<number>(360);
  const amplitude = useMotionValue(0);

  // Dynamic responsive orb sizing: large, prominent, and mobile-safe
  useEffect(() => {
    const updateSize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setOrbSize(290);
      } else if (window.innerWidth < 1024) {
        setOrbSize(330);
      } else {
        setOrbSize(380);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Auto-time reaction faces every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbState((prev) => {
        const currentIndex = REACTION_STATES.indexOf(prev);
        const nextIndex = (currentIndex + 1) % REACTION_STATES.length;
        return REACTION_STATES[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Voice amplitude simulator when in listening or streaming states
  useEffect(() => {
    if (orbState !== 'listening' && orbState !== 'streaming') {
      amplitude.set(0);
      return;
    }
    let frame: number;
    let t = 0;
    const tick = () => {
      t += 0.08;
      const raw = Math.sin(t) * 0.45 + Math.sin(t * 2.3) * 0.35 + Math.sin(t * 5.1) * 0.15;
      const val = Math.max(0.05, Math.min(1, Math.abs(raw)));
      amplitude.set(val);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [orbState, amplitude]);

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
          
          {/* Left Column: Limited Concise Written Content (7 cols) */}
          <div className="lg:col-span-7">


            {/* Limited Punchy Headline */}
            <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0A192F] leading-[1.06] mb-4">
              Autonomous AI Systems.{' '}
              <span className="text-[#1D4ED8]">Built to Ship.</span>
            </motion.h1>

            {/* Limited Concise Subtitle */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-7 font-normal">
              We engineer production-grade multi-agent swarms and zero-retention inference pipelines deployed directly within your private enterprise infrastructure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={onBookCall}
                className="px-7 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all duration-200 shadow-xl shadow-red-600/25 hover:scale-102 active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Book an AI strategy call</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
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

          {/* Right Column: Pure, Large AI Orb Face (5 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full flex items-center justify-center py-4">
              
              {/* Diffused Ambient Backlight Aura reacting to state */}
              <div
                className={cn(
                  'absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full blur-[90px] opacity-45 transition-colors duration-1000 pointer-events-none',
                  orbState === 'error'
                    ? 'bg-red-400'
                    : orbState === 'done'
                    ? 'bg-emerald-400'
                    : 'bg-blue-400'
                )}
              />

              {/* Enlarged AI Orb Face - Pure, No Text Clutter */}
              <AIOrbFace
                aria-label={`NAIR AI Autonomous Assistant is ${orbState}`}
                size={orbSize}
                state={orbState}
                amplitude={amplitude}
                colors={{
                  body: '#1D4ED8',
                  bodyEdge: '#93C5FD',
                  feature: '#0A192F',
                }}
                className="relative z-10 drop-shadow-2xl transition-transform duration-500 hover:scale-102"
              />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
