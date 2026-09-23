import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface CustomerSuccessSectionProps {
  onSelectCaseStudy?: (title: string) => void;
}

export const CustomerSuccessSection: React.FC<CustomerSuccessSectionProps> = ({
  onSelectCaseStudy,
}) => {
  return (
    <section
      id="case-studies"
      className="py-24 md:py-32 bg-[#0284C7] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Header */}
        <ScrollReveal y={28} duration={0.6}>
          <div className="mb-12">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
              Quantifiable Impact Across Mission-Critical Infrastructure
            </h2>
          </div>
        </ScrollReveal>

        {/* Featured Case Study Split (White Card / Container) */}
        <ScrollReveal delay={0.1} y={32} duration={0.7}>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Skyscraper Image (5 cols) */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl border border-white/20 h-[340px] sm:h-[400px]">
                <img
                  src="/images/solutions_architecture.jpg"
                  alt="Global Enterprise Architecture"
                  className="w-full h-full object-cover object-center filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Right Challenge / Solution / Impact (7 cols) */}
              <div className="lg:col-span-7 text-white space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#BAE6FD] font-bold block mb-1">
                    THE ARCHITECTURAL CHALLENGE
                  </span>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                    A Fortune 500 logistics provider was constrained by 40,000+ daily cross-border manifest documents, requiring 320 full-time specialists to manually transcribe, match, and audit customs records across fragmented regional legacy systems.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#BAE6FD] font-bold block mb-1">
                    THE ENGINEERED TOPOLOGY
                  </span>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                    NAIR.AI architected an autonomous multi-agent OCR and verification pipeline deployed on-prem in an air-gapped VPC, achieving 99.8% extraction accuracy with zero data persistence and real-time schema validation.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#BAE6FD] font-bold block mb-1">
                    THE VERIFIED PRODUCTION YIELD
                  </span>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                    <strong>84% reduction in document turnaround time</strong>, over $4.2M in annual recurring operational savings, and zero compliance penalties across 14 international trade corridors.
                  </p>
                </div>

                <div className="pt-2">
                    <button
                    onClick={() => onSelectCaseStudy?.('Global Logistics Architecture')}
                    className="px-7 py-3 rounded-full bg-white hover:bg-slate-100 text-[#0284C7] font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-md hover:scale-102 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore Architectural Blueprint</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default CustomerSuccessSection;
