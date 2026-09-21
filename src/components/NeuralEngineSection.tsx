import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Workflow,
  Server,
  Lock,
  Activity,
  Terminal,
  Layers,
} from 'lucide-react';
import { FluidOrb } from './FluidOrb';

interface NeuralEngineSectionProps {
  onOpenAssessment: () => void;
  onBookCall: () => void;
}

export const NeuralEngineSection: React.FC<NeuralEngineSectionProps> = ({
  onOpenAssessment,
  onBookCall,
}) => {
  const [orbMode, setOrbMode] = useState<'inference' | 'governance' | 'agentic'>('inference');

  const modeDetails = {
    inference: {
      color: '#076653',
      title: 'Real-Time Neural Inference',
      latency: '12.4ms',
      throughput: '1,420 tps',
      desc: 'Zero-latency streaming architecture for high-throughput enterprise decision systems.',
      logSample: [
        'orchestrator :: stream initialized on port 8443 (HTTP/3 QUIC)',
        'tensor-pipeline :: sub-millisecond weight retrieval from private memory cache',
        'dispatch :: token generation streaming at 1,420 tokens/sec across 16 shards',
      ],
    },
    governance: {
      color: '#0C342C',
      title: 'Zero-Retention Guardrail',
      latency: '8.1ms',
      throughput: 'Deterministic',
      desc: 'In-memory ephemeral token processing with provably zero external retention or disk writes.',
      logSample: [
        'guardrail :: scrubbing outbound prompts for PII & corporate credential leaks',
        'ephemeral-mem :: 0 bytes persisted to disk — volatile VPC memory wiped post-execution',
        'compliance :: SOC2 Type II cryptographic HMAC trace verified and signed',
      ],
    },
    agentic: {
      color: '#076653',
      title: 'Multi-Agent Tool Orchestration',
      latency: '24.6ms',
      throughput: '8 Swarms',
      desc: 'Autonomous goal-seeking networks executing cross-platform operational workflows and API transactions.',
      logSample: [
        'swarm-master :: decomposing multi-step ERP reconciliation objective',
        'worker-agent-3 :: querying PostgreSQL sandbox with automated rollback lock',
        'consensus :: 4 of 4 verification nodes confirm deterministic ledger parity',
      ],
    },
  };

  const currentMode = modeDetails[orbMode];

  const architecturePillars = [
    {
      icon: Workflow,
      tag: 'PARALLEL SWARMS',
      title: 'Sub-Second Agent Orchestration',
      stat: '12.4ms Interconnect',
      desc: 'Autonomous multi-agent swarms decompose complex business logic into parallel execution threads with dynamic consensus validation.',
    },
    {
      icon: Lock,
      tag: 'DATA SOVEREIGNTY',
      title: 'Cryptographic Zero-Retention',
      stat: '0 Bytes Persisted',
      desc: 'Volatile in-memory execution guarantees client data is never cached, logged to persistent disk, or used in foundation model training.',
    },
    {
      icon: Server,
      tag: 'HYBRID TOPOLOGY',
      title: 'Private VPC & On-Prem Deploy',
      stat: 'AWS · Azure · GCP · GovCloud',
      desc: 'Runs entirely within your corporate security perimeter with dedicated air-gapped clusters and zero outbound telemetry dependencies.',
    },
    {
      icon: Layers,
      tag: 'ENTERPRISE INTEGRITY',
      title: 'Deterministic Tool Rollback',
      stat: '100% Causal Replay',
      desc: 'Every tool invocation and database mutation is guarded by transactional rollback barriers and automated human-in-the-loop triggers.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#06231D] text-[#FFFDEE] relative overflow-hidden border-t border-b border-[#076653]/35">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#E3EF26]/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#076653]/25 blur-[160px] pointer-events-none" />

      {/* Broader Full-Span Content Container */}
      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Broad Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl xl:max-w-5xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full font-mono text-xs tracking-[0.22em] uppercase font-extrabold bg-[#0C342C] text-[#E3EF26] border border-[#076653]/50 shadow-xs mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#E3EF26]" />
            <span>PROPRIETARY MULTI-AGENT INFERENCE ENGINE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#FFFDEE] mb-5 leading-[1.08]">
            The Autonomous <span className="text-[#E3EF26]">Intelligence Core</span>.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#E2FBCE]/85 max-w-3xl mx-auto font-normal leading-relaxed">
            Real-time telemetry across multi-agent tool orchestration, cryptographic zero-retention guardrails, and sovereign enterprise decision systems.
          </p>
        </div>

        {/* Broad Side-by-Side Lab Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center w-full">
          
          {/* Left Column: Expanded Fluid Orb Lab (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div
              onClick={onOpenAssessment}
              title="Click to launch AI Readiness Diagnostic"
              className="relative flex items-center justify-center cursor-pointer group select-none py-6"
            >
              <div className="absolute inset-0 rounded-full bg-[#E3EF26]/20 blur-3xl scale-130 group-hover:scale-140 transition-transform duration-500 pointer-events-none" />
              <div className="absolute inset-0 rounded-full bg-[#076653]/40 blur-2xl scale-115 pointer-events-none" />

              <FluidOrb
                size={300}
                color={currentMode.color}
                className="relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_25px_50px_rgba(227,239,38,0.25)]"
              />

              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-[#0C342C] text-[#E3EF26] font-mono text-[11px] uppercase tracking-wider font-extrabold border border-[#076653]/50 shadow-lg flex items-center gap-2 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-[#E3EF26]" />
                <span>NEURAL CORE</span>
              </div>
            </div>

            {/* Mode Toggles */}
            <div className="flex items-center gap-2 mt-6 p-1.5 rounded-full bg-[#0C342C]/90 border border-[#076653]/50 font-mono text-xs shadow-lg">
              {(['inference', 'governance', 'agentic'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setOrbMode(m)}
                  className={`px-4 sm:px-5 py-2 rounded-full uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    orbMode === m
                      ? 'bg-[#E3EF26] text-[#06231D] shadow-md scale-102 font-black'
                      : 'text-[#E2FBCE]/75 hover:text-[#FFFDEE]'
                  }`}
                >
                  {m === 'agentic' ? 'Agentic Swarms' : m}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Broader Telemetry Readout & Controls (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 xl:p-11 rounded-3xl bg-[#0C342C]/70 border border-[#076653]/50 shadow-2xl backdrop-blur-md">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#076653]/35 mb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#E3EF26] font-bold">
                      ACTIVE SUBSYSTEM //
                    </span>
                    <span className="font-mono text-xs text-[#E2FBCE]/60">ID: NAI-CORE-09</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FFFDEE]">
                    {currentMode.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#E2FBCE]/85 font-normal mt-1 leading-relaxed">
                    {currentMode.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#E3EF26] px-3.5 py-1.5 rounded-full bg-[#076653]/60 border border-[#E3EF26]/35 font-bold shrink-0 self-start sm:self-center">
                  <span className="w-2 h-2 rounded-full bg-[#E3EF26] pulse-beacon" />
                  <span>ONLINE · 99.99% SLA</span>
                </div>
              </div>

              {/* Expanded Metric Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#06231D]/85 border border-[#076653]/35 shadow-inner">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#E2FBCE]/65 block font-bold mb-1">
                    LATENCY
                  </span>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#E3EF26]">
                    {currentMode.latency}
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#06231D]/85 border border-[#076653]/35 shadow-inner">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#E2FBCE]/65 block font-bold mb-1">
                    THROUGHPUT
                  </span>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#FFFDEE]">
                    {currentMode.throughput}
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#06231D]/85 border border-[#076653]/35 shadow-inner">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#E2FBCE]/65 block font-bold mb-1">
                    RETENTION
                  </span>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#E3EF26]">
                    0.00 KB
                  </div>
                </div>
              </div>

              {/* Live Streaming Terminal Log Stream */}
              <div className="p-4 rounded-2xl bg-[#06231D]/95 border border-[#076653]/40 mb-7 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#076653]/25 text-[#E2FBCE]/60 text-[11px]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#E3EF26]" />
                    <span className="text-[#FFFDEE] font-bold">STREAM TELEMETRY</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#E3EF26]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E3EF26] pulse-beacon" />
                    <span>LIVE LOG</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-[#E2FBCE]/85">
                  {currentMode.logSample.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#E3EF26]/70 font-bold shrink-0">{'>'}</span>
                      <span className="leading-tight break-all">{log}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={onOpenAssessment}
                  className="px-8 py-3.5 bg-[#E3EF26] hover:bg-[#d2de1e] text-[#06231D] font-mono text-xs sm:text-sm uppercase tracking-wider font-black rounded-full transition-all shadow-md shadow-[#E3EF26]/20 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-102"
                >
                  <span>Launch Diagnostic</span>
                  <ArrowRight className="w-4 h-4 text-[#06231D] stroke-[2.5]" />
                </button>

                <button
                  onClick={onBookCall}
                  className="px-7 py-3.5 border border-[#076653] hover:border-[#E3EF26] text-[#FFFDEE] hover:text-[#E3EF26] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span>Schedule Technical Audit</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Panoramic Multi-Agent Architecture Pillars (Spans full broad width) */}
        <div className="mt-14 lg:mt-20 pt-12 border-t border-[#076653]/35">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#E3EF26] font-bold block mb-2">
                ARCHITECTURE TOPOLOGY //
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FFFDEE]">
                Engineered for High-Scale Enterprise Governance
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#E2FBCE]/70">
              <Activity className="w-4 h-4 text-[#E3EF26]" />
              <span>Full Causal Auditability & Isolation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            {architecturePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#0C342C]/50 hover:bg-[#0C342C]/80 border border-[#076653]/40 hover:border-[#E3EF26]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#076653]/40 border border-[#E3EF26]/20 flex items-center justify-center text-[#E3EF26] group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#E3EF26] font-bold px-2.5 py-1 rounded-md bg-[#06231D]/80 border border-[#076653]/40">
                        {pillar.tag}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-lg text-[#FFFDEE] mb-1.5 group-hover:text-[#E3EF26] transition-colors">
                      {pillar.title}
                    </h4>

                    <div className="font-mono text-xs text-[#E3EF26] font-bold mb-3">
                      {pillar.stat}
                    </div>

                    <p className="text-xs sm:text-sm text-[#E2FBCE]/75 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default NeuralEngineSection;
