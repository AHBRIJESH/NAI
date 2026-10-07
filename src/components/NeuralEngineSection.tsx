import React, { useState } from 'react';
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

export type EngineMode = 'inference' | 'governance';

export const NeuralEngineSection: React.FC<NeuralEngineSectionProps> = ({
  onOpenAssessment,
  onBookCall,
}) => {
  const [orbMode, setOrbMode] = useState<EngineMode>('inference');

  const modes: EngineMode[] = ['inference', 'governance'];

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
  };

  const currentMode = modeDetails[orbMode];

  return (
    <section
      id="capabilities"
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#F0F7FF] via-[#E6F0FA] to-[#F8FAFC] text-[#0A192F] relative overflow-hidden border-t border-b border-blue-200/80"
    >
      {/* Interactive Motion Dot Deflection Effect */}
      <MotionDotCanvas dotCount={65} deflectionRadius={140} />

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-blue-300/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-sky-300/15 blur-[130px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header: Clean typography without top pill */}
        <ScrollReveal y={24} duration={0.6}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-2 sm:mb-3 block">
              Sovereign Architecture Telemetry
            </span>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-3 sm:mb-4 leading-tight">
              The Autonomous <span className="text-[#1D4ED8]">Intelligence Core</span>.
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Real-time telemetry across neural inference pipelines, cryptographic zero-retention guardrails, and sovereign enterprise decision systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Side-by-Side Lab Console: Left Visual Display & Right Telemetry Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch w-full">
          
          {/* Left Column: Widescreen Visual Console (6 cols) */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <ScrollReveal delay={0.1} y={24} duration={0.65} className="h-full flex flex-col">
              <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-200/90 shadow-xl bg-[#0A192F] flex flex-col justify-between">
                
                {/* Top Badge: Mode Status */}
                <div className="p-3 sm:p-5 flex items-center justify-between border-b border-slate-800 bg-[#060D1D]/90">
                  <span
                    className="px-2.5 py-1 rounded-md font-mono text-[10px] uppercase font-bold tracking-wider text-white shadow-md"
                    style={{ backgroundColor: `${currentMode.color}EE` }}
                  >
                    {currentMode.tag}
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
                <div className="p-3.5 sm:p-5 bg-[#060D1D]/95 border-t border-slate-800/90 space-y-2.5 sm:space-y-3.5">
                  <div className="text-left text-white">
                    <span className="font-mono text-xs sm:text-[13px] text-blue-200 font-bold block">
                      {currentMode.imageCaption}
                    </span>
                  </div>

                  {/* Mode Toggles */}
                  <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-700/80 font-mono text-xs shadow-inner">
                    {(['inference', 'governance'] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setOrbMode(m)}
                        className={`flex-1 py-2.5 px-3 rounded-xl uppercase tracking-wider font-bold transition-all cursor-pointer text-center text-xs ${
                          orbMode === m
                            ? m === 'governance'
                              ? 'bg-[#DC2626] text-white shadow-md font-black scale-[1.01]'
                              : 'bg-[#1D4ED8] text-white shadow-md font-black scale-[1.01]'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        {m}
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
              <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/95 border border-blue-200/90 shadow-xl backdrop-blur-md min-w-0 text-left space-y-4 sm:space-y-6 h-full flex flex-col justify-between">
                
                {/* Header Title & Status */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-200/80">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#DC2626] font-bold">
                        SUBSYSTEM //
                      </span>
                      <span className="font-mono text-[11px] text-slate-500 font-semibold">NAI-CORE-09</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl sm:text-3xl text-[#0A192F]">
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

                {/* Enterprise Architecture Verification Matrix (Clean & Professional Light Design) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-xs space-y-3.5">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: currentMode.color }}
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A192F]">
                        Operational Specifications &amp; SLA
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-[10px] font-mono font-bold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>VERIFIED COMPLIANT</span>
                    </span>
                  </div>

                  {/* Structured Verification Entries */}
                  <div className="space-y-2">
                    {currentMode.logSample.map((log, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: currentMode.color }}
                        />
                        <span className="text-xs text-slate-700 font-medium leading-relaxed">
                          {log}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Verified Telemetry Benchmark Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/70">
                    <div className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/70 text-center">
                      <span className="text-[10px] font-mono uppercase text-slate-500 block font-semibold">Latency</span>
                      <span className="text-xs font-mono font-bold text-[#1D4ED8]">{currentMode.latency}</span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/70 text-center">
                      <span className="text-[10px] font-mono uppercase text-slate-500 block font-semibold">Throughput</span>
                      <span className="text-xs font-mono font-bold text-[#0A192F]">{currentMode.throughput}</span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/70 text-center">
                      <span className="text-[10px] font-mono uppercase text-slate-500 block font-semibold">Disk Cache</span>
                      <span className="text-xs font-mono font-bold text-emerald-600">{currentMode.retention}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
                  <button
                    type="button"
                    onClick={onBookCall}
                    className="px-5 py-3 sm:px-7 sm:py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
                  >
                    <span>Book an AI strategy call</span>
                    <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
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
