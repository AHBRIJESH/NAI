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
    <section className="py-14 md:py-20 bg-[#09090B] text-[#FAFAFA] relative overflow-hidden border-t border-b border-white/10">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#E3EF26]/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#00E599]/10 blur-[130px] pointer-events-none" />

      {/* Tighter, Compact max-w-5xl Container */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-[11px] tracking-[0.2em] uppercase font-extrabold bg-[#18181B] text-[#E3EF26] border border-white/10 shadow-xs mb-3.5">
            <Cpu className="w-3 h-3 text-[#E3EF26]" />
            <span>PROPRIETARY MULTI-AGENT INFERENCE ENGINE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight">
            The Autonomous <span className="text-[#E3EF26]">Intelligence Core</span>.
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mx-auto font-normal leading-relaxed">
            Real-time telemetry across multi-agent tool orchestration, cryptographic zero-retention guardrails, and sovereign enterprise decision systems.
          </p>
        </div>

        {/* Side-by-Side Lab Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-center w-full">
          
          {/* Left Column: Interactive Fluid Orb (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div
              onClick={onOpenAssessment}
              title="Click to launch AI Readiness Diagnostic"
              className="relative flex items-center justify-center cursor-pointer group select-none py-2"
            >
              <div className="absolute inset-0 rounded-full bg-[#E3EF26]/15 blur-2xl scale-120 group-hover:scale-130 transition-transform duration-500 pointer-events-none" />
              <div className="absolute inset-0 rounded-full bg-[#00E599]/20 blur-xl scale-105 pointer-events-none" />

              <FluidOrb
                size={225}
                color={currentMode.color}
                className="relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_15px_35px_rgba(227,239,38,0.2)]"
              />

              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-[#18181B] text-[#E3EF26] font-mono text-[10px] uppercase tracking-wider font-extrabold border border-white/10 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-[#E3EF26]" />
                <span>NEURAL CORE</span>
              </div>
            </div>

            {/* Mode Toggles */}
            <div className="flex items-center gap-1.5 mt-5 p-1 rounded-full bg-[#18181B]/90 border border-white/10 font-mono text-[11px] shadow-lg">
              {(['inference', 'governance', 'agentic'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setOrbMode(m)}
                  className={`px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    orbMode === m
                      ? 'bg-[#E3EF26] text-black shadow-md scale-102 font-black'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {m === 'agentic' ? 'Agentic' : m}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Telemetry Readout & Controls (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121215]/90 border border-white/10 shadow-xl backdrop-blur-md">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#E3EF26] font-bold">
                      SUBSYSTEM //
                    </span>
                    <span className="font-mono text-[11px] text-[#71717A]">NAI-CORE-09</span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    {currentMode.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] font-normal mt-0.5 leading-relaxed">
                    {currentMode.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#E3EF26] px-3 py-1 rounded-full bg-[#18181B] border border-[#E3EF26]/30 font-bold shrink-0 self-start sm:self-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3EF26] pulse-beacon" />
                  <span>ONLINE · 99.99%</span>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 mb-5">
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#09090B] border border-white/10 shadow-inner">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#71717A] block font-bold mb-0.5">
                    LATENCY
                  </span>
                  <div className="font-display font-black text-xl sm:text-2xl text-[#E3EF26]">
                    {currentMode.latency}
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#09090B] border border-white/10 shadow-inner">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#71717A] block font-bold mb-0.5">
                    THROUGHPUT
                  </span>
                  <div className="font-display font-black text-xl sm:text-2xl text-white">
                    {currentMode.throughput}
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#09090B] border border-white/10 shadow-inner">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#71717A] block font-bold mb-0.5">
                    RETENTION
                  </span>
                  <div className="font-display font-black text-xl sm:text-2xl text-[#E3EF26]">
                    0.00 KB
                  </div>
                </div>
              </div>

              {/* Live Streaming Terminal Log Stream */}
              <div className="p-3.5 rounded-xl bg-[#09090B] border border-white/10 mb-5 font-mono text-xs">
                <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10 text-[#71717A] text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-[#E3EF26]" />
                    <span className="text-white font-bold">STREAM TELEMETRY</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-[#E3EF26]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E3EF26] pulse-beacon" />
                    <span>LIVE LOG</span>
                  </div>
                </div>
                <div className="space-y-1 text-[#D4D4D8] text-[11px]">
                  {currentMode.logSample.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#E3EF26]/70 font-bold shrink-0">{'>'}</span>
                      <span className="leading-tight break-all">{log}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={onOpenAssessment}
                  className="px-6 py-3 bg-[#E3EF26] hover:bg-[#d2de1e] text-black font-mono text-xs uppercase tracking-wider font-black rounded-full transition-all shadow-md shadow-[#E3EF26]/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
                >
                  <span>Launch Diagnostic</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                </button>

                <button
                  onClick={onBookCall}
                  className="px-5 py-3 border border-white/20 hover:border-[#E3EF26] text-white hover:text-[#E3EF26] font-mono text-xs uppercase tracking-wider font-bold rounded-full transition-colors flex items-center justify-center cursor-pointer"
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
