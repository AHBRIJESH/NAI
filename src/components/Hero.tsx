import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall, onOpenAssessment }) => {
  const capabilities = [
    'AI Consulting',
    'AI Governance',
    'Agentic AI',
    'Automation',
    'Generative AI',
    'AI Training',
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFFDEE] border-b border-[#0C342C]/10 min-h-[88vh] lg:min-h-[calc(100vh-80px)] flex flex-col justify-between">
      {/* Full-Screen Hero Image Background (Spans 100% of the section) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero_sculpture.jpg"
          alt="NAIR.AI Enterprise Neural Architecture Sculpture"
          className="w-full h-full object-cover object-[70%_center] lg:object-right scale-100 transition-transform duration-1000 ease-out"
        />
      </div>


      {/* Hero Written Content Container (Positioned on the Left Side) */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-24 py-16 lg:py-24 text-left">
        <div className="max-w-2xl xl:max-w-3xl">
          
          {/* Stylized Eyebrow Telemetry Chip */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full font-mono text-[11px] tracking-[0.24em] uppercase font-bold bg-[#E2FBCE] text-[#06231D] border border-[#076653]/25 shadow-2xs mb-5">
            <span className="w-2 h-2 rounded-full bg-[#076653] pulse-beacon" />
            <span>ENTERPRISE AI ARCHITECTURE</span>
          </div>

          {/* Big, Dominant H1 Headline — 100% Guaranteed Visible & High Contrast */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-7xl xl:text-[5.5rem] 2xl:text-[6.25rem] font-extrabold tracking-tight text-[#06231D] leading-[0.96] mb-6">
            <span className="block font-light text-[#06231D]">Put AI to Work for</span>
            <span className="block text-[#076653]">Your Business.</span>
          </h1>

          {/* Minimal Narrative Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-[#0C342C]/85 leading-relaxed max-w-2xl mb-10 font-normal">
            We architect and deploy production-grade autonomous agent workflows for enterprises — <strong className="text-[#06231D] font-bold">with strict zero data retention and validated ROI roadmaps.</strong>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={onBookCall}
              className="px-9 py-4.5 bg-[#E3EF26] hover:bg-[#d2de1e] text-[#06231D] font-mono text-xs sm:text-sm uppercase tracking-wider font-black rounded-full shadow-lg shadow-[#E3EF26]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3.5 group cursor-pointer border border-[#0C342C]/15"
            >
              <span>Book an AI Strategy Call</span>
              <div className="w-6 h-6 rounded-full bg-[#06231D] text-[#FFFDEE] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>

            <button
              onClick={onOpenAssessment}
              className="px-8 py-4.5 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full border border-[#0C342C]/20 bg-[#FFFDEE] hover:bg-[#E2FBCE]/50 text-[#06231D] shadow-xs hover:border-[#076653]/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Take Readiness Diagnostic</span>
            </button>
          </div>

          {/* Key Trust Signals */}
          <div className="flex flex-wrap items-center gap-7 sm:gap-9 text-xs sm:text-sm font-mono text-[#0C342C]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#076653]" />
              <span className="font-bold text-[#06231D]">Zero Data Retention</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#076653]" />
              <span className="font-bold text-[#06231D]">3–4 Week Sprints</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#076653]" />
              <span className="font-bold text-[#06231D]">SOC2 Type II Aligned</span>
            </div>
          </div>

        </div>
      </div>

      {/* Jet Black Capability Marquee Strip with Cyber Lime Star Accents */}
      <div className="relative z-10 w-full py-4 bg-black text-[#FFFDEE] overflow-hidden border-t border-black/80 shadow-2xl">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map((cap, index) => (
            <div key={index} className="flex items-center mx-8 font-mono text-xs uppercase tracking-[0.26em] font-extrabold">
              <span className="text-[#FFFDEE]/90 hover:text-[#E3EF26] transition-colors cursor-default tracking-[0.24em]">{cap}</span>
              <span className="ml-8 text-[#E3EF26] font-black text-sm select-none">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
