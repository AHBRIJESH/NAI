import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ShieldCheck, Zap, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';
import { motion, useMotionValue } from 'motion/react';
import type { AIState } from './smoothui/ai-core';
import AIOrbFace from './smoothui/ai-orb-face';
import { cn } from '@/lib/utils';

interface HeroProps {
  onBookCall: () => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall, onOpenAssessment }) => {
  const [orbState, setOrbState] = useState<AIState>('idle');
  const amplitude = useMotionValue(0);

  // Voice amplitude simulator when in listening or streaming states
  useEffect(() => {
    if (orbState !== 'listening' && orbState !== 'streaming') {
      amplitude.set(0);
      return;
    }
    let frame: number;
    let t = 0;
    const tick = () => {
      t += 0.09;
      const raw = Math.sin(t) * 0.45 + Math.sin(t * 2.3) * 0.35 + Math.sin(t * 5.1) * 0.15;
      const val = Math.max(0.05, Math.min(1, Math.abs(raw)));
      amplitude.set(val);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [orbState, amplitude]);

  // Auto-recover from error state after 3.2 seconds
  useEffect(() => {
    if (orbState === 'error') {
      const timer = setTimeout(() => {
        setOrbState('idle');
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [orbState]);

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

  const stateDescriptions: Record<AIState, string> = {
    idle: 'Gaze follows pointer • Natural cadence blinking',
    listening: 'Acoustic perception active • Voice resonance breathing',
    thinking: 'Evaluating probabilistic graph • Saccadic gaze away',
    streaming: 'Streaming multi-agent tokens • Focused eye aperture',
    done: 'Task converged • Joyful squash-and-stretch hop',
    error: 'Ocular spiral & dizzy wobble • Auto-recovering',
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
      <div className="absolute top-0 right-1/4 w-[420px] h-[420px] rounded-full bg-blue-100/60 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[360px] h-[360px] rounded-full bg-red-100/40 blur-[120px] pointer-events-none" />

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
            {/* Eyebrow Kicker */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs tracking-[0.24em] uppercase font-bold bg-blue-50 text-[#1D4ED8] border border-blue-200 shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span>SOVEREIGN COGNITIVE RUNTIME</span>
            </motion.div>

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
                <span>Schedule Technical Briefing</span>
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

          {/* Right Column: AI Orb Face Autonomous Companion (5 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-gradient-to-b from-white via-slate-50/70 to-blue-50/30 p-6 sm:p-7 flex flex-col items-center">
              
              {/* Subtle Corner Crosshairs */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-300 select-none">+</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-300 select-none">+</div>
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-300 select-none">+</div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-300 select-none">+</div>

              {/* Companion Card Header */}
              <div className="w-full flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-slate-700">
                    AI ORB COMPANION
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-md">
                    14ms VPC
                  </span>
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded-full font-mono text-[9px] uppercase font-bold tracking-wider transition-colors',
                      orbState === 'error'
                        ? 'bg-red-100 text-red-700'
                        : orbState === 'done'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-blue-100 text-[#1D4ED8]'
                    )}
                  >
                    {orbState}
                  </span>
                </div>
              </div>

              {/* Main Stage: AI Orb Face with Ambient Glow */}
              <div className="relative my-5 sm:my-6 flex items-center justify-center">
                {/* Backlight Glow */}
                <div
                  className={cn(
                    'absolute w-48 h-48 rounded-full blur-[65px] opacity-40 transition-colors duration-500 pointer-events-none',
                    orbState === 'error'
                      ? 'bg-red-400'
                      : orbState === 'done'
                      ? 'bg-emerald-400'
                      : 'bg-blue-400'
                  )}
                />

                {/* AI Orb Face Component */}
                <AIOrbFace
                  aria-label={`NAIR AI Autonomous Assistant is currently ${orbState}`}
                  size={230}
                  state={orbState}
                  amplitude={amplitude}
                  colors={{
                    body: '#1D4ED8',
                    bodyEdge: '#93C5FD',
                    feature: '#0A192F',
                  }}
                  className="relative z-10 drop-shadow-xl"
                />
              </div>

              {/* Dynamic State Telemetry Description */}
              <div className="w-full text-center px-2 py-1.5 mb-3 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/60 shadow-xs">
                <span className="font-mono text-[11px] text-slate-600 block truncate">
                  {stateDescriptions[orbState]}
                </span>
              </div>

              {/* Interactive State Controller Pills */}
              <div className="w-full pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] tracking-wider uppercase text-slate-400 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#1D4ED8]" />
                    Interactive State Engine
                  </span>
                  {orbState !== 'idle' && (
                    <button
                      onClick={() => setOrbState('idle')}
                      className="font-mono text-[9px] text-slate-500 hover:text-[#1D4ED8] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <RefreshCw className="w-2.5 h-2.5" />
                      Reset to Idle
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 w-full">
                  {(['idle', 'listening', 'thinking', 'streaming', 'done', 'error'] as AIState[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => setOrbState(s)}
                      className={cn(
                        'px-2 py-1.5 text-[10px] font-mono font-bold rounded-lg uppercase tracking-wider transition-all duration-200 cursor-pointer text-center',
                        orbState === s
                          ? s === 'error'
                            ? 'bg-[#DC2626] text-white shadow-sm shadow-red-500/30 scale-102'
                            : s === 'done'
                            ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/30 scale-102'
                            : 'bg-[#1D4ED8] text-white shadow-sm shadow-blue-500/30 scale-102'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
                      )}
                    >
                      {s}
                    </button>
                  ))}
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
