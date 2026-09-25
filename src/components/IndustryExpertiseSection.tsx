import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface IndustryExpertiseSectionProps {
  onSelectIndustry?: (industryName: string) => void;
}

export const IndustryExpertiseSection: React.FC<IndustryExpertiseSectionProps> = ({
  onSelectIndustry,
}) => {
  const industries = [
    {
      title: 'Clinical Systems & Life Sciences',
      tag: 'HIPAA & FDA ALIGNED',
      desc: 'Accelerating multi-modal clinical ingestion and automated chart triage with provably zero persistent health record retention.',
      image: '/images/isometric_health.jpg',
      stat: '72% faster record synthesis',
    },
    {
      title: 'Institutional Banking & Capital Markets',
      tag: 'FINRA & SEC COMPLIANCE',
      desc: 'High-throughput transaction anomaly detection, automated KYC verification dossiers, and algorithmic ledger reconciliation.',
      image: '/images/isometric_finance.jpg',
      stat: '99.98% verifiable audit accuracy',
    },
    {
      title: 'Autonomous Logistics & Manufacturing',
      tag: 'INDUSTRY 4.0 // SCADA',
      desc: 'Real-time telemetry ingestion, autonomous freight dispatch orchestration, and predictive downtime prevention.',
      image: '/images/isometric_manufacturing.jpg',
      stat: '4.8x faster anomaly mitigation',
    },
    {
      title: 'Enterprise Cloud & Infrastructure',
      tag: 'ZERO-TRUST ARCHITECTURE',
      desc: 'Dynamic Kubernetes resource rightsizing, automated incident remediation swarms, and private API mesh isolation.',
      image: '/images/security_vault.jpg',
      stat: '60% cloud compute recaptured',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-[#0A192F] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <ScrollReveal y={28} duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">


            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A192F] mb-4 leading-tight">
              Mission-Critical Systems for Regulated Industries
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Standard AI fails in zero-tolerance environments. We engineer deterministic systems hardened for strict compliance, continuous auditability, and sub-second SLAs.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Bento Cards with 3D Isometric Illustrations */}
        <StaggerContainer stagger={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => (
            <StaggerItem key={idx} y={28} duration={0.6}>
              <div
                className="h-full bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* 3D Isometric Header Visual */}
                  <div className="w-full h-48 bg-slate-50 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-mono uppercase tracking-wider text-[#1D4ED8] font-bold border border-slate-200 shadow-xs">
                      {item.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display font-black text-lg sm:text-xl text-[#0A192F] mb-2 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {item.desc}
                    </p>

                    <div className="text-[11px] font-mono text-[#DC2626] font-bold bg-red-50 px-2.5 py-1 rounded-md inline-block">
                      {item.stat}
                    </div>
                  </div>
                </div>

                {/* Link CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectIndustry?.(item.title)}
                    className="w-full pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#1D4ED8] font-bold group-hover:text-[#1E40AF] cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default IndustryExpertiseSection;
