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
      icon: Compass,
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
      icon: Bot,
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
      icon: ShieldCheck,
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
      className="py-24 md:py-32 bg-[#1D4ED8] text-white relative overflow-hidden"
    >
      {/* Translucent Geometric Loop Watermark */}
      <WatermarkPattern color="#FFFFFF" opacity={0.08} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal y={28} duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">


            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Autonomous Infrastructure Built for Enterprise Scale
            </h2>

            <p className="text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed">
              Resilient cognitive software engineered to integrate seamlessly into your mission-critical private infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 White Feature Cards */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <StaggerItem key={idx} y={30} duration={0.65}>
                <div
                  className="h-full bg-white rounded-3xl p-8 text-[#0A192F] shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group border border-slate-100"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D4ED8] border border-blue-200 flex items-center justify-center mb-6 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#DC2626] font-extrabold block mb-2">
                      {item.tag}
                    </span>

                    <h3 className="font-display font-black text-2xl text-[#0A192F] mb-3 group-hover:text-[#1D4ED8] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-8">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectSolution?.(item.title)}
                    className="w-full py-3 rounded-full bg-slate-50 hover:bg-[#1D4ED8] text-[#0A192F] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
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
