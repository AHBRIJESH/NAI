import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface PartnerCtaSectionProps {
  onBookCall: () => void;
}

export const PartnerCtaSection: React.FC<PartnerCtaSectionProps> = ({ onBookCall }) => {
  return (
    <section className="py-24 md:py-32 bg-white text-[#0A192F] text-center border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        <ScrollReveal y={28} duration={0.65}>
          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-[#0A192F] mb-6 leading-tight">
            Ready to Deploy Autonomous Intelligence{' '}
            <span className="text-[#1D4ED8]">into Production?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Bypass speculative science experiments. Partner with principal AI systems architects to design, validate, and deploy sovereign pipelines backed by guaranteed delivery SLAs.
          </p>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookCall}
              className="px-9 py-4.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all duration-200 shadow-xl shadow-red-600/30 hover:scale-102 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Book an AI strategy call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default PartnerCtaSection;
