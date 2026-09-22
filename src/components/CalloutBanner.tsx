import React from 'react';
import { RansomNote } from './RansomNote';
import { ArrowUp, Calculator, Flame } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface CalloutBannerProps {
  onExploreAutomation?: () => void;
}

export const CalloutBanner: React.FC<CalloutBannerProps> = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 border-t border-b border-slate-200/90 text-center relative overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Ambient Blue & Red Soft Radial Blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[480px] h-[300px] bg-blue-400/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[480px] h-[300px] bg-red-400/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Eyebrow Chip */}
        <ScrollReveal y={24} duration={0.5}>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.24em] uppercase font-extrabold bg-[#0A192F] text-white border border-blue-900 shadow-sm mb-8">
            <Flame className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>THE UNCOMFORTABLE TRUTH ABOUT ENTERPRISE WORKFLOWS</span>
          </div>
        </ScrollReveal>

        {/* High-Definition Razor-Sharp Ransom Note Headline in Blue, White & Red */}
        <ScrollReveal delay={0.1} y={30} duration={0.65}>
          <div className="my-6 py-4 flex justify-center">
            <RansomNote
              text="STOP WASTING HUMAN TALENT ON ROBOT TASKS"
              intensity={0.45}
              animate="assemble"
              rotation={4}
              seed={2026}
            />
          </div>
        </ScrollReveal>

        {/* Supporting Editorial Punchline */}
        <ScrollReveal delay={0.15} y={24} duration={0.6}>
          <p className="text-lg sm:text-2xl font-normal text-slate-700 max-w-3xl mx-auto mt-8 leading-relaxed">
            High-performing organizations lose up to{' '}
            <strong className="font-extrabold text-[#0A192F] bg-blue-100/80 px-2.5 py-0.5 rounded-md border border-blue-200">
              780 hours per person annually
            </strong>{' '}
            to repetitive data entry, manual cross-checks, and status chasing. NAIR.AI deploys autonomous agent workflows so your best minds focus strictly on high-leverage growth.
          </p>
        </ScrollReveal>

        {/* Quick scroll anchor back up to Calculator */}
        <ScrollReveal delay={0.2} y={20} duration={0.5}>
          <div className="mt-10 flex justify-center">
            <a
              href="#calculator"
              className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-white font-extrabold px-8 py-4 bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-full shadow-xl shadow-blue-600/25 hover:scale-102 transition-all duration-200 group cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#38BDF8]" />
              <span>Quantify Reclaimable Hours</span>
              <div className="w-6 h-6 rounded-full bg-white text-[#1D4ED8] flex items-center justify-center transition-transform group-hover:-translate-y-0.5">
                <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default CalloutBanner;
