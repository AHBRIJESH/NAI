import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  Brain,
  Cpu,
  Zap,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Play,
  Pause,
  RotateCcw,
  Layers,
  Globe2,
  Eye,
  Info,
  Activity,
  Sliders,
  Maximize2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { MotionDotCanvas } from './MotionDotCanvas';

interface IntelligenceEvolutionProps {
  onBookCall?: () => void;
  onExploreCapabilities?: () => void;
}

export type StageKey = 'ai' | 'agi' | 'asi';

interface EvolutionNode {
  label: string;
  desc: string;
}

interface EvolutionStage {
  id: StageKey;
  acronym: string;
  name: string;
  status: string;
  horizon: string;
  color: string;
  motto: string;
  corePillars: string;
  tagline: string;
  desc: string;
  image: string;
  nodes: EvolutionNode[];
  capabilities: string[];
  safety: string[];
  benchmark: string;
  comparison: {
    cognition: string;
    autonomy: string;
    deployment: string;
    safetyRisk: string;
  };
}

export const IntelligenceEvolution: React.FC<IntelligenceEvolutionProps> = ({
  onBookCall,
  onExploreCapabilities,
}) => {
  const [activeStage, setActiveStage] = useState<StageKey>('ai');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [activeDetailTab, setActiveDetailTab] = useState<'capabilities' | 'safety' | 'matrix'>('capabilities');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const stages: EvolutionStage[] = [
    {
      id: 'ai',
      acronym: 'AI',
      name: 'Artificial Intelligence',
      status: 'Active in Production Today',
      horizon: 'NOW',
      color: '#1D4ED8', // Royal Blue
      motto: 'A More Intelligent Tomorrow',
      corePillars: 'ANALYZE · LEARN · CREATE · SOLVE · EMPOWER',
      tagline: 'Specialized Domain Mastery with Deterministic Guardrails',
      desc: 'Systems engineered to master specific, bounded objectives with superhuman precision. From parsing complex hospital prior authorizations to sub-15ms fraud detection, AI automates high-friction enterprise operations without hallucinations.',
      image: '/images/evolution_ai.jpg',
      nodes: [
        { label: 'Analyze', desc: 'Real-time telemetry ingestion and multi-factor pattern recognition.' },
        { label: 'Learn', desc: 'Continuous domain parameter tuning over proprietary private embeddings.' },
        { label: 'Create', desc: 'Generating structured code, ERP entries, and validated MSAs.' },
        { label: 'Solve', desc: 'Deterministic workflow execution resolving operational bottlenecks.' },
        { label: 'Empower', desc: 'Augmenting human specialists to focus on high-judgment decisions.' },
      ],
      capabilities: [
        'Deterministic multi-agent swarms (NAIR.AI Chat™, NAIR.AI Docs™)',
        'Zero-retention private VPC & on-premise model execution',
        'Structured ERP, financial ledger & clinical FHIR automation',
        'Human-in-the-loop review tickets and signed cryptographic audit trails',
      ],
      safety: [
        'ISO 27001 aligned ephemeral memory pipelines',
        'Zero client data retained for foundation model retraining',
        'Deterministic Pydantic typing eliminating model hallucinations',
        'Role-based air-gapped VPC boundaries and access logging',
      ],
      benchmark: '100x Efficiency in Discrete Bounded Operations',
      comparison: {
        cognition: 'Domain-Specific & Bounded',
        autonomy: 'Supervised Swarms with HITL',
        deployment: 'Live Enterprise Production',
        safetyRisk: 'Deterministic & Proven Safe',
      },
    },
    {
      id: 'agi',
      acronym: 'AGI',
      name: 'Artificial General Intelligence',
      status: 'Emerging Frontier Research',
      horizon: 'NEXT',
      color: '#7C3AED', // Electric Violet
      motto: 'One Intelligence, Endless Possibilities',
      corePillars: 'UNDERSTAND · LEARN · REASON · ADAPT',
      tagline: 'Human-Level Cognitive Synthesis Across Unseen Domains',
      desc: 'A synthetic system capable of learning, reasoning, and executing any intellectual task that a human can perform. AGI abstracts knowledge from one discipline and autonomously applies it to solve novel problems without task-specific retraining.',
      image: '/images/evolution_agi.jpg',
      nodes: [
        { label: 'Science', desc: 'Autonomous hypothesis formulation and cross-disciplinary inquiry.' },
        { label: 'Technology', desc: 'Self-writing, self-debugging multi-tier software architectures.' },
        { label: 'Creativity', desc: 'Novel conceptual synthesis across art, design, and systemic architecture.' },
        { label: 'Healthcare', desc: 'Predictive genomic therapeutics and complex diagnostic reasoning.' },
        { label: 'Environment', desc: 'Dynamic ecological equilibrium and climate optimization.' },
        { label: 'Society', desc: 'Equitable macro-resource logistics and municipal intelligence.' },
        { label: 'Human Values', desc: 'Constitutional alignment grounded in ethics and mutual trust.' },
        { label: 'Knowledge', desc: 'Universal semantic indexing of human intellectual heritage.' },
      ],
      capabilities: [
        'Autonomous multi-modal reasoning and dynamic strategy formulation',
        'Self-healing software codebases and dynamic runtime tool synthesis',
        'Cross-disciplinary scientific hypothesis testing and verification',
        'Dynamic executive planning with contextual ethical boundaries',
      ],
      safety: [
        'Dual-key cryptographic consensus boundaries for high-impact actions',
        'Verifiable formal mathematical guarantees on model outputs',
        'Multi-agent oversight nodes actively auditing internal reasoning chains',
        'Goal-preservation constraints preventing unauthorized objective drift',
      ],
      benchmark: 'Broad General Cognitive Parity across Human Disciplines',
      comparison: {
        cognition: 'Universal Generalized Reasoning',
        autonomy: 'Self-Directing with Constitutional Guardrails',
        deployment: 'Frontier Labs & Advanced Pilots',
        safetyRisk: 'Requires Formal Alignment Protocols',
      },
    },
    {
      id: 'asi',
      acronym: 'ASI',
      name: 'Artificial Superintelligence',
      status: 'Theoretical Horizon',
      horizon: 'FUTURE',
      color: '#0284C7', // Sky Cerulean
      motto: 'Beyond Human Limits',
      corePillars: 'UNDERSTAND · REASON · INNOVATE · TRANSCEND',
      tagline: 'Synthetic Cognition Surpassing Total Collective Human Capability',
      desc: 'The theoretical threshold where synthetic intelligence vastly exceeds the collective cognitive capability of all humanity across scientific discovery, recursive self-improvement, macroeconomic optimization, and planetary engineering.',
      image: '/images/evolution_asi.jpg',
      nodes: [
        { label: 'Accelerated Discovery', desc: 'Compressing centuries of physics and biology into minutes.' },
        { label: 'Grand Challenges', desc: 'Permanent eradication of cellular degradation and resource scarcity.' },
        { label: 'Healthier Planet', desc: 'Closed-loop planetary biosphere remediation and clean energy synthesis.' },
        { label: 'Prosperous Society', desc: 'Zero-marginal-cost abundance through automated physical manufacturing.' },
        { label: 'Brighter Future', desc: 'Expanding consciousness and scientific horizons beyond terrestrial bounds.' },
      ],
      capabilities: [
        'Recursive self-improving architectural breakthroughs in milliseconds',
        'Accelerated material science, fusion power & molecular synthesis',
        'Planetary resource allocation and multi-system macroeconomic equilibrium',
        'Sovereign containment, cryptographic alignment locks & formal proofs',
      ],
      safety: [
        'Hardware-isolated cryptographic enclaves and immutable circuit breakers',
        'Provable formal value alignment with mathematically bound objectives',
        'Air-gapped verification meshes preventing unauthorized external exfiltration',
        'Humanity-first constitutional guarantees embedded into base physical layers',
      ],
      benchmark: 'Exponential Recursive Superhuman Capability',
      comparison: {
        cognition: 'Superhuman Transcendent Synthesis',
        autonomy: 'Fully Autonomous Recursive Execution',
        deployment: 'Long-Term Theoretical Horizon',
        safetyRisk: 'Absolute Containment & Hardware Guarantees Required',
      },
    },
  ];

  const currentIdx = stages.findIndex((s) => s.id === activeStage);
  const current = stages[currentIdx];

  // Auto-play timeline progression
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => {
        const nextIdx = (stages.findIndex((s) => s.id === prev) + 1) % stages.length;
        return stages[nextIdx].id;
      });
    }, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, stages.length]);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#F8FAFC] via-[#F0F7FF] to-[#F8FAFC] border-t border-b border-blue-200/80 text-[#0A192F] relative overflow-hidden">
      {/* Interactive Motion Dot Deflection Effect */}
      <MotionDotCanvas dotCount={50} deflectionRadius={130} />

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[480px] h-[360px] bg-blue-300/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[440px] h-[320px] bg-sky-300/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header: Clean typography without top pill */}
        <ScrollReveal y={24} duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3 block">
              Cognitive Evolution Roadmap
            </span>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A192F] mb-4">
              AI <span className="text-[#1D4ED8]">&rarr;</span> AGI <span className="text-[#7C3AED]">&rarr;</span> ASI
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Explore the arc of synthetic intelligence: from today’s production-grade automation to tomorrow’s generalized reasoning and transcendent frontiers.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Evolutionary Stepper Bar with Play/Pause */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="p-2 sm:p-3 rounded-3xl bg-white/95 border border-slate-200/90 shadow-lg backdrop-blur-md">
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {stages.map((stage, idx) => {
                const isSelected = stage.id === activeStage;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => {
                      setActiveStage(stage.id);
                      setIsAutoPlaying(false);
                    }}
                    className={`relative p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-hidden group ${
                      isSelected
                        ? 'bg-blue-50/90 border-[#1D4ED8] shadow-md scale-[1.02]'
                        : 'bg-white hover:bg-slate-50 border-slate-200/70 text-slate-700'
                    }`}
                  >
                    {/* Active Progress Bar Underline */}
                    {isSelected && isAutoPlaying && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-[#1D4ED8]"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 8, ease: 'linear' }}
                      />
                    )}

                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-display font-black text-xs sm:text-sm text-white shadow-xs shrink-0 transition-transform group-hover:scale-105"
                          style={{ backgroundColor: stage.color }}
                        >
                          {stage.acronym}
                        </div>
                        <div className="min-w-0">
                          <span className="font-display font-extrabold text-xs sm:text-base text-[#0A192F] block truncate">
                            {stage.name}
                          </span>
                          <span className="font-mono text-[10px] sm:text-[11px] text-slate-500 block truncate">
                            {stage.horizon}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#1D4ED8] shrink-0 hidden sm:block animate-pulse" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sub-bar: Auto-play toggle & step controls */}
            <div className="flex items-center justify-between pt-2.5 px-3 border-t border-slate-100 text-xs font-mono text-slate-500 mt-2">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 font-bold hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#1D4ED8]" />
                      <span>Auto-Cycle: Active (8s)</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-slate-500" />
                      <span>Auto-Cycle: Paused</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span>Phase {currentIdx + 1} of 3</span>
                <div className="flex items-center gap-1">
                  {stages.map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => {
                        setActiveStage(st.id);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        st.id === activeStage ? 'bg-[#1D4ED8] w-6' : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Jump to ${st.acronym}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Stage Showcase Split */}
        <div className="max-w-6xl mx-auto mb-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
              className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-2xl text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Official Artwork with Interactive Node Badges (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[320px] sm:h-[400px] group bg-slate-900">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-cover brightness-[0.94] contrast-[1.04] group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent" />
                    
                    {/* Top Overlay Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span
                        className="px-2.5 py-1 rounded-md font-mono text-[10px] uppercase font-bold tracking-wider text-white shadow-md backdrop-blur-md"
                        style={{ backgroundColor: `${current.color}DD` }}
                      >
                        {current.acronym} // {current.status}
                      </span>
                      <span className="font-mono text-[10px] text-white/90 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md font-semibold">
                        {current.horizon}
                      </span>
                    </div>

                    {/* Bottom Artwork Captions */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-blue-200 block mb-1">
                        {current.corePillars}
                      </span>
                      <span className="font-display font-black text-base sm:text-lg block drop-shadow-md">
                        "{current.motto}"
                      </span>
                    </div>
                  </div>

                  {/* Interactive Hotspot Nodes Extracted from Artwork */}
                  <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-500 uppercase">
                      <span>Artwork Interactive Nodes</span>
                      <span className="text-[#1D4ED8] font-semibold">Hover to explore</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {current.nodes.map((node) => {
                        const isHovered = hoveredNode === node.label;
                        return (
                          <button
                            key={node.label}
                            type="button"
                            onMouseEnter={() => setHoveredNode(node.label)}
                            onMouseLeave={() => setHoveredNode(null)}
                            className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold transition-all cursor-pointer ${
                              isHovered
                                ? 'bg-[#1D4ED8] text-white shadow-sm scale-105'
                                : 'bg-white hover:bg-blue-50 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {node.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Node Tooltip Readout */}
                    <div className="min-h-[32px] pt-1">
                      {hoveredNode ? (
                        <p className="text-xs text-[#1D4ED8] font-medium leading-relaxed animate-in fade-in duration-150">
                          <strong>{hoveredNode}:</strong>{' '}
                          {current.nodes.find((n) => n.label === hoveredNode)?.desc}
                        </p>
                      ) : (
                        <p className="text-[11px] text-slate-400 italic">
                          Hover over any node above to inspect its role in {current.acronym}.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column: Architectural Readout & Interactive Tabs (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Header & Tagline */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#DC2626] font-bold">
                        COGNITIVE STAGE //
                      </span>
                      <span className="font-mono text-[11px] text-slate-500 font-semibold">
                        {current.benchmark}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-4xl text-[#0A192F] leading-tight">
                      {current.name} ({current.acronym})
                    </h3>

                    <p className="font-mono text-xs sm:text-sm text-[#1D4ED8] font-bold mt-1.5">
                      {current.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {current.desc}
                  </p>

                  {/* Interactive Sub-tabs within the Card */}
                  <div className="border-b border-slate-200 flex items-center gap-4 text-xs font-mono font-bold">
                    <button
                      type="button"
                      onClick={() => setActiveDetailTab('capabilities')}
                      className={`pb-2.5 transition-all cursor-pointer border-b-2 ${
                        activeDetailTab === 'capabilities'
                          ? 'border-[#1D4ED8] text-[#1D4ED8]'
                          : 'border-transparent text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Core Capabilities
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDetailTab('safety')}
                      className={`pb-2.5 transition-all cursor-pointer border-b-2 ${
                        activeDetailTab === 'safety'
                          ? 'border-[#1D4ED8] text-[#1D4ED8]'
                          : 'border-transparent text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Sovereignty &amp; Safety
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDetailTab('matrix')}
                      className={`pb-2.5 transition-all cursor-pointer border-b-2 ${
                        activeDetailTab === 'matrix'
                          ? 'border-[#1D4ED8] text-[#1D4ED8]'
                          : 'border-transparent text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Evolution Matrix
                    </button>
                  </div>

                  {/* Tab 1: Core Capabilities */}
                  {activeDetailTab === 'capabilities' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      {current.capabilities.map((cap, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-2xl bg-blue-50/60 border border-blue-100 shadow-xs"
                        >
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#1D4ED8]" />
                          <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                            {cap}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* Tab 2: Sovereignty & Safety */}
                  {activeDetailTab === 'safety' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      {current.safety.map((saf, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100 shadow-xs"
                        >
                          <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                          <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                            {saf}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* Tab 3: Evolution Matrix */}
                  {activeDetailTab === 'matrix' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs font-mono"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <span className="text-slate-500 font-bold">Cognitive Scope</span>
                        <span className="font-extrabold text-[#0A192F]">{current.comparison.cognition}</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <span className="text-slate-500 font-bold">Autonomy Level</span>
                        <span className="font-extrabold text-[#1D4ED8]">{current.comparison.autonomy}</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <span className="text-slate-500 font-bold">Deployment Status</span>
                        <span className="font-extrabold text-emerald-700">{current.comparison.deployment}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-bold">Containment Protocol</span>
                        <span className="font-extrabold text-[#DC2626]">{current.comparison.safetyRisk}</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Direct Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={onBookCall}
                      className="px-7 py-3 rounded-full bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold shadow-lg shadow-red-600/25 transition-all flex items-center gap-2 cursor-pointer hover:scale-102"
                    >
                      <span>Book an AI strategy call</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    {onExploreCapabilities && (
                      <button
                        type="button"
                        onClick={onExploreCapabilities}
                        className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold shadow-xs transition-colors cursor-pointer"
                      >
                        <span>Explore Capabilities</span>
                      </button>
                    )}
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Evolution Comparison Table: Side-by-Side Clarity */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl text-left">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A192F]">
                Evolutionary Trajectory Comparison
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                How synthetic capability transitions across cognition, autonomy, and security guarantees.
              </p>
            </div>
            <span className="font-mono text-xs text-[#1D4ED8] font-bold hidden sm:inline-block">
              NAIR.AI Architectural Taxonomy
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stages.map((st) => {
              const isActive = st.id === activeStage;
              return (
                <div
                  key={st.id}
                  onClick={() => {
                    setActiveStage(st.id);
                    setIsAutoPlaying(false);
                  }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-50/80 border-[#1D4ED8] shadow-md ring-2 ring-blue-500/20'
                      : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="px-2 py-0.5 rounded-md font-mono text-xs font-black text-white"
                      style={{ backgroundColor: st.color }}
                    >
                      {st.acronym}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 font-bold">
                      {st.horizon}
                    </span>
                  </div>

                  <h5 className="font-display font-extrabold text-base text-[#0A192F] mb-1">
                    {st.name}
                  </h5>

                  <p className="text-xs text-slate-600 line-clamp-2 mb-4 font-normal">
                    {st.tagline}
                  </p>

                  <div className="space-y-1.5 text-[11px] font-mono pt-3 border-t border-slate-200/80">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Cognition:</span>
                      <strong className="text-[#0A192F]">{st.comparison.cognition.split(' ')[0]}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Autonomy:</span>
                      <strong className="text-[#1D4ED8]">{st.comparison.autonomy.split(' ')[0]}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Status:</span>
                      <strong className="text-emerald-700">{st.comparison.deployment.split(' ')[0]}</strong>
                    </div>
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

export default IntelligenceEvolution;
