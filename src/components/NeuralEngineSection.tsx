import React, { useState } from 'react';
import {
  Sparkles,
  Cpu,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import { FluidOrb } from './FluidOrb';
import { ScrollReveal } from './ScrollReveal';

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
      color: '#2563EB', // Royal Blue
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
      color: '#DC2626', // Crimson Red
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
      color: '#0284C7', // Cerulean Blue
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
    <section className="py-14 md:py-20 bg-[#071326] text-white relative overflow-hidden border-t border-b border-blue-950">
      {/* Background Ambient Glows in Blue and Red */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#1D4ED8]/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#DC2626]/12 blur-[130px] pointer-events-none" />

      {/* Tighter, Compact max-w-5xl Container */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal y={28} duration={0.6}>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-[11px] tracking-[0.2em] uppercase font-extrabold bg-blue-950/80 text-blue-300 border border-blue-800/50 shadow-xs mb-3.5">
              <Cpu className="w-3 h-3 text-[#DC2626]" />
              <span>PROPRIETARY MULTI-AGENT INFERENCE ENGINE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight">
              The Autonomous <span className="text-[#38BDF8]">Intelligence Core</span>.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
              Real-time telemetry across multi-agent tool orchestration, cryptographic zero-retention guardrails, and sovereign enterprise decision systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Side-by-Side Lab Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-center w-full">
          
          {/* Left Column: Interactive Fluid Orb (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <ScrollReveal delay={0.1} y={32} duration={0.65} className="w-full flex flex-col items-center">
              <div
                onClick={onOpenAssessment}
                title="Click to launch AI Readiness Diagnostic"
                className="relative flex items-center justify-center cursor-pointer group select-none py-2"
              >
                <div className="absolute inset-0 rounded-full bg-[#2563EB]/20 blur-2xl scale-120 group-hover:scale-130 transition-transform duration-500 pointer-events-none" />
                <div className="absolute inset-0 rounded-full bg-[#DC2626]/15 blur-xl scale-105 pointer-events-none" />

                <FluidOrb
                  size={225}
                  color={currentMode.color}
                  className="relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_15px_35px_rgba(37,99,235,0.3)]"
                />

                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-[#0A192F] text-white font-mono text-[10px] uppercase tracking-wider font-extrabold border border-blue-700/50 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-[#DC2626]" />
                  <span>NEURAL CORE</span>
                </div>
              </div>

              {/* Mode Toggles */}
              <div className="flex items-center gap-1.5 mt-5 p-1 rounded-full bg-[#0A192F]/90 border border-blue-900/60 font-mono text-[11px] shadow-lg">
                {(['inference', 'governance', 'agentic'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setOrbMode(m)}
                    className={`px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold transition-all cursor-pointer ${
                      orbMode === m
                        ? 'bg-[#1D4ED8] text-white shadow-md scale-102 font-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {m === 'agentic' ? 'Agentic' : m}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Telemetry Readout & Controls (7 cols) */}
          <div className="lg:col-span-7 min-w-0 w-full">
            <ScrollReveal delay={0.15} y={32} duration={0.7}>
              <div className="p-5 sm:p-7 rounded-2xl bg-[#0A192F]/90 border border-blue-900/50 shadow-xl backdrop-blur-md min-w-0 overflow-hidden">
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-blue-900/40 mb-5 min-w-0">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#DC2626] font-bold">
                        SUBSYSTEM //
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">NAI-CORE-09</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                      {currentMode.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-normal mt-0.5 leading-relaxed">
                      {currentMode.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#38BDF8] px-3 py-1 rounded-full bg-blue-950 border border-blue-800/60 font-bold shrink-0 self-start sm:self-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    <span>ONLINE · 99.99%</span>
                  </div>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3.5 mb-5 min-w-0">
                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#071326] border border-blue-950 shadow-inner min-w-0 overflow-hidden">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold mb-0.5 truncate">
                      LATENCY
                    </span>
                    <div className="font-display font-black text-lg sm:text-2xl text-[#38BDF8] truncate">
                      {currentMode.latency}
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#071326] border border-blue-950 shadow-inner min-w-0 overflow-hidden">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold mb-0.5 truncate">
                      THROUGHPUT
                    </span>
                    <div
                      className={`font-display font-black text-white truncate ${
                        currentMode.throughput.length > 10
                          ? 'text-xs sm:text-sm lg:text-base tracking-tight'
                          : 'text-lg sm:text-2xl'
                      }`}
                      title={currentMode.throughput}
                    >
                      {currentMode.throughput}
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#071326] border border-blue-950 shadow-inner min-w-0 overflow-hidden">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold mb-0.5 truncate">
                      RETENTION
                    </span>
                    <div className="font-display font-black text-lg sm:text-2xl text-[#DC2626] truncate">
                      0.00 KB
                    </div>
                  </div>
                </div>

                {/* Live Streaming Terminal Log Stream */}
                <div className="p-3.5 rounded-xl bg-[#071326] border border-blue-950 mb-5 font-mono text-xs overflow-hidden">
                  <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-blue-900/40 text-slate-400 text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-[#38BDF8]" />
                      <span className="text-white font-bold">STREAM TELEMETRY</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#38BDF8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                      <span>LIVE LOG</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-slate-300 text-[11px] overflow-hidden">
                    {currentMode.logSample.map((log, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 min-w-0">
                        <span className="text-[#38BDF8] font-bold shrink-0">{'>'}</span>
                        <span className="leading-tight break-words min-w-0 flex-1">{log}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    onClick={onOpenAssessment}
                    className="px-6 py-3 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs uppercase tracking-wider font-extrabold rounded-full transition-all shadow-md shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
                  >
                    <span>Launch Diagnostic</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                  </button>

                  <button
                    onClick={onBookCall}
                    className="px-5 py-3 border border-blue-600/50 hover:border-white text-white hover:text-white font-mono text-xs uppercase tracking-wider font-bold rounded-full transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <span>Schedule Technical Audit</span>
                  </button>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NeuralEngineSection;
