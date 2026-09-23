import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  FileText,
  BarChart3,
  Shield,
  GraduationCap,
  Sparkles,
  Cpu,
  Brain,
  Workflow,
  Eye,
  MessageSquare,
  Cloud,
  CheckCircle2,
  Sliders,
  ChevronRight,
  ChevronLeft,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import type { PageRoute } from './Navbar';

interface ServicesPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'services' | 'products' | 'process'>('all');
  const productScrollRef = useRef<HTMLDivElement>(null);

  const handleProductScroll = (direction: 'left' | 'right') => {
    if (productScrollRef.current) {
      productScrollRef.current.scrollBy({
        left: direction === 'left' ? -380 : 380,
        behavior: 'smooth',
      });
    }
  };

  const servicesList = [
    {
      title: 'AI Consulting',
      desc: 'Expert guidance to help you identify, prioritize, and execute AI initiatives that align with your business goals and deliver measurable ROI.',
      tag: 'Strategic',
      icon: Brain,
    },
    {
      title: 'AI Readiness Analysis',
      desc: 'A comprehensive assessment of your data, infrastructure, and processes to determine where AI can have the greatest impact — and what it takes to get there.',
      tag: 'Audit',
      icon: BarChart3,
    },
    {
      title: 'Agentic AI',
      desc: 'Autonomous AI agents that plan, reason, and act across multi-step tasks — handling complex workflows end-to-end with minimal human intervention.',
      tag: 'Autonomous',
      icon: Bot,
    },
    {
      title: 'Custom AI Development',
      desc: 'Purpose-built AI solutions engineered around your unique data, processes, and business requirements — fully integrated into your existing systems.',
      tag: 'Engineering',
      icon: Cpu,
    },
    {
      title: 'Generative AI Solutions',
      desc: 'Harness the power of large language models to generate content, summarize documents, draft communications, and create new value across your operations.',
      tag: 'LLMs',
      icon: Sparkles,
    },
    {
      title: 'Machine Learning Models',
      desc: 'Custom ML models trained on your data to classify, predict, and optimize — delivering intelligence that improves continuously as your business grows.',
      tag: 'Predictive',
      icon: Zap,
    },
    {
      title: 'Intelligent Automation',
      desc: 'AI-powered automation that goes beyond simple rules — handling exceptions, learning from patterns, and adapting to changing conditions across your workflows.',
      tag: 'Automation',
      icon: Workflow,
    },
    {
      title: 'AI Chatbots & Virtual Assistants',
      desc: 'Conversational AI that engages customers, qualifies leads, answers questions, and handles support requests around the clock — without adding headcount.',
      tag: 'Support & Sales',
      icon: MessageSquare,
    },
    {
      title: 'Predictive Analytics',
      desc: 'Turn historical data into forward-looking intelligence — forecast demand, detect churn, identify risks, and make confident decisions before the moment passes.',
      tag: 'Intelligence',
      icon: BarChart3,
    },
    {
      title: 'Computer Vision Solutions',
      desc: 'AI systems that see and interpret visual data — enabling quality inspection, object detection, document scanning, and image-based automation at scale.',
      tag: 'Vision',
      icon: Eye,
    },
    {
      title: 'Natural Language Processing',
      desc: 'Extract meaning from text and speech — sentiment analysis, entity recognition, document classification, and language understanding built into your products.',
      tag: 'NLP',
      icon: FileText,
    },
    {
      title: 'Real-Time Insights',
      desc: 'Live dashboards and AI-powered monitoring that surface actionable intelligence as events unfold — so your team can respond faster and smarter.',
      tag: 'Real-Time',
      icon: BarChart3,
    },
    {
      title: 'Cloud Integration',
      desc: 'Seamless deployment of AI solutions across AWS, Azure, and Google Cloud — architected for scalability, security, and performance from day one.',
      tag: 'Infrastructure',
      icon: Cloud,
    },
    {
      title: 'Custom AI Models',
      desc: 'Fine-tuned and domain-specific AI models built on your proprietary data — delivering accuracy and relevance that general-purpose models simply cannot match.',
      tag: 'Sovereign',
      icon: Cpu,
    },
  ];

  const productsList = [
    {
      name: 'NAIR Chat™',
      badge: 'Conversational Runtime',
      desc: 'A reliable AI assistant for customer support and internal teams. It answers common questions, helps people find information, and keeps conversations moving while your team focuses on complex work.',
      features: [
        'Industry-specific conversations trained on approved knowledge',
        'Support for FAQs, appointment scheduling, and lead qualification',
        'Human handoff with conversation context preserved',
        'Healthcare, retail, and professional services calibration',
      ],
      icon: Bot,
      color: '#1D4ED8',
    },
    {
      name: 'NAIR Docs™',
      badge: 'Document Intelligence',
      desc: 'A smarter way to handle forms, contracts, invoices, and other business documents. NAIR Docs extracts key details, organizes files, and turns paperwork into structured, usable information.',
      features: [
        'Extracts structured data from forms, invoices, and contracts',
        'Validates information and flags discrepancies automatically',
        'Creates repeatable, audit-ready document workflows',
        'Native export to ERP, CRM, and accounting ledgers',
      ],
      icon: FileText,
      color: '#DC2626',
    },
    {
      name: 'NAIR Insight™',
      badge: 'Predictive Intelligence',
      desc: 'A clear view of what is happening across your business. It combines analytics and predictive AI to highlight trends, uncover operational risks, and support executive decisions.',
      features: [
        'Real-time anomaly and bottleneck detection across systems',
        'Predictive forecasting for demand, churn, and cash flow',
        'Unified cross-departmental intelligence dashboard',
        'Customizable automated executive anomaly alerts',
      ],
      icon: BarChart3,
      color: '#1D4ED8',
    },
    {
      name: 'NAIR Guard™',
      badge: 'Safety & Governance',
      desc: 'The safety layer for responsible AI adoption. It helps your organization manage access, monitor systems, and build governance practices that protect proprietary data and trust.',
      features: [
        'Zero-retention model enforcement and telemetry isolation',
        'Granular document-level and user-level cryptographic ACLs',
        'Hallucination filtering and deterministic schema validation',
        'Continuous compliance mapping for SOC 2, HIPAA, and GDPR',
      ],
      icon: Shield,
      color: '#DC2626',
    },
    {
      name: 'NAIR Learn™',
      badge: 'Enterprise Enablement',
      desc: 'Practical AI training for teams at every stage. It builds the skills, confidence, and working habits people need to use AI effectively, productively, and responsibly.',
      features: [
        'Hands-on prompt engineering and departmental workflows',
        'Custom interactive playbooks tailored to your company stack',
        'Role-specific modules for executives, engineers, and ops',
        'Continuous evaluation and team certification tracks',
      ],
      icon: GraduationCap,
      color: '#1D4ED8',
    },
  ];

  const readinessModules = [
    {
      title: 'Talent & Expertise',
      desc: 'Bring in the specialist knowledge your team needs to move faster. We provide AI talent and domain expertise to support planning, delivery, and knowledge transfer.',
    },
    {
      title: 'Ethical & Regulatory Readiness',
      desc: 'Create a practical foundation for safe AI use. We help map responsibilities, prepare compliance processes, and keep intelligent systems aligned with relevant standards.',
    },
    {
      title: 'Monitoring & Iteration',
      desc: 'Keep AI useful after launch. Ongoing monitoring catches performance changes and drift so models can be improved before small issues become business problems.',
    },
    {
      title: 'Risk Assessment',
      desc: 'Understand what could go wrong before and after deployment. We assess technical, operational, data, and reputational risks and turn findings into clear actions.',
    },
    {
      title: 'Model Development & Evaluation',
      desc: 'Build confidence before release. Models are tested against meaningful measures for accuracy, reliability, fairness, and real-world performance.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'We audit your operations and identify the highest-impact AI opportunities.',
    },
    {
      step: '02',
      title: 'Design',
      desc: 'We architect a solution tailored to your data, systems, and business goals.',
    },
    {
      step: '03',
      title: 'Build',
      desc: 'Our team develops, tests, and refines the AI solution with your feedback.',
    },
    {
      step: '04',
      title: 'Deploy',
      desc: 'We integrate, launch, and monitor — ensuring smooth adoption and real results.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-20">
      
      {/* Top Breadcrumb Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider font-extrabold text-[#1D4ED8] hover:text-[#0A192F] transition-colors group cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-[#1D4ED8] text-[#1D4ED8] group-hover:text-white border border-blue-200 flex items-center justify-center transition-all">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <span>Back to Home Overview</span>
        </button>
      </div>

      {/* Main Services Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full font-mono text-[11px] tracking-[0.26em] uppercase font-extrabold bg-blue-50 text-[#1D4ED8] border border-blue-200 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span>PRODUCTS AND SERVICES</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
            Practical AI for Everyday Business.{' '}
            <span className="text-[#1D4ED8]">Built to Scale.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            From focused tools to enterprise-wide multi-agent swarms, we help small and mid-size businesses serve customers, manage data, make smarter decisions, and adopt AI with deterministic precision.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            <button
              onClick={() => setActiveTab('all')}
              className={cn(
                'px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer',
                activeTab === 'all'
                  ? 'bg-[#1D4ED8] text-white shadow-md shadow-blue-500/25 scale-102 font-black'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              )}
            >
              All Capabilities (24)
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={cn(
                'px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer',
                activeTab === 'products'
                  ? 'bg-[#1D4ED8] text-white shadow-md shadow-blue-500/25 scale-102 font-black'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              )}
            >
              NAIR Products™ (5)
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={cn(
                'px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer',
                activeTab === 'services'
                  ? 'bg-[#1D4ED8] text-white shadow-md shadow-blue-500/25 scale-102 font-black'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              )}
            >
              Custom Services (14)
            </button>

            <button
              onClick={() => setActiveTab('process')}
              className={cn(
                'px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer',
                activeTab === 'process'
                  ? 'bg-[#1D4ED8] text-white shadow-md shadow-blue-500/25 scale-102 font-black'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              )}
            >
              How We Work (4-Step)
            </button>
          </div>
        </motion.div>
      </section>

      {/* Flagship NAIR Products Showcase */}
      {(activeTab === 'all' || activeTab === 'products') && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-3 border-b border-slate-200">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#DC2626] font-bold block mb-1">
                FOCUSED BUSINESS SUITE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                NAIR Products™ for Everyday Business
              </h2>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-slate-500 mr-2 hidden sm:inline-block">
                Swipe Products Horizontally
              </span>
              <button
                onClick={() => handleProductScroll('left')}
                className="w-10 h-10 rounded-full bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-xs cursor-pointer"
                aria-label="Scroll products left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleProductScroll('right')}
                className="w-10 h-10 rounded-full bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-xs cursor-pointer"
                aria-label="Scroll products right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={productScrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {productsList.map((product) => {
              const IconComp = product.icon;
              return (
                <div
                  key={product.name}
                  className="w-[310px] sm:w-[360px] shrink-0 snap-start rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#1D4ED8] transition-all flex flex-col justify-between text-left group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {product.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-[#0A192F] mb-3">
                      {product.name}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                      {product.desc}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onBookCall(`Product Briefing: ${product.name}`)}
                    className="w-full py-3 bg-slate-50 hover:bg-[#1D4ED8] text-slate-800 hover:text-white font-mono text-xs uppercase tracking-wider font-bold rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <span>Schedule {product.name} Demo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 14 Custom AI Services Grid */}
      {(activeTab === 'all' || activeTab === 'services') && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#1D4ED8] font-bold block mb-1">
                TAILORED ENGINEERING
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                Our 14 Core Services
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500 font-bold hidden sm:block">
              Custom Architectural Delivery
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {servicesList.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-sm hover:border-[#1D4ED8] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center">
                        <IconComp className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="font-mono text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {srv.tag}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-xl text-[#0A192F] mb-2.5">
                      {srv.title}
                    </h4>

                    <p className="text-slate-600 text-sm leading-relaxed font-normal mb-4">
                      {srv.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onBookCall(`Service Inquiry: ${srv.title}`)}
                    className="text-xs font-mono uppercase tracking-wider font-bold text-[#1D4ED8] hover:text-[#DC2626] transition-colors flex items-center gap-1 cursor-pointer pt-2"
                  >
                    <span>Consult on this service</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Readiness & Governance Framework */}
      {(activeTab === 'all' || activeTab === 'services') && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24 text-left">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#DC2626] font-bold block mb-2">
              FOUNDATIONAL GOVERNANCE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F]">
              AI Readiness &amp; Governance Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readinessModules.map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-white border border-slate-200 p-7 shadow-xs">
                <span className="font-mono text-xs uppercase font-extrabold text-[#1D4ED8] block mb-2">
                  MODULE 0{idx + 1} //
                </span>
                <h4 className="font-display font-bold text-lg text-[#0A192F] mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div className="rounded-3xl bg-blue-50 border border-blue-200 p-7 flex flex-col justify-center">
              <span className="font-mono text-xs uppercase font-bold text-[#1D4ED8] mb-1">Interactive Diagnostic</span>
              <h4 className="font-display font-bold text-lg text-[#0A192F] mb-2">Unsure where to start?</h4>
              <p className="text-slate-600 text-xs mb-4">Complete our 2-minute diagnostic for custom architectural scoring.</p>
              <button
                onClick={onOpenAssessment}
                className="py-2.5 px-4 bg-[#1D4ED8] text-white rounded-full font-mono text-xs uppercase font-bold cursor-pointer hover:bg-blue-800 transition-colors"
              >
                Launch Diagnostic
              </button>
            </div>
          </div>
        </section>
      )}

      {/* How We Work: 4-Step Pipeline */}
      {(activeTab === 'all' || activeTab === 'process') && (
        <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mb-24 text-left">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#1D4ED8] font-bold block mb-2">
              DELIVERY METHODOLOGY
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F]">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-sm relative overflow-hidden"
              >
                <span className="font-mono text-3xl font-black text-slate-200 block mb-4">
                  {s.step}
                </span>
                <h3 className="font-display font-bold text-xl text-[#0A192F] mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="rounded-3xl bg-[#0A192F] text-white p-8 sm:p-14 border border-blue-900/60 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1D4ED8]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#DC2626]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-blue-300 font-bold block mb-4">
              TAILORED ROADMAP //
            </span>

            <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Tell Us About Your Business
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-normal">
              Tell us about your operations and data infrastructure, and we will identify exactly where AI can have the biggest measurable impact.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onBookCall('Products & Services Consultation')}
                className="px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-3 cursor-pointer hover:scale-102"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
              </button>

              <button
                onClick={() => onNavigate('case-studies')}
                className="px-8 py-4 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full border border-blue-700/60 bg-blue-950 hover:bg-blue-900 text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Client Case Studies</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Return to Home Overview Button */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider font-bold text-[#1D4ED8] hover:text-[#0A192F] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage Overview</span>
        </button>
      </div>

    </div>
  );
};

export default ServicesPage;
