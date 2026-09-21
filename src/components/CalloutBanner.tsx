import React from 'react';
import { RansomNote } from './RansomNote';
import { ArrowDown, Flame } from 'lucide-react';

interface CalloutBannerProps {
  onExploreAutomation?: () => void;
}

export const CalloutBanner: React.FC<CalloutBannerProps> = () => {
  return (
    <section className="py-28 md:py-36 bg-[#FFFDEE] border-t border-[#0C342C]/10 text-center relative overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.22]"
        style={{
          backgroundImage: 'radial-gradient(#0C342C 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Ambient Forest & Acid Lime Soft Radial Blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[480px] h-[300px] bg-[#E3EF26]/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[480px] h-[300px] bg-[#076653]/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Eyebrow Chip */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.24em] uppercase font-extrabold bg-[#06231D] text-[#E3EF26] border border-[#076653]/40 shadow-sm mb-10">
          <Flame className="w-3.5 h-3.5 text-[#E3EF26]" />
          <span>THE UNCOMFORTABLE TRUTH ABOUT ENTERPRISE WORKFLOWS</span>
        </div>

        {/* High-Definition Razor-Sharp Ransom Note Headline (Big & Broad) */}
        <div className="my-6 py-4 flex justify-center">
          <RansomNote
            text="STOP WASTING HUMAN TALENT ON ROBOT TASKS"
            intensity={0.45}
            animate="assemble"
            rotation={4}
            seed={2026}
          />
        </div>

        {/* Supporting Editorial Punchline */}
        <p className="text-lg sm:text-2xl font-normal text-[#0C342C]/80 max-w-3xl mx-auto mt-10 leading-relaxed">
          High-performing organizations lose up to <strong className="font-extrabold text-[#06231D] bg-[#E2FBCE] px-2.5 py-0.5 rounded-md border border-[#076653]/20">780 hours per person annually</strong> to repetitive data entry, manual cross-checks, and status chasing. NAIR.AI deploys autonomous agent workflows so your best minds focus strictly on high-leverage growth.
        </p>

        {/* Quick scroll anchor with Lime accent */}
        <div className="mt-12 flex justify-center">
          <a
            href="#calculator"
            className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-[#06231D] font-extrabold px-8 py-4 bg-[#E3EF26] hover:bg-[#d2de1e] rounded-full shadow-xl shadow-[#E3EF26]/20 hover:scale-102 transition-all duration-200 group cursor-pointer border border-[#076653]/20"
          >
            <span>Calculate Reclaimable Hours</span>
            <div className="w-6 h-6 rounded-full bg-[#06231D] text-[#FFFDEE] flex items-center justify-center transition-transform group-hover:translate-y-0.5">
              <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CalloutBanner;
