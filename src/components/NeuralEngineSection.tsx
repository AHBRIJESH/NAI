import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { MotionDotCanvas } from './MotionDotCanvas';

interface NeuralEngineSectionProps {
  onOpenAssessment: () => void;
  onBookCall: () => void;
}

export type EngineMode = 'inference' | 'governance' | 'agentic';

export const NeuralEngineSection: React.FC<NeuralEngineSectionProps> = ({
  onOpenAssessment,
  onBookCall,
}) => {
  const [orbMode, setOrbMode] = useState<EngineMode>('inference');
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);

  const modes: EngineMode[] = ['inference', 'governance', 'agentic'];

  const modeDetails = {
    inference: {
      color: '#1D4ED8', // Royal Blue
      tag: 'SUB-15MS INFERENCE STREAM',
      title: 'Real-Time Neural Inference',
      latency: '12.4ms',
      throughput: '1,420 tps',
      retention: '0.00 KB',
      image: '/images/solutions_architecture.jpg',
      imageCaption: 'Distributed GPU Tensor Ingestion Pipeline',
      desc: 'Zero-latency streaming architecture for high-throughput enterprise decision systems and real-time inference.',
      logSample: [
        'orchestrator :: stream initialized on port 8443 (HTTP/3 QUIC)',
        'tensor-pipeline :: sub-millisecond weight retrieval from private memory cache',
        'dispatch :: token generation streaming at 1,420 tokens/sec across 16 shards',
      ],
    },
    governance: {
      color: '#DC2626', // Crimson Red
      tag: 'AIR-GAPPED COMPLIANCE CORE',
      title: 'Zero-Retention Guardrail',
      latency: '8.1ms',
      throughput: 'Deterministic',
      retention: '0.00 KB',
      image: '/images/security_vault.jpg',
      imageCaption: 'Cryptographic Zero-Retention Enclave',
      desc: 'In-memory ephemeral token processing with provably zero external retention or disk writes.',
      logSample: [
        'guardrail :: scrubbing outbound prompts for PII & corporate credential leaks',
        'ephemeral-mem :: 0 bytes persisted to disk — volatile VPC memory wiped post-execution',
        'compliance :: SOC2 Type II cryptographic HMAC trace verified and signed',
      ],
    },
    agentic: {
      color: '#0284C7', // Cerulean Blue
      tag: 'MULTI-AGENT ORCHESTRATION',
      title: 'Multi-Agent Tool Orchestration',
      latency: '24.6ms',
      throughput: '8 Swarms',
      retention: '0.00 KB',
      image: '/images/team_collaboration.jpg',
      imageCaption: 'Autonomous Multi-Agent Collaborative Mesh',
      desc: 'Autonomous goal-seeking networks executing cross-platform operational workflows and API transactions.',
      logSample: [
        'swarm-master :: decomposing multi-step ERP reconciliation objective',
        'worker-agent-3 :: querying PostgreSQL sandbox with automated rollback lock',
        'consensus :: 4 of 4 verification nodes confirm deterministic ledger parity',
      ],
    },
  };

  // Automatic filtering cycle every 6 seconds if not paused
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setOrbMode((prev) => {
        const nextIdx = (modes.indexOf(prev) + 1) % modes.length;
        return modes[nextIdx];
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  const currentMode = modeDetails[orbMode];

  return (
    <section
      id="capabilities"
      className="py-16 md:py-24 bg-gradient-to-b from-[#F0F7FF] via-[#E6F0FA] to-[#F8FAFC] text-[#0A192F] relative overflow-hidden border-t border-b border-blue-200/80"
      onMouseEnter={() => setIsAutoCycling(false)}
      onMouseLeave={() => setIsAutoCycling(true)}
    >
      {/* Interactive Motion Dot Deflection Effect */}
      <MotionDotCanvas dotCount={65} deflectionRadius={140} />

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-blue-300/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-sky-300/15 blur-[130px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal y={24} duration={0.6}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-200 text-[#1D4ED8] font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
              <span>Sovereign Architecture Telemetry</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-4 leading-tight">
              The Autonomous <span className="text-[#1D4ED8]">Intelligence Core</span>.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Real-time telemetry across multi-agent tool orchestration, cryptographic zero-retention guardrails, and sovereign enterprise decision systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Side-by-Side Lab Console: Left Full-Height Visual & Right Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full">
          
          {/* Left Column: Full-Height Filtering Image with Mode Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]">
            <ScrollReveal delay={0.1} y={24} duration={0.65} className="h-full flex flex-col">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-blue-200/90 shadow-xl bg-slate-900 group flex flex-col justify-between">
                
                {/* Cross-fading Full-Height Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={orbMode}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={currentMode.image}
                      alt={currentMode.title}
                      className="w-full h-full object-cover brightness-[0.92] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Badge: Mode Status */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider text-white shadow-md backdrop-blur-md"
                    style={{ backgroundColor: `${currentMode.color}CC` }}
                  >
                    {currentMode.tag}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold backdrop-blur-md">
                    ● ACTIVE
                  </span>
                </div>

                {/* Bottom Overlay: Caption & Interactive Filter Mode Toggles */}
                <div className="relative z-10 p-5 sm:p-6 space-y-4">
                  <div className="text-left text-white drop-shadow-md">
                    <span className="font-mono text-[11px] text-blue-200 font-bold block mb-1">
                      {currentMode.imageCaption}
                    </span>
                    <span className="text-xs text-slate-200/90 font-normal">
                      Automatically updating based on telemetry mode.
                    </span>
                  </div>

                  {/* Mode Toggles */}
                  <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/95 border border-slate-200 shadow-xl font-mono text-[11px] backdrop-blur-md">
                    {(['inference', 'governance', 'agentic'] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => {
                          setOrbMode(m);
                          setIsAutoCycling(false);
                        }}
                        className={`flex-1 py-2 px-2 rounded-xl uppercase tracking-wider font-bold transition-all cursor-pointer text-center ${
                          orbMode === m
                            ? 'bg-[#1D4ED8] text-white shadow-md font-black scale-[1.02]'
                            : 'text-slate-600 hover:text-[#1D4ED8] hover:bg-blue-50/50'
                        }`}
                      >
                        {m === 'agentic' ? 'Agentic' : m}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Telemetry Readout & Controls (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center min-w-0 w-full">
            <ScrollReveal delay={0.15} y={24} duration={0.7}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white/95 border border-blue-200/90 shadow-xl backdrop-blur-md min-w-0 text-left space-y-6">
                
                {/* Header Title & Status */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-200/80">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#DC2626] font-bold">
                        SUBSYSTEM //
                      </span>
                      <span className="font-mono text-[11px] text-slate-500 font-semibold">NAI-CORE-09</span>
                    </div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                      {currentMode.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-normal mt-1 leading-relaxed">
                      {currentMode.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#1D4ED8] px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 font-bold shrink-0 self-start sm:self-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-pulse" />
                    <span>ONLINE · 99.99%</span>
                  </div>
                </div>

                {/* Metric Cards in Light Tech Palette */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block font-bold mb-1">
                      LATENCY
                    </span>
                    <div className="font-display font-black text-xl sm:text-2xl text-[#1D4ED8]">
                      {currentMode.latency}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block font-bold mb-1">
                      THROUGHPUT
                    </span>
                    <div className="font-display font-black text-xl sm:text-2xl text-[#0A192F]">
                      {currentMode.throughput}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-red-50/70 border border-red-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block font-bold mb-1">
                      RETENTION
                    </span>
                    <div className="font-display font-black text-xl sm:text-2xl text-[#DC2626]">
                      {currentMode.retention}
                    </div>
                  </div>
                </div>

                {/* Live Streaming Terminal Log Stream */}
                <div className="p-4 rounded-2xl bg-[#0A192F] text-slate-200 font-mono text-xs shadow-md">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-700/80 text-slate-400 text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span className="text-white font-bold">STREAM TELEMETRY</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#38BDF8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                      <span>LIVE LOG</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-slate-300 text-[11px]">
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
                    type="button"
                    onClick={onOpenAssessment}
                    className="px-7 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
                  >
                    <span>Launch Diagnostic</span>
                    <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
                  </button>

                  <button
                    type="button"
                    onClick={onBookCall}
                    className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-colors flex items-center justify-center cursor-pointer shadow-xs"
                  >
                    <span>Book an AI strategy call</span>
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
