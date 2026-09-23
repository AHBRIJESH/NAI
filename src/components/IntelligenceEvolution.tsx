import React, { useState } from 'react';
import { ArrowRight, Sparkles, Brain, Cpu, Zap, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { MotionDotCanvas } from './MotionDotCanvas';

interface IntelligenceEvolutionProps {
  onBookCall?: () => void;
  onExploreCapabilities?: () => void;
}

type StageKey = 'ai' | 'agi' | 'asi';

interface EvolutionStage {
  id: StageKey;
  acronym: string;
  name: string;
  status: string;
  horizon: string;
  color: string;
  tagline: string;
  desc: string;
  capabilities: string[];
  image: string;
  benchmark: string;
}

export const IntelligenceEvolution: React.FC<IntelligenceEvolutionProps> = ({
  onBookCall,
  onExploreCapabilities,
}) => {
  const [activeStage, setActiveStage] = useState<StageKey>('ai');

  const stages: EvolutionStage[] = [
    {
      id: 'ai',
      acronym: 'AI',
      name: 'Artificial Narrow Intelligence',
      status: 'Active in Production Today',
      horizon: 'Now · Present Day',
      color: '#1D4ED8',
      tagline: 'Specialized Domain Mastery with Deterministic Guardrails',
      desc: 'Systems engineered to master specific, bounded objectives with superhuman precision. From parsing complex hospital prior authorizations to sub-15ms fraud detection, Narrow AI automates high-friction enterprise operations without hallucinations.',
      capabilities: [
        'Deterministic multi-agent swarms (NAIR Chat™, NAIR Docs™)',
        'Zero-retention private cloud & on-premise model execution',
        'Structured ERP and clinical database automation',
        'Human-in-the-loop validation and audit trails',
      ],
      image: '/images/solutions_architecture.jpg',
      benchmark: '100x Efficiency in Discrete Tasks',
    },
    {
      id: 'agi',
      acronym: 'AGI',
      name: 'Artificial General Intelligence',
      status: 'Emerging Frontier Research',
      horizon: 'Next 3 – 5 Years',
      color: '#DC2626',
      tagline: 'Human-Level Cognitive Synthesis Across Unseen Domains',
      desc: 'A synthetic system capable of learning, reasoning, and executing any intellectual task that a human can perform. AGI abstracts knowledge from one discipline and autonomously applies it to solve novel problems without task-specific retraining.',
      capabilities: [
        'Autonomous multi-modal reasoning and strategy formulation',
        'Self-healing software codebases and dynamic tool synthesis',
        'Cross-disciplinary scientific hypothesis testing',
        'Dynamic executive planning with ethical governance constraints',
      ],
      image: '/images/hero_sculpture.jpg',
      benchmark: 'Broad General Cognitive Parity',
    },
    {
      id: 'asi',
      acronym: 'ASI',
      name: 'Artificial Superintelligence',
      status: 'Theoretical Horizon',
      horizon: 'Long-Term Horizon',
      color: '#0284C7',
      tagline: 'Synthetic Cognition Surpassing Total Human Capability',
      desc: 'The theoretical threshold where synthetic intelligence vastly exceeds the collective cognitive capability of all humanity across scientific discovery, recursive self-improvement, macroeconomic optimization, and planetary engineering.',
      capabilities: [
        'Recursive self-improving architectural breakthroughs',
        'Accelerated scientific and material discovery in seconds',
        'Planetary resource allocation and multi-system equilibrium',
        'Sovereign containment and cryptographic alignment locks',
      ],
      image: '/images/security_vault.jpg',
      benchmark: 'Exponential Recursive Capability',
    },
  ];

  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#F0F7FF] to-[#F8FAFC] border-t border-b border-blue-200/80 text-[#0A192F] relative overflow-hidden">
      {/* Interactive Motion Dot Deflection Effect */}
      <MotionDotCanvas dotCount={50} deflectionRadius={130} />

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[350px] bg-blue-300/15 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-red-300/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal y={24} duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3 block">
              Cognitive Evolution Roadmap
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-4">
              AI &rarr; AGI &rarr; ASI
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Understanding the trajectory of synthetic intelligence: from today’s domain-specific automation to tomorrow’s general reasoning and beyond.
            </p>
          </div>
        </ScrollReveal>

        {/* Compact Interactive Evolution Stage Selector */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-2 rounded-3xl bg-white border border-slate-200/90 shadow-lg backdrop-blur-md">
            {stages.map((stage) => {
              const isSelected = stage.id === activeStage;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStage(stage.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-50/80 border-[#1D4ED8] shadow-md shadow-blue-500/10 scale-[1.02]'
                      : 'bg-white hover:bg-slate-50 border-transparent text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-sm text-white shadow-xs"
                      style={{ backgroundColor: stage.color }}
                    >
                      {stage.acronym}
                    </div>
                    <div>
                      <span className="font-display font-extrabold text-sm sm:text-base text-[#0A192F] block">
                        {stage.name}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500 block">
                        {stage.horizon}
                      </span>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#1D4ED8] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Showcase Card */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-2xl text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Visual & Badge */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-64 sm:h-80 group">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span
                      className="px-2.5 py-1 rounded-md font-mono text-[10px] uppercase font-bold tracking-wider inline-block mb-1.5 shadow-md"
                      style={{ backgroundColor: current.color }}
                    >
                      {current.acronym} // {current.status}
                    </span>
                    <span className="font-display font-bold text-sm block drop-shadow-md">
                      {current.benchmark}
                    </span>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Stage Definition:
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0A192F]">
                      {current.name} ({current.acronym})
                    </h3>
                    <p className="font-mono text-xs text-[#1D4ED8] font-semibold mt-1">
                      {current.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {current.desc}
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="font-mono text-[11px] font-bold text-slate-700 uppercase block">
                      Core Characteristics:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {current.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#1D4ED8]" />
                          <span className="text-xs text-slate-700 leading-tight">
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={onBookCall}
                      className="px-6 py-2.5 rounded-full bg-[#1D4ED8] hover:bg-blue-800 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore Production AI</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {onExploreCapabilities && (
                      <button
                        type="button"
                        onClick={onExploreCapabilities}
                        className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <span>Capabilities</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default IntelligenceEvolution;
