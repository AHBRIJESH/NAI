import React from 'react';
import { RansomNote } from './RansomNote';
import { ArrowRight, ArrowUp, Calculator } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { MotionDotCanvas } from './MotionDotCanvas';

interface CalloutBannerProps {
  onBookCall?: () => void;
  onExploreAutomation?: () => void;
}

export const CalloutBanner: React.FC<CalloutBannerProps> = ({ onBookCall }) => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#F0F7FF] via-[#E6F0FA] to-[#F8FAFC] border-t border-b border-blue-200/80 text-center relative overflow-hidden">
      {/* Interactive Motion Dot Deflection Background */}
      <MotionDotCanvas dotCount={45} deflectionRadius={130} />

      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[420px] h-[260px] bg-blue-300/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[420px] h-[260px] bg-sky-300/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        


        {/* High-Definition Razor-Sharp Ransom Note Headline in Green Combo Palette */}
        <ScrollReveal delay={0.08} y={24} duration={0.6}>
          <div className="my-4 py-2 flex justify-center">
            <RansomNote
              text="PUTTING PRACTICAL AI TO WORK FOR YOUR TEAM"
              intensity={0.3}
              animate="assemble"
              rotation={2.5}
              seed={2026}
            />
          </div>
        </ScrollReveal>

        {/* Supporting Narrative: Respectful, Forward-Thinking & Results-Oriented */}
        <ScrollReveal delay={0.12} y={20} duration={0.55}>
          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto mt-6 mb-8 leading-relaxed font-normal">
            Enterprises partner with <strong className="font-extrabold text-[#1D4ED8]">NAIR.AI</strong> to automate high-friction operational workflows, eliminate repetitive data reconciliation, and give teams the bandwidth to focus on high-judgment strategy, client relationships, and business growth.
          </p>
        </ScrollReveal>

        {/* Unified Dual Actions (Primary Briefing CTA + Calculator Anchor) */}
        <ScrollReveal delay={0.16} y={20} duration={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all duration-200 shadow-xl shadow-red-600/30 hover:scale-102 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Book an AI strategy call</span>
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
