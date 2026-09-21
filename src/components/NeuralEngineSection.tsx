import React, { useState } from 'react';
import {
  Sparkles,
  Cpu,
  ArrowRight,
  Terminal,
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
      color: '#00E599',
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
      color: '#E3EF26',
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
      color: '#00E599',
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

  return (
    <section className="py-20 md:py-28 bg-[#09090B] text-[#FAFAFA] relative overflow-hidden border-t border-b border-white/10">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#E3EF26]/8 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#00E599]/10 blur-[150px] pointer-events-none" />

      {/* Harmonious Standard max-w-7xl Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full font-mono text-xs tracking-[0.22em] uppercase font-extrabold bg-[#18181B] text-[#E3EF26] border border-white/10 shadow-xs mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#E3EF26]" />
            <span>PROPRIETARY MULTI-AGENT INFERENCE ENGINE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            The Autonomous <span className="text-[#E3EF26]">Intelligence Core</span>.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#A1A1AA] max-w-2xl mx-auto font-normal leading-relaxed">
            Real-time telemetry across multi-agent tool orchestration, cryptographic zero-retention guardrails, and sovereign enterprise decision systems.
          </p>
        </div>

        {/* Side-by-Side Lab Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center w-full">
          
          {/* Left Column: Interactive Fluid Orb (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div
              onClick={onOpenAssessment}
              title="Click to launch AI Readiness Diagnostic"
              className="relative flex items-center justify-center cursor-pointer group select-none py-4"
            >
              <div className="absolute inset-0 rounded-full bg-[#E3EF26]/15 blur-3xl scale-125 group-hover:scale-135 transition-transform duration-500 pointer-events-none" />
              <div className="absolute inset-0 rounded-full bg-[#00E599]/20 blur-2xl scale-110 pointer-events-none" />

              <FluidOrb
                size={270}
                color={currentMode.color}
                className="relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_20px_45px_rgba(227,239,38,0.22)]"
              />

              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-[#18181B] text-[#E3EF26] font-mono text-[11px] uppercase tracking-wider font-extrabold border border-white/10 shadow-lg flex items-center gap-2 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-[#E3EF26]" />
                <span>NEURAL CORE</span>
              </div>
            </div>

            {/* Mode Toggles */}
            <div className="flex items-center gap-2 mt-6 p-1.5 rounded-full bg-[#18181B]/90 border border-white/10 font-mono text-xs shadow-lg">
              {(['inference', 'governance', 'agentic'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setOrbMode(m)}
                  className={`px-4 sm:px-5 py-2 rounded-full uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    orbMode === m
                      ? 'bg-[#E3EF26] text-black shadow-md scale-102 font-black'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {m === 'agentic' ? 'Agentic Swarms' : m}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Telemetry Readout & Controls (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 xl:p-10 rounded-3xl bg-[#121215]/90 border border-white/10 shadow-2xl backdrop-blur-md">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10 mb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#E3EF26] font-bold">
                      ACTIVE SUBSYSTEM //
                    </span>
                    <span className="font-mono text-xs text-[#71717A]">ID: NAI-CORE-09</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {currentMode.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A1A1AA] font-normal mt-1 leading-relaxed">
                    {currentMode.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#E3EF26] px-3.5 py-1.5 rounded-full bg-[#18181B] border border-[#E3EF26]/30 font-bold shrink-0 self-start sm:self-center">
                  <span className="w-2 h-2 rounded-full bg-[#E3EF26] pulse-beacon" />
                  <span>ONLINE · 99.99% SLA</span>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#09090B] border border-white/10 shadow-inner">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#71717A] block font-bold mb-1">
                    LATENCY
                  </span>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#E3EF26]">
                    {currentMode.latency}
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#09090B] border border-white/10 shadow-inner">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#71717A] block font-bold mb-1">
                    THROUGHPUT
                  </span>
                  <div className="font-display font-black text-2xl sm:text-3xl text-white">
                    {currentMode.throughput}
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#09090B] border border-white/10 shadow-inner">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#71717A] block font-bold mb-1">
                    RETENTION
                  </span>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#E3EF26]">
                    0.00 KB
                  </div>
                </div>
              </div>

              {/* Live Streaming Terminal Log Stream */}
              <div className="p-4 rounded-2xl bg-[#09090B] border border-white/10 mb-7 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/10 text-[#71717A] text-[11px]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#E3EF26]" />
                    <span className="text-white font-bold">STREAM TELEMETRY</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#E3EF26]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E3EF26] pulse-beacon" />
                    <span>LIVE LOG</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-[#D4D4D8]">
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
                  className="px-8 py-3.5 bg-[#E3EF26] hover:bg-[#d2de1e] text-black font-mono text-xs sm:text-sm uppercase tracking-wider font-black rounded-full transition-all shadow-md shadow-[#E3EF26]/20 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-102"
                >
                  <span>Launch Diagnostic</span>
                  <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
                </button>

                <button
                  onClick={onBookCall}
                  className="px-7 py-3.5 border border-white/20 hover:border-[#E3EF26] text-white hover:text-[#E3EF26] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span>Schedule Technical Audit</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NeuralEngineSection;
