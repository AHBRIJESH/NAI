import React from 'react';
import { ArrowRight, Bot, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WatermarkPattern } from './WatermarkPattern';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface BlueSolutionsSectionProps {
  onSelectSolution?: (solutionName: string) => void;
}

export const BlueSolutionsSection: React.FC<BlueSolutionsSectionProps> = ({
  onSelectSolution,
}) => {
  const solutions = [
    {
      image: '/images/solutions_architecture.jpg',
      tag: 'STRATEGY & TOPOLOGY',
      title: 'Enterprise AI Strategy & Sizing',
      desc: 'Pragmatic architectural audits, model sizing, and hardware roadmaps designed to bypass multi-million dollar vendor dead-ends.',
      points: [
        'Proprietary vs Sovereign Open-Weight Sizing',
        'Air-Gapped Private VPC Topologies',
        'Deterministic Cost & Latency Benchmarks',
      ],
    },
    {
      image: '/images/telemetry_agentic.jpg',
      tag: 'AUTONOMOUS EXECUTION',
      title: 'Multi-Agent Operational Swarms',
      desc: 'Resilient agent clusters executing complex multi-step workflows across ERPs, relational databases, and proprietary enterprise APIs.',
      points: [
        'Sub-Second In-Memory Orchestration',
        'Automated Transactional Rollbacks',
        'Human-in-the-Loop Approval Safeguards',
      ],
    },
    {
      image: '/images/telemetry_governance.jpg',
      tag: 'SOVEREIGN DATA SECURITY',
      title: 'Zero-Retention Private LLMs',
      desc: 'Hardware-isolated inference environments guaranteeing client intellectual property and enterprise data never train external models.',
      points: [
        'Cryptographic Ephemeral RAM Processing',
        'Real-Time PII & Credential Scrubbing',
        'ISO 27001 Aligned Cryptographic Logs',
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-14 sm:py-20 md:py-32 bg-[#1D4ED8] text-white relative overflow-hidden"
    >
      {/* Translucent Geometric Loop Watermark */}
      <WatermarkPattern color="#FFFFFF" opacity={0.08} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal y={28} duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">

            <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-tight">
              Autonomous Infrastructure Built for Enterprise Scale
            </h2>

            <p className="text-sm sm:text-lg text-blue-100/90 font-normal leading-relaxed">
              Resilient cognitive software engineered to integrate seamlessly into your mission-critical private infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 White Feature Cards */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((item, idx) => {
            return (
              <StaggerItem key={idx} y={30} duration={0.65}>
                <div
                  className="h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-[#0A192F] shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group border border-slate-100"
                >
                  <div>
                    {/* Relatable Architectural Image Banner */}
                    <div className="relative w-full h-44 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden mb-5 border border-slate-200/80 shadow-xs bg-slate-900 group-hover:scale-[1.01] transition-transform">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider text-[#DC2626] font-extrabold shadow-xs">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-xl sm:text-2xl text-[#0A192F] mb-2 sm:mb-3 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-5 font-normal">
                      {item.desc}
                    </p>

                    {/* Highlighted Key Points */}
                    <div className="space-y-2 pt-3 border-t border-slate-100 mb-6">
                      {item.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#0A192F] shadow-xs group-hover:border-blue-300 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                          <span className="leading-tight">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectSolution?.(item.title)}
                    className="w-full py-2.5 sm:py-3 rounded-full bg-slate-50 hover:bg-[#1D4ED8] text-[#0A192F] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default BlueSolutionsSection;
