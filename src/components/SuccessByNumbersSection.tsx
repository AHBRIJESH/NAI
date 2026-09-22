import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const SuccessByNumbersSection: React.FC = () => {
  const nodes = [
    {
      pct: '85%',
      label: 'Manual Task Reduction',
      detail: 'Elimination of repetitive cross-system data entry & reconciliation',
      color: '#1D4ED8',
      angle: -90, // Top
    },
    {
      pct: '80%',
      label: 'Throughput Acceleration',
      detail: 'Faster cycle time across complex approval & compliance gates',
      color: '#DC2626',
      angle: -30, // Top right
    },
    {
      pct: '60%',
      label: 'Operating Cost Savings',
      detail: 'Direct operational overhead recaptured per business unit',
      color: '#1D4ED8',
      angle: 30, // Bottom right
    },
    {
      pct: '50%',
      label: 'Time-to-Production',
      detail: 'Faster MVP deployment compared to traditional IT builds',
      color: '#DC2626',
      angle: 90, // Bottom
    },
    {
      pct: '40%',
      label: 'Error Reduction',
      detail: 'Zero compliance slippage via deterministic verification nodes',
      color: '#1D4ED8',
      angle: 150, // Bottom left
    },
    {
      pct: '27%',
      label: 'Cloud Compute Optim',
      detail: 'Inference token caching & dynamic quantization savings',
      color: '#DC2626',
      angle: 210, // Top left
    },
  ];

  const [activeNode, setActiveNode] = useState(nodes[0]);

  // Radius for circular positioning
  const radius = 145;
  const centerX = 200;
  const centerY = 200;

  return (
    <section className="py-24 md:py-32 bg-white text-[#0A192F] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stacked Bold Typography (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <ScrollReveal y={28} duration={0.6}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs tracking-[0.2em] uppercase font-bold bg-blue-50 text-[#1D4ED8] border border-blue-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span>MEASURABLE VELOCITY</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0A192F] leading-[1.02] mb-6">
                Success<br />by the<br /><span className="text-[#1D4ED8]">Numbers</span>.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md font-normal mb-8">
                Validated enterprise benchmarks aggregated across our multi-agent inference systems and operational workflow deployments.
              </p>

              {/* Active Node Detail Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left transition-all shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="font-display font-black text-3xl sm:text-4xl"
                    style={{ color: activeNode.color }}
                  >
                    {activeNode.pct}
                  </span>
                  <span className="font-display font-bold text-base text-[#0A192F]">
                    {activeNode.label}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-mono leading-relaxed">
                  {activeNode.detail}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Hexagonal Circular Node Diagram (7 cols) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <ScrollReveal delay={0.15} y={30} scale={0.96} duration={0.7}>
              <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px]">
                
                {/* SVG Connecting Web */}
                <svg
                  className="w-full h-full absolute inset-0"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Connecting Lines from Center to Each Node */}
                  {nodes.map((node, i) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const x = centerX + radius * Math.cos(rad);
                    const y = centerY + radius * Math.sin(rad);
                    return (
                      <line
                        key={i}
                        x1={centerX}
                        y1={centerY}
                        x2={x}
                        y2={y}
                        stroke="#CBD5E1"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                    );
                  })}

                  {/* Outer Connecting Ring */}
                  <circle
                    cx={centerX}
                    cy={centerY}
                    r={radius}
                    stroke="#E2E8F0"
                    strokeWidth="2"
                  />
                </svg>

                {/* Center Core Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-slate-50 border-2 border-slate-200 shadow-md flex flex-col items-center justify-center p-3 text-center z-10 select-none">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                    ENTERPRISE
                  </span>
                  <span className="font-display font-extrabold text-xs text-[#0A192F] leading-tight">
                    Validated ROI Benchmarks
                  </span>
                </div>

                {/* Surrounding Percentage Pill Nodes */}
                {nodes.map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = centerX + radius * Math.cos(rad);
                  const y = centerY + radius * Math.sin(rad);
                  const isActive = activeNode.pct === node.pct;

                  return (
                    <button
                      key={i}
                      onClick={() => setActiveNode(node)}
                      onMouseEnter={() => setActiveNode(node)}
                      style={{
                        left: `${(x / 400) * 100}%`,
                        top: `${(y / 400) * 100}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className={`absolute z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full font-display font-black text-sm sm:text-base flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer ${
                        isActive
                          ? 'scale-125 text-white shadow-xl ring-4 ring-offset-2'
                          : 'bg-white text-[#0A192F] hover:scale-110 border-2 border-slate-200'
                      }`}
                      aria-label={`View ${node.label} statistic`}
                    >
                      <span
                        style={{
                          color: isActive ? '#FFFFFF' : node.color,
                        }}
                        className={isActive ? 'text-white' : ''}
                      >
                        {node.pct}
                      </span>
                      {isActive && (
                        <div
                          className="absolute inset-0 rounded-full -z-10"
                          style={{ backgroundColor: node.color }}
                        />
                      )}
                    </button>
                  );
                })}

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuccessByNumbersSection;
