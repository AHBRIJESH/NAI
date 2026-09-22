import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WatermarkPattern } from './WatermarkPattern';

interface BlueStatsSectionProps {
  onExploreCapabilities?: () => void;
}

export const BlueStatsSection: React.FC<BlueStatsSectionProps> = ({
  onExploreCapabilities,
}) => {
  const stats = [
    {
      value: '10+',
      label: 'Years in Enterprise AI',
      subtext: 'Pioneering production-grade inference pipelines',
    },
    {
      value: '514+',
      label: 'Production Workflows Deployed',
      subtext: 'Across Fortune 500 & high-growth leaders',
    },
    {
      value: '100%',
      label: 'On-Time Milestone Delivery',
      subtext: 'Fixed-schedule agile release cadences',
    },
  ];

  return (
    <section
      id="capabilities"
      className="py-24 md:py-32 bg-[#1D4ED8] text-white relative overflow-hidden"
    >
      {/* Translucent Geometric Loop Watermark */}
      <WatermarkPattern color="#FFFFFF" opacity={0.09} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Content: Headline & Action */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs tracking-[0.2em] uppercase font-bold bg-white/15 text-white border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
            <span>PRAGMATIC EXECUTION</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            AI, Software, and Data.{' '}
            <span className="text-blue-100">Built to Ship.</span>
          </h2>

          <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed mb-8 font-normal">
            From zero to production without endless discovery cycles or runaway compute costs. We architect resilient systems that scale securely within your existing tech stack.
          </p>

          <button
            onClick={onExploreCapabilities}
            className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#1D4ED8] font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-blue-900/30 hover:scale-102 flex items-center gap-2.5 cursor-pointer"
          >
            <span>See Our Capabilities</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* 3 Large Metric Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/75 font-mono">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlueStatsSection;
