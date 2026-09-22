import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PartnerCtaSectionProps {
  onBookCall: () => void;
}

export const PartnerCtaSection: React.FC<PartnerCtaSectionProps> = ({ onBookCall }) => {
  return (
    <section className="py-24 md:py-32 bg-white text-[#0A192F] text-center border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs tracking-[0.2em] uppercase font-bold bg-blue-50 text-[#1D4ED8] border border-blue-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
          <span>GET IN TOUCH</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-[#0A192F] mb-6 leading-tight">
          Partner With Us to Solve <span className="text-[#1D4ED8]">What's Next</span>.
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Whether evaluating private VPC inference, autonomous agent swarms, or rapid enterprise prototyping, our senior architects are ready to engineer your solution.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookCall}
            className="px-9 py-4.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all duration-200 shadow-xl shadow-red-600/30 hover:scale-102 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Book an AI Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PartnerCtaSection;
