import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Building2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface CustomerSuccessSectionProps {
  onSelectCaseStudy?: (title: string) => void;
}

export const CustomerSuccessSection: React.FC<CustomerSuccessSectionProps> = ({
  onSelectCaseStudy,
}) => {
  const clientStories = [
    {
      industry: 'Global Logistics',
      headline: 'Autonomous Freight Dispatch',
      result: '82% faster dispatch cycles',
      img: '/images/isometric_manufacturing.jpg',
    },
    {
      industry: 'Commercial Banking',
      headline: 'Zero-Retention Audit Sentinel',
      result: '100% compliance SLA verified',
      img: '/images/isometric_finance.jpg',
    },
    {
      industry: 'Biotech Discovery',
      headline: 'Clinical Data Synthesis',
      result: '650+ research hours saved/mo',
      img: '/images/isometric_health.jpg',
    },
    {
      industry: 'Enterprise Cloud',
      headline: 'Microservices Auto-Tuning',
      result: '$3.8M annual cloud savings',
      img: '/images/security_vault.jpg',
    },
    {
      industry: 'Retail Distribution',
      headline: 'Predictive Inventory Mesh',
      result: '99.4% on-shelf availability',
      img: '/images/solutions_architecture.jpg',
    },
  ];

  return (
    <section
      id="case-studies"
      className="py-24 md:py-32 bg-[#0284C7] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Header */}
        <ScrollReveal y={28} duration={0.6}>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs tracking-[0.2em] uppercase font-bold bg-white/20 text-white border border-white/30 mb-4">
              <Building2 className="w-3.5 h-3.5 text-white" />
              <span>CUSTOMER SUCCESS STORY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
              Accelerating Enterprise Intelligence at Scale
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
                    THE CHALLENGE
                  </span>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                    A Fortune 500 logistics provider was drowning in 40,000+ daily cross-border manifest documents, requiring 320 full-time specialists to manually transcribe and audit customs records.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#BAE6FD] font-bold block mb-1">
                    THE SOLUTION
                  </span>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                    NAIR.AI architected an autonomous multi-agent OCR and verification pipeline deployed on-prem in private VPC, achieving 99.8% extraction accuracy with zero data persistence.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#BAE6FD] font-bold block mb-1">
                    THE IMPACT
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
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Bottom 5 Client Story Cards */}
        <div>
          <ScrollReveal y={20} duration={0.5}>
            <span className="text-xs font-mono uppercase tracking-[0.24em] text-white/80 font-bold block mb-6">
              MORE CLIENT STORIES //
            </span>
          </ScrollReveal>

          <StaggerContainer stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {clientStories.map((story, idx) => (
              <StaggerItem key={idx} y={24} duration={0.55}>
                <div
                  onClick={() => onSelectCaseStudy?.(story.headline)}
                  className="h-full rounded-2xl bg-white text-[#0A192F] p-4 flex flex-col justify-between shadow-lg hover:-translate-y-1 transition-transform cursor-pointer group"
                >
                  <div>
                    <div className="w-full h-24 rounded-xl overflow-hidden mb-3 bg-slate-100">
                      <img
                        src={story.img}
                        alt={story.headline}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#1D4ED8] font-bold block mb-1">
                      {story.industry}
                    </span>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-[#0A192F] leading-snug mb-2 group-hover:text-[#1D4ED8] transition-colors">
                      {story.headline}
                    </h4>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-mono font-semibold text-slate-500">
                      {story.result}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#1D4ED8] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};

export default CustomerSuccessSection;
