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
      image: '/images/telemetry_inference.jpg',
      imageCaption: 'AI Inference: Text, Image, Audio & Video to Real-Time Insights & Actions',
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
      title: 'Zero-Retention Guardrail & Governance',
      latency: '8.1ms',
      throughput: 'Deterministic',
      retention: '0.00 KB',
      image: '/images/telemetry_governance.jpg',
      imageCaption: 'AI Governance: Ethics, Policies, People, Compliance & Risk Management',
      desc: 'In-memory ephemeral token processing with provably zero external retention, automated ethical boundaries, and ISO 27001 compliance.',
      logSample: [
        'guardrail :: scrubbing outbound prompts for PII & corporate credential leaks',
        'ephemeral-mem :: 0 bytes persisted to disk — volatile VPC memory wiped post-execution',
        'compliance :: ISO 27001 cryptographic HMAC audit trace verified and signed',
      ],
    },
    agentic: {
      color: '#0284C7', // Cerulean Blue
      tag: 'MULTI-AGENT ORCHESTRATION',
      title: 'Agentic AI & Multi-Agent Swarms',
      latency: '24.6ms',
      throughput: '8 Swarms',
      retention: '0.00 KB',
      image: '/images/telemetry_agentic.jpg',
      imageCaption: 'Agentic AI: Plan, Reason, Collaborate & Act Autonomously with Real Impact',
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
        
        {/* Section Header: Clean typography without top pill */}
        <ScrollReveal y={24} duration={0.6}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3 block">
              Sovereign Architecture Telemetry
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-4 leading-tight">
              The Autonomous <span className="text-[#1D4ED8]">Intelligence Core</span>.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Real-time telemetry across multi-agent tool orchestration, cryptographic zero-retention guardrails, and sovereign enterprise decision systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Side-by-Side Lab Console: Left Visual Display & Right Telemetry Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full">
          
          {/* Left Column: Widescreen Visual Console (6 cols) */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <ScrollReveal delay={0.1} y={24} duration={0.65} className="h-full flex flex-col">
              <div className="w-full h-full rounded-3xl overflow-hidden border border-blue-200/90 shadow-xl bg-[#0A192F] flex flex-col justify-between">
                
                {/* Top Badge: Mode Status */}
                <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800 bg-[#060D1D]/90">
                  <span
                    className="px-2.5 py-1 rounded-md font-mono text-[10px] uppercase font-bold tracking-wider text-white shadow-md"
                    style={{ backgroundColor: `${currentMode.color}EE` }}
                  >
                    {currentMode.tag}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-md font-bold">
                    ● ACTIVE STREAM
                  </span>
                </div>

                {/* 100% VISIBLE IMAGE CONTAINER: Natural Aspect Ratio, Zero Cropping */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[3/2] bg-[#070F1E] flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={orbMode}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={currentMode.image}
                        alt={currentMode.title}
                        className="w-full h-full object-contain rounded-xl shadow-lg"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Console: Caption & Interactive Mode Toggles Outside the Image */}
                <div className="p-4 sm:p-5 bg-[#060D1D]/95 border-t border-slate-800/90 space-y-3.5">
                  <div className="text-left text-white">
                    <span className="font-mono text-xs sm:text-[13px] text-blue-200 font-bold block mb-1">
                      {currentMode.imageCaption}
                    </span>
                    <span className="text-xs text-slate-400 font-normal">
                      Click below to switch the architecture view and inspect live stream logs.
                    </span>
                  </div>

                  {/* Mode Toggles */}
                  <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-700/80 font-mono text-xs shadow-inner">
                    {(['inference', 'governance', 'agentic'] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => {
                          setOrbMode(m);
                          setIsAutoCycling(false);
                        }}
                        className={`flex-1 py-2.5 px-2 rounded-xl uppercase tracking-wider font-bold transition-all cursor-pointer text-center text-xs ${
                          orbMode === m
                            ? 'bg-[#1D4ED8] text-white shadow-md font-black scale-[1.02]'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
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

          {/* Right Column: Telemetry Readout & Controls (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center min-w-0 w-full h-full">
            <ScrollReveal delay={0.15} y={24} duration={0.7} className="h-full flex flex-col">
              <div className="p-6 sm:p-8 rounded-3xl bg-white/95 border border-blue-200/90 shadow-xl backdrop-blur-md min-w-0 text-left space-y-6 h-full flex flex-col justify-between">
                
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
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#1D4ED8] font-bold shrink-0 self-start sm:self-center">
                    <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
                    <span>ONLINE · 99.99%</span>
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
