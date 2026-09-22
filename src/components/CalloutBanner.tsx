import React from 'react';
import { RansomNote } from './RansomNote';
import { ArrowRight, ArrowUp, Calculator, Flame, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface CalloutBannerProps {
  onBookCall?: () => void;
  onExploreAutomation?: () => void;
}

export const CalloutBanner: React.FC<CalloutBannerProps> = ({ onBookCall }) => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-slate-50 border-t border-b border-slate-200/90 text-center relative overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Ambient Blue & Red Soft Radial Blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[420px] h-[260px] bg-blue-400/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[420px] h-[260px] bg-red-400/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Eyebrow Chip */}
        <ScrollReveal y={20} duration={0.5}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-extrabold bg-[#0A192F] text-white border border-blue-900 shadow-xs mb-6">
            <Flame className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>THE UNCOMFORTABLE TRUTH // TECHNICAL FEASIBILITY</span>
          </div>
        </ScrollReveal>

        {/* High-Definition Razor-Sharp Ransom Note Headline in Blue, White & Red */}
        <ScrollReveal delay={0.08} y={24} duration={0.6}>
          <div className="my-4 py-2 flex justify-center">
            <RansomNote
              text="STOP WASTING HUMAN TALENT ON ROBOT TASKS"
              intensity={0.45}
              animate="assemble"
              rotation={4}
              seed={2026}
            />
          </div>
        </ScrollReveal>

        {/* Minimal Supporting Narrative */}
        <ScrollReveal delay={0.12} y={20} duration={0.55}>
          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto mt-6 mb-8 leading-relaxed font-normal">
            Enterprises lose up to <strong className="font-extrabold text-[#0A192F] bg-blue-100/80 px-2 py-0.5 rounded-md border border-blue-200">780 hours per person annually</strong> to manual cross-checks. Bypass speculative science experiments—partner with principal AI architects to deploy sovereign, production-grade agent swarms backed by guaranteed delivery SLAs.
          </p>
        </ScrollReveal>

        {/* Unified Dual Actions (Primary Briefing CTA + Calculator Anchor) */}
        <ScrollReveal delay={0.16} y={20} duration={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all duration-200 shadow-xl shadow-red-600/30 hover:scale-102 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Schedule Technical Architecture Briefing</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-xs font-mono uppercase tracking-wider text-slate-700 hover:text-[#1D4ED8] font-bold px-6 py-4 bg-white hover:bg-slate-50 border border-slate-300 rounded-full shadow-xs hover:scale-102 transition-all duration-200 group cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#1D4ED8]" />
              <span>Quantify Reclaimable Hours</span>
              <ArrowUp className="w-3.5 h-3.5 stroke-[2.5] text-slate-400 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default CalloutBanner;
