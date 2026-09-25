import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Database,
  Layers,
  Network,
  GitBranch,
  Shield,
  FileCheck2,
  Cpu,
  Search,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  RefreshCw,
  Server,
  Lock,
  Eye,
  KeyRound,
  Activity,
  ArrowUpRight,
  FileText,
  Workflow,
  HelpCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { PageRoute } from './Navbar';
import { MotionDotCanvas } from './MotionDotCanvas';

interface DataAndAIFoundationPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const DataAndAIFoundationPage: React.FC<DataAndAIFoundationPageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
  onNavigate,
}) => {
  // Active layer for the interactive Data Lineage Architecture Simulator
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);

  // Accordion FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const topologyLayers = [
    {
      layer: 'Layer 1',
      title: 'Enterprise Source Ingestion',
      category: 'Data Origin',
      desc: 'Controlled read connections across fragmented operational systems, relational databases, cloud object stores, and legacy ERPs without requiring full data centralization.',
      connectors: 'SAP · Oracle DB · Postgres · Salesforce · AWS S3 · Internal REST/gRPC',
      protocol: 'Read-Only Virtualized Connectors',
      badgeColor: '#0284C7',
    },
    {
      layer: 'Layer 2',
      title: 'Deterministic Schema & Field Normalization',
      category: 'Pipeline Processing',
      desc: 'Pydantic-enforced type validation, PII redaction filters, and semantic normalization that converts messy multi-format inputs into structured, predictable data structures.',
      connectors: 'Schema Registry · Ingestion Checks · Anomaly Filters',
      protocol: 'Strict Mathematical Validation Gates',
      badgeColor: '#1D4ED8',
    },
    {
      layer: 'Layer 3',
      title: 'Knowledge Indexing & Context Cache',
      category: 'Retrieval Engine',
      desc: 'Hierarchical chunking, hybrid dense-sparse vector indexing, and real-time freshness sync so AI models retrieve grounded, citation-backed answers in sub-seconds.',
      connectors: 'Qdrant · pgvector · BM25 Hybrid · Redis Context Cache',
      protocol: 'Sub-second Semantic Grounding',
      badgeColor: '#059669',
    },
    {
      layer: 'Layer 4',
      title: 'Least-Privilege Authorization & Audit',
      category: 'Governance & Security',
      desc: 'Cryptographic role-based access boundaries ensuring models only view records authorized for the querying user. Complete immutable logging of all retrieval events.',
      connectors: 'Role-Based ACL · Cryptographic Tokens · Private VPC Telemetry',
      protocol: 'Zero Ingestion Leaks · Ephemeral Buffering',
      badgeColor: '#DC2626',
    },
  ];

  const foundationServices = [
    {
      id: 'readiness',
      title: 'Data & AI Readiness Assessment',
      tag: 'Audit & Roadmapping',
      icon: Search,
      color: '#0284C7',
      desc: 'Identify the sources your proposed application needs. Review their availability, structure, update frequency, quality, and access restrictions to find the gaps that would affect delivery.',
      outputs: [
        'Enterprise source inventory & data topology',
        'Cross-system dependency and latency map',
        'Data hygiene & readiness gap assessment',
        'Prioritized implementation roadmap with milestone estimates',
      ],
      ctaText: 'Request Readiness Audit',
    },
    {
      id: 'integration',
      title: 'Enterprise System Integration',
      tag: 'Connectors & APIs',
      icon: Network,
      color: '#1D4ED8',
      desc: 'Connect the application to the databases, enterprise APIs, and operational systems involved in the workflow. Specify how information is retrieved, refreshed, and passed between components.',
      outputs: [
        'Hardened token and service account authentication',
        'Unified schema registry and data contracts',
        'Real-time streaming & batch synchronization',
        'Strict boundary separation between read-only and write access',
      ],
      ctaText: 'Design Integration Architecture',
    },
    {
      id: 'doc-prep',
      title: 'Document Preparation & Validation',
      tag: 'Structured Parsing',
      icon: FileCheck2,
      color: '#DC2626',
      desc: 'Prepare business documents for extraction and downstream use. Define the fields the application needs, normalize incoming information, and check records against agreed rules before further processing.',
      outputs: [
        'Automated matching of manifests to shipment records',
        'Cross-referencing extracted invoice fields against transactions',
        'Deterministic validation rules and checksum calculators',
        'Flagging anomalous or missing fields for human review',
      ],
      ctaText: 'Review Document Pipeline',
    },
    {
      id: 'retrieval',
      title: 'Knowledge Retrieval Foundations',
      tag: 'RAG & Vector Fabric',
      icon: Database,
      color: '#0284C7',
      desc: 'Organize approved content so an AI application can find relevant context. Design indexing and retrieval around the documents, metadata, permissions, and update requirements of the use case.',
      outputs: [
        'Searchable private knowledge collections with citation linking',
        'Automated document delta detection and refresh cadences',
        'Preservation of granular ACLs inside the vector index',
        'Retrieval evaluation suites testing precision and recall',
      ],
      ctaText: 'Configure Retrieval System',
    },
    {
      id: 'access-governance',
      title: 'Access, Ownership & Data Handling',
      tag: 'Zero-Trust Controls',
      icon: Shield,
      color: '#1D4ED8',
      desc: 'Define who owns each source and which people or application components can use it. Establish handling requirements for sensitive fields and clarify what should be retained, logged, or removed.',
      outputs: [
        'Least-privilege permission matrix across services and users',
        'Automated PII masking and redaction at ingestion time',
        'Explicit data retention, ephemeral memory, and backup rules',
        'Full tamper-evident audit trails for regulatory compliance',
      ],
      ctaText: 'Review Security Controls',
    },
    {
      id: 'observability',
      title: 'Private Infrastructure & Observability',
      tag: 'Telemetry & SRE',
      icon: Activity,
      color: '#059669',
      desc: 'Plan the supporting infrastructure around your AI workload. Make information flows and processing failures visible so the people operating the system can investigate issues and maintain it.',
      outputs: [
        'Continuous data freshness monitoring and stale-index alerts',
        'Pipeline failure detection with automated fallback mechanisms',
        'Retrieval quality and precision telemetry tracking',
        'Hardware resource consumption and compute cost dashboards',
      ],
      ctaText: 'Inspect SRE Observability',
    },
  ];

  const useCaseMatrix = [
    {
      title: 'For a Knowledge Assistant',
      badge: 'Conversational Context',
      icon: Sparkles,
      color: '#1D4ED8',
      desc: 'Prepare current documents, preserve permissions, and retain source references. Test whether retrieval returns the information needed to answer representative questions.',
      highlights: [
        'Hierarchical document chunking retaining table structure',
        'Preservation of user-specific read permissions at retrieval',
        'Direct citation URLs linking responses to exact source pages',
      ],
    },
    {
      title: 'For Document Automation',
      badge: 'High-Volume Extraction',
      icon: FileText,
      color: '#DC2626',
      desc: 'Define schemas, validation rules, and exception handling. Keep enough context for reviewers to compare an extracted value with its source.',
      highlights: [
        'Deterministic validation rules comparing values against ledgers',
        'Side-by-side visual diff bounding boxes for human reviewers',
        'Automated staging queues for ambiguous or incomplete records',
      ],
    },
    {
      title: 'For an Agent Workflow',
      badge: 'Autonomous Systems',
      icon: Workflow,
      color: '#0284C7',
      desc: 'Provide controlled system connections and explicit action permissions. Identify which operations need approval and how failed updates should be handled.',
      highlights: [
        'Hardened API tool specifications with read-only defaults',
        'Transactional rollback gates for multi-step ERP modifications',
        'Circuit breakers that isolate failures without halting the business',
      ],
    },
  ];

  const buildSteps = [
    {
      step: '01',
      title: 'Map the workflow and sources',
      desc: 'Establish what information is needed and where it comes from.',
      deliverable: 'Source Architecture & Field Dependency Graph',
    },
    {
      step: '02',
      title: 'Agree on the architecture',
      desc: 'Define integration, retrieval, access, and retention requirements.',
      deliverable: 'System Blueprint & Security Specification',
    },
    {
      step: '03',
      title: 'Build a focused foundation',
      desc: 'Implement the connections and preparation steps for the first use case.',
      deliverable: 'Tested Ingestion & Retrieval Pipeline',
    },
    {
      step: '04',
      title: 'Validate and hand over',
      desc: 'Check correctness, permissions, refresh behavior, and operational responsibilities.',
      deliverable: 'SRE Handover & Maintenance Playbook',
    },
  ];

  const readinessChecks = [
    {
      q: 'Is the information current enough for this task?',
      desc: 'Verify that update frequencies match workflow needs, whether real-time streams or scheduled batch syncs.',
      icon: RefreshCw,
      color: '#1D4ED8',
    },
    {
      q: 'Can the application access only the sources it needs?',
      desc: 'Enforce strict least-privilege scoping so agents cannot read sensitive payroll or non-relevant departmental tables.',
      icon: Lock,
      color: '#0284C7',
    },
    {
      q: 'Are missing or inconsistent records detected?',
      desc: 'Automated schema validation catches anomalies, missing keys, and malformed types before feeding them into models.',
      icon: FileCheck2,
      color: '#DC2626',
    },
    {
      q: 'Can a reviewer trace an output back to its source?',
      desc: 'Every extracted field or generated summary preserves exact provenance and cryptographic hash back to the source file.',
      icon: Eye,
      color: '#059669',
    },
    {
      q: 'Who responds when a connection or update fails?',
      desc: 'Clear error escalations, retry policies, and operational runbooks prevent silent pipeline breaks.',
      icon: Activity,
      color: '#1D4ED8',
    },
  ];

  const faqs = [
    {
      question: 'Do we need to centralize all our data first?',
      answer:
        'Not necessarily. The application may use controlled connections to existing systems, prepared datasets, a retrieval index, or a combination. The architecture should follow the use case rather than demanding a multi-year data warehouse migration.',
    },
    {
      question: 'What makes information ready for AI?',
      answer:
        'It must be relevant to the task, accessible under the right permissions, and reliable enough for its intended use. Requirements differ between document retrieval, extraction, and predictive modeling.',
    },
    {
      question: 'Does private deployment automatically mean zero retention?',
      answer:
        'No. Retention depends on the behavior of the entire system, including models, application storage, logs, caches, and backups. Those requirements must be designed and verified explicitly.',
    },
    {
      question: 'Can this work support our existing AI project?',
      answer:
        'The foundation can be scoped around an existing application. An initial assessment identifies which sources, integrations, or controls need attention before further rollout.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-24 overflow-hidden">
      {/* Interactive Motion Dot Canvas Background covering the entire page */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <MotionDotCanvas
          dotCount={75}
          deflectionRadius={150}
          dotColor="rgba(2, 132, 199, "
          lineColor="rgba(56, 189, 248, "
        />
      </div>

      {/* Ambient gradient orbs for high-end aesthetic depth */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-20 right-10 w-[30rem] h-[30rem] bg-blue-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Breadcrumb & Quick Navigation Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-4 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-slate-500">
            <button
              onClick={onBackToHome}
              className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-300">/</span>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
            >
              Services
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-[#0284C7] font-extrabold">Data & AI Foundation</span>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1D4ED8] hover:text-[#0A192F] transition-colors cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-full bg-blue-50 group-hover:bg-[#1D4ED8] text-[#1D4ED8] group-hover:text-white border border-blue-200 flex items-center justify-center transition-all">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>All Services</span>
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#0284C7] font-mono text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
                <Database className="w-3.5 h-3.5" />
                <span>Enterprise Data & AI Foundations</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] leading-[1.05] mb-6">
                Give your AI a dependable <span className="text-[#0284C7]">data foundation</span>.
              </h1>

              <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-4">
                Your AI applications need the right information, in a usable form, with clear rules for access. NAIR.AI helps prepare the connections, datasets, and retrieval systems that enterprise AI workflows depend on.
              </p>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 backdrop-blur-sm mb-8 text-xs sm:text-sm text-slate-700 font-medium flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
                <span>Build around your existing systems and the requirements of your private environment.</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onBookCall('Data & AI Foundation Project')}
                  className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/25 hover:scale-102 flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Discuss your data foundation</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <a
                  href="#foundation-services"
                  className="px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <span>Explore foundation services</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Live Interactive Data Lineage Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-7 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-500" />
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <div className="w-3 h-3 rounded-full bg-indigo-500" />
                  <span className="font-mono text-xs font-bold text-slate-500 ml-2">
                    DATA TOPOLOGY
                  </span>
                </div>
                <span className="font-mono text-[11px] text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded-md">
                  VPC ISOLATED
                </span>
              </div>

              {/* Layer Selector Tabs */}
              <div className="grid grid-cols-4 gap-1.5 mb-5 p-1 bg-slate-100 rounded-xl">
                {topologyLayers.map((layer, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveLayerIndex(idx)}
                    className={`py-2 text-center rounded-lg font-mono text-xs font-extrabold transition-all cursor-pointer ${
                      activeLayerIndex === idx
                        ? 'bg-white text-[#0284C7] shadow-xs'
                        : 'text-slate-500 hover:text-[#0A192F]'
                    }`}
                  >
                    L{idx + 1}
                  </button>
                ))}
              </div>

              {/* Active Layer Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLayerIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-0.5 rounded-md font-mono text-[11px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${topologyLayers[activeLayerIndex].badgeColor}15`,
                        color: topologyLayers[activeLayerIndex].badgeColor,
                      }}
                    >
                      {topologyLayers[activeLayerIndex].category}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded-sm">
                      {topologyLayers[activeLayerIndex].layer}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-[#0A192F]">
                    {topologyLayers[activeLayerIndex].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {topologyLayers[activeLayerIndex].desc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs font-mono">
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Integrations:</span>
                      <span className="text-[#0A192F] font-bold text-right">
                        {topologyLayers[activeLayerIndex].connectors}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500 pt-1 border-t border-slate-200/60">
                      <span>Gate Protocol:</span>
                      <span className="text-sky-600 font-bold">
                        {topologyLayers[activeLayerIndex].protocol}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Deterministic Lineage</span>
                    <button
                      onClick={() => onBookCall(`Data Layer: ${topologyLayers[activeLayerIndex].title}`)}
                      className="font-bold text-[#0284C7] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Architect this layer</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION: "Before an agent can act, it needs context" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0A192F] via-[#0E2A47] to-[#12385F] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent_50%)]" />

          <div className="relative z-10 max-w-4xl text-left space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              Context & Retrieval Architecture
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Before an agent can act, it needs context.
            </h2>

            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed">
              A document may be stored in one system, its matching transaction in another, and the rules for checking it in a separate knowledge base. An AI application needs a reliable way to bring that context together.
            </p>

            <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
              We help define how information reaches the application, how it is validated, and which users or agents are allowed to access it. The starting point is the workflow you want to support.
            </p>

            {/* 3 Pillars of Dependable Enterprise Context */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0284C7] flex items-center justify-center text-white font-mono font-extrabold text-xs">
                  01
                </div>
                <h4 className="font-display font-bold text-base text-white">Reach & Routing</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Bridge relational tables, PDFs, object storage, and SaaS without disruptive migration.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white font-mono font-extrabold text-xs">
                  02
                </div>
                <h4 className="font-display font-bold text-base text-white">Validation Gates</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Enforce deterministic typing, checksum verification, and immediate anomaly flagging.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#38BDF8] flex items-center justify-center text-[#0A192F] font-mono font-extrabold text-xs">
                  03
                </div>
                <h4 className="font-display font-bold text-base text-white">Governed Boundaries</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Grant agents exact read/write permissions matching user roles and audit requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATION SERVICES (6 Core Services) */}
      <section id="foundation-services" className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="text-left mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-3 block">
            Data Engineering & Governance
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-4">
            Foundation Services.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            The infrastructure, schema validation, and access layers that make private enterprise AI viable, reliable, and compliant.
          </p>
        </div>

        {/* 6 High-Fidelity Foundation Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {foundationServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group text-left relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className="px-2.5 py-0.5 rounded-md font-mono text-[10px] uppercase font-bold tracking-wider"
                      style={{ backgroundColor: `${service.color}15`, color: service.color }}
                    >
                      {service.tag}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 font-bold">
                      Infrastructure Tier
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" style={{ color: service.color }} />
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#0A192F] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="font-mono text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Scope & Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.outputs.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2
                            className="w-3.5 h-3.5 shrink-0 mt-0.5"
                            style={{ color: service.color }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <button
                    type="button"
                    onClick={() => onBookCall(`Data Foundation Service: ${service.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-extrabold transition-all flex items-center justify-between text-white cursor-pointer hover:opacity-95"
                    style={{ backgroundColor: service.color }}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: "Design around the use case" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="text-left mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3 block">
            Workload Alignment
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-4">
            Design around the use case.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Data requirements change fundamentally depending on the workload. We architect specific retrieval and validation behaviors tuned to your application profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {useCaseMatrix.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all text-left space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white shadow-xs"
                      style={{ backgroundColor: item.color }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span
                      className="px-2.5 py-0.5 rounded-md font-mono text-[10px] uppercase font-bold tracking-wider"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-[#0A192F] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {item.desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2 text-xs font-mono text-slate-700">
                  <span className="font-bold text-[#0A192F] block">Foundation Directives:</span>
                  <ul className="space-y-1">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5 text-slate-600">
                        <span className="text-[#0284C7] font-bold">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: "How we build the foundation" (4 Steps) */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl text-left">
          <div className="mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-3 block">
              Execution Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F] mb-3">
              How we build the foundation.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
              We implement foundational pipelines in focused, production-verified increments rather than open-ended consulting cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {buildSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4 relative group hover:bg-sky-50/50 hover:border-sky-300 transition-all"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#0284C7] block mb-2">
                    Phase {step.step}
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-[#0A192F] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60">
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-500 block">
                    Deliverable:
                  </span>
                  <span className="font-mono text-xs font-bold text-[#0A192F]">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: "Know what is ready—and what needs attention" (5 Essential Checks) */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="text-left mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-3 block">
            Quality Assurance Radar
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-4">
            Know what is ready—and what needs attention.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            A useful foundation makes it easier to answer practical questions that govern acceptance criteria and ongoing operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {readinessChecks.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all text-left space-y-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-xs"
                  style={{ backgroundColor: item.color }}
                >
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="font-display font-extrabold text-base text-[#0A192F]">
                  {item.q}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Validation Metric Defined</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMPANION CROSS-LINK: "Turn prepared information into working applications" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-900 via-[#0284C7] to-blue-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Downstream Applications</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
              Turn prepared information into working applications.
            </h2>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed font-normal">
              Once the foundation is in place, explore our Artificial Intelligence services for knowledge assistants, document processing, and agent workflows.
            </p>
          </div>

          <div className="shrink-0 relative z-10">
            <button
              type="button"
              onClick={() => onNavigate('artificial-intelligence')}
              className="px-7 py-3.5 bg-white text-[#0284C7] hover:bg-slate-100 font-mono text-xs uppercase tracking-wider font-extrabold rounded-full transition-all shadow-lg flex items-center gap-2 cursor-pointer group"
            >
              <span>Explore Artificial Intelligence Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 mb-28 text-left">
        <div className="text-center mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-2 block">
            Clear Answers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#0A192F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-100 text-[#0284C7]' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING CTA SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE] to-[#F1F5F9] border border-sky-200/90 text-[#0A192F] text-center shadow-xl relative overflow-hidden">
          <MotionDotCanvas dotCount={40} deflectionRadius={120} />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284C7] block">
              Architectural Scoping
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F]">
              Prepare the information your next AI project needs.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Share the workflow you want to build and the systems it depends on. We can help identify the foundation it will require.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onBookCall('Data Foundation Discussion')}
                className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/30 hover:scale-102 flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss your data foundation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={onOpenAssessment}
                className="px-7 py-3.5 bg-white hover:bg-slate-50 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all shadow-xs cursor-pointer"
              >
                <span>Take Feasibility Diagnostic</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAndAIFoundationPage;
