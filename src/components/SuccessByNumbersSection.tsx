import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, Zap, TrendingUp, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface MetricNode {
  id: string;
  pct: string;
  tag: string;
  label: string;
  category: string;
  detail: string;
  impactMetric: string;
  color: string;
  angle: number; // in degrees
  radius: number; // in px from center
}

export const SuccessByNumbersSection: React.FC = () => {
  const nodes: MetricNode[] = [
    {
      id: 'task-reduction',
      pct: '85%',
      tag: 'Automation',
      label: 'Manual Task Reduction',
      category: 'OPERATIONAL EFFICIENCY',
      detail: 'Elimination of repetitive cross-system data entry, manual document validation, and status chasing across enterprise teams.',
      impactMetric: '780 hrs / person / yr recaptured',
      color: '#1D4ED8', // Royal Blue
      angle: 270, // Top
      radius: 185,
    },
    {
      id: 'throughput',
      pct: '80%',
      tag: 'Throughput',
      label: 'Workflow Cycle Velocity',
      category: 'PIPELINE SPEED',
      detail: 'Faster end-to-end turnaround across complex multi-departmental approval chains, compliance checks, and cross-border customs declarations.',
      impactMetric: 'Sub-second in-memory routing',
      color: '#DC2626', // Crimson Red
      angle: 330, // Top Right
      radius: 175,
    },
    {
      id: 'cost-savings',
      pct: '60%',
      tag: 'Cost Recapture',
      label: 'Operating Overhead Savings',
      category: 'FINANCIAL RECOVERY',
      detail: 'Direct operational overhead recaptured per business unit through autonomous agent verification and automated exception triage.',
      impactMetric: '$3.4M average client recovery',
      color: '#1D4ED8',
      angle: 30, // Bottom Right
      radius: 180,
    },
    {
      id: 'time-to-prod',
      pct: '50%',
      tag: 'Fast-Track',
      label: 'Sprint Delivery Velocity',
      category: 'DEPLOYMENT TIME',
      detail: 'Accelerated time-to-production compared to traditional vendor consulting, deploying working air-gapped sandboxes in 14 days.',
      impactMetric: 'First production sprint in 3–4 wks',
      color: '#DC2626',
      angle: 90, // Bottom
      radius: 185,
    },
    {
      id: 'error-reduction',
      pct: '40%',
      tag: 'Zero Slippage',
      label: 'Compliance Error Elimination',
      category: 'ACCURACY & AUDIT',
      detail: 'Zero compliance slippage achieved through deterministic Pydantic validation nodes, mathematical schema enforcement, and audit rollbacks.',
      impactMetric: '99.98% verifiable parity',
      color: '#1D4ED8',
      angle: 150, // Bottom Left
      radius: 175,
    },
    {
      id: 'compute-optim',
      pct: '27%',
      tag: 'GPU Efficiency',
      label: 'Inference Token Optimization',
      category: 'INFRASTRUCTURE COST',
      detail: 'Reduction in foundation model compute overhead through aggressive token caching, vector indexing, and dynamic model quantization.',
      impactMetric: '60% GPU memory footprint saved',
      color: '#DC2626',
      angle: 210, // Top Left
      radius: 180,
    },
  ];

  const [activeNode, setActiveNode] = useState<MetricNode>(nodes[0]);

  // Center coordinate of SVG mesh
  const cx = 240;
  const cy = 240;

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] text-[#0A192F] border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Technical Narrative & Live Telemetry HUD (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <ScrollReveal y={28} duration={0.6}>


              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A192F] leading-[1.04] mb-6">
                Deterministic Yield.<br />
                <span className="text-[#1D4ED8]">Proven in Production.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                Aggregated telemetry across 514+ private enterprise multi-agent deployments, benchmarked against rigorous SOC2 and operational SLA standards.
              </p>

              {/* Active Metric Telemetry HUD Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-colors duration-300"
                  style={{ backgroundColor: activeNode.color }}
                />

                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {activeNode.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#1D4ED8]">
                    <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
                    <span>AUDITED SLA</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className="font-display font-black text-5xl sm:text-6xl tracking-tight transition-all duration-300"
                    style={{ color: activeNode.color }}
                  >
                    {activeNode.pct}
                  </span>
                  <span className="font-display font-extrabold text-lg sm:text-xl text-[#0A192F] leading-tight">
                    {activeNode.label}
                  </span>
                </div>

                {/* Progress Metric Bar */}
                <div className="w-full bg-slate-100 rounded-full h-2 mb-4 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: activeNode.pct,
                      backgroundColor: activeNode.color,
                    }}
                  />
                </div>

                <p className="text-sm text-slate-600 font-normal leading-relaxed mb-4">
                  {activeNode.detail}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="font-bold text-[#0A192F]">VERIFIED GAIN:</span>
                  <span className="font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-[#1D4ED8]">
                    {activeNode.impactMetric}
                  </span>
                </div>
              </div>

              {/* Quick Node Selector Pills */}
              <div className="flex flex-wrap items-center gap-2 mt-5">
                {nodes.map((node) => (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    className={`px-3 py-1.5 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeNode.id === node.id
                        ? 'bg-[#0A192F] text-white shadow-md scale-105'
                        : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {node.pct} {node.tag}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Hexagonal Orbital Radar Constellation (7 cols) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <ScrollReveal delay={0.12} y={30} scale={0.96} duration={0.7} className="w-full flex justify-center">
              <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px]">
                
                {/* SVG Orbital Circuit Network */}
                <svg
                  className="w-full h-full absolute inset-0 pointer-events-none"
                  viewBox="0 0 480 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Concentric Radar Grid Rings */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="105"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="opacity-70"
                  />
                  <circle
                    cx={cx}
                    cy={cy}
                    r="180"
                    stroke="#E2E8F0"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                  />

                  {/* Crosshair Diagnostic Guides */}
                  <line x1={cx} y1="35" x2={cx} y2="445" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="35" y1={cy} x2="445" y2={cy} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Circuit Paths connecting Central Core to each node */}
                  {nodes.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const nx = cx + node.radius * Math.cos(rad);
                    const ny = cy + node.radius * Math.sin(rad);
                    const isActive = activeNode.id === node.id;

                    return (
                      <g key={node.id}>
                        {/* Connecting Line */}
                        <line
                          x1={cx}
                          y1={cy}
                          x2={nx}
                          y2={ny}
                          stroke={isActive ? node.color : '#CBD5E1'}
                          strokeWidth={isActive ? '2.5' : '1.5'}
                          strokeDasharray={isActive ? 'none' : '4 4'}
                          className="transition-all duration-300"
                        />
                        {/* Animated signal node on active line */}
                        {isActive && (
                          <circle
                            cx={(cx + nx) / 2}
                            cy={(cy + ny) / 2}
                            r="3"
                            fill={node.color}
                            className="animate-ping"
                          />
                        )}
                      </g>
                    );
                  })}

                  {/* Outer Hexagonal Interconnect lines between adjacent nodes */}
                  {nodes.map((node, i) => {
                    const nextNode = nodes[(i + 1) % nodes.length];
                    const r1 = (node.angle * Math.PI) / 180;
                    const r2 = (nextNode.angle * Math.PI) / 180;
                    const x1 = cx + node.radius * Math.cos(r1);
                    const y1 = cy + node.radius * Math.sin(r1);
                    const x2 = cx + nextNode.radius * Math.cos(r2);
                    const y2 = cy + nextNode.radius * Math.sin(r2);

                    return (
                      <line
                        key={`poly-${i}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#E2E8F0"
                        strokeWidth="1"
                      />
                    );
                  })}
                </svg>

                {/* Central Sovereign Engine Core Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#0A192F] text-white border-4 border-blue-900 shadow-2xl flex flex-col items-center justify-center p-3 text-center z-20 select-none">
                  {/* Outer glowing pulsing aura */}
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <Cpu className="w-5 h-5 text-[#DC2626] mb-1 animate-pulse" />
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#38BDF8] font-bold block mb-0.5">
                      SOVEREIGN CORE
                    </span>
                    <span className="font-display font-extrabold text-xs text-white leading-tight">
                      NAIR.AI Intelligence
                    </span>
                    <span className="text-[8px] font-mono text-[#38BDF8] font-semibold mt-1">
                      ● TELEMETRY ACTIVE
                    </span>
                  </div>
                </div>

                {/* 6 Surrounding Interactive Metric Pills */}
                {nodes.map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const nx = cx + node.radius * Math.cos(rad);
                  const ny = cy + node.radius * Math.sin(rad);
                  const isActive = activeNode.id === node.id;

                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      onMouseEnter={() => setActiveNode(node)}
                      className={`absolute z-30 group flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full font-mono transition-all duration-300 shadow-lg cursor-pointer ${
                        isActive
                          ? 'scale-110 sm:scale-115 text-white shadow-2xl ring-4 ring-offset-2'
                          : 'bg-white text-[#0A192F] hover:scale-105 border border-slate-200/90 hover:border-slate-300'
                      }`}
                      style={{
                        left: `${(nx / 480) * 100}%`,
                        top: `${(ny / 480) * 100}%`,
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: isActive ? node.color : '#FFFFFF',
                      }}
                      aria-label={`View ${node.label} benchmark`}
                    >
                      {/* Pulsing beacon dot inside pill */}
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isActive
                            ? 'bg-white animate-pulse'
                            : ''
                        }`}
                        style={{
                          backgroundColor: isActive ? '#FFFFFF' : node.color,
                        }}
                      />

                      {/* Percentage Badge */}
                      <span
                        className={`font-display font-black text-sm sm:text-base leading-none tracking-tight ${
                          isActive ? 'text-white' : ''
                        }`}
                        style={{
                          color: isActive ? '#FFFFFF' : node.color,
                        }}
                      >
                        {node.pct}
                      </span>

                      {/* Short Label */}
                      <span
                        className={`text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-wider ${
                          isActive ? 'text-white' : 'text-slate-700'
                        }`}
                      >
                        {node.tag}
                      </span>
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
