import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  Target,
  Compass,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Users2,
  Building2,
  Lock,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import type { PageRoute } from './Navbar';
import { SubPageMotionBackground } from './SubPageMotionBackground';
import { useHorizontalWheelScroll } from './useHorizontalWheelScroll';

interface AboutPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
  onNavigate,
}) => {
  const hubScrollRef = useHorizontalWheelScroll<HTMLDivElement>();

  const handleHubScroll = (direction: 'left' | 'right') => {
    if (hubScrollRef.current) {
      const scrollAmount = 360;
      hubScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const deliveryHubs = [
    {
      city: 'San Francisco, CA',
      hub: 'Silicon Valley R&D Lab',
      desc: 'Foundation model fine-tuning, latency optimization, and multi-agent swarm architecture design.',
      focus: 'Agentic Research & Architecture',
      badge: 'HQ & R&D',
      color: '#1D4ED8',
    },
    {
      city: 'Bangalore, India',
      hub: 'High-Throughput Engineering Hub',
      desc: '24/7 continuous engineering, large-scale data pipeline ingestion, and client production support.',
      focus: 'Continuous Engineering & Ingestion',
      badge: 'Global Delivery',
      color: '#DC2626',
    },
    {
      city: 'London, UK',
      hub: 'Sovereign Regulatory Center',
      desc: 'European enterprise governance, GDPR Article 28 data compliance, and private VPC security.',
      focus: 'EU AI Act & Financial Compliance',
      badge: 'European Hub',
      color: '#0284C7',
    },
    {
      city: 'New York, NY',
      hub: 'Capital Markets & Legal AI Lab',
      desc: 'High-frequency transaction anomaly evaluation, Wall Street underwriting tools, and corporate legal copilots.',
      focus: 'Finance & Legal Deployments',
      badge: 'Commercial Hub',
      color: '#1D4ED8',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-24 overflow-hidden">
      {/* Light Colored Motion Background with Subtle Hero Sculpture & Ambient Orbs */}
      <SubPageMotionBackground />

      {/* Top Breadcrumb Navigation Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-6">
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

      {/* Wide Hero Section: Full Space Utilization */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Full breadth content */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
                More Than AI Solutions.{' '}
                <span className="text-[#1D4ED8]">A Partner in Your Growth.</span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mb-8">
                We deliver customized AI solutions that solve real business challenges. From intelligent chatbots and automation agents to generative AI and predictive analytics, we build systems that improve efficiency, reduce costs, and enhance customer experiences.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onBookCall('About Us - Consultation')}
                  className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/25 hover:scale-102 flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Book an AI strategy call</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all shadow-xs cursor-pointer"
                >
                  <span>Explore Services</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Global Presence Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="p-7 sm:p-8 rounded-3xl bg-white/95 border border-slate-200/90 shadow-2xl backdrop-blur-md text-left space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-base text-[#0A192F] block leading-tight">
                      Global Delivery
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                      USA &bull; India &bull; UK
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-[#1D4ED8] px-3 py-1 rounded-full bg-blue-50 font-bold">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-semibold">Silicon Valley R&D</span>
                  <span className="font-bold text-[#1D4ED8]">San Francisco, CA</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-semibold">Engineering Delivery</span>
                  <span className="font-bold text-[#DC2626]">Bangalore, India</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-semibold">Client Code Ownership</span>
                  <span className="font-bold text-[#1D4ED8]">100% Retained</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-semibold">Zero-Retention Security</span>
                  <span className="font-bold text-[#0284C7]">SOC 2 &amp; HIPAA</span>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>Enterprise SLA Guarantee</span>
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Two Continents Story Section: Wide Layout */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
                Two Continents. <span className="text-[#1D4ED8]">One Seamless Team.</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Headquartered with executive leadership and client strategy in the United States, backed by an elite engineering and AI research hub in India. This blended model delivers world-class technical talent, round-the-clock development velocity, and exceptional cost efficiency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-display font-bold text-base text-[#0A192F] block mb-1">
                    United States
                  </span>
                  <span className="text-slate-500 text-xs">
                    Client strategy, product design, enterprise governance, and executive account leadership.
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-display font-bold text-base text-[#0A192F] block mb-1">
                    India Delivery Hub
                  </span>
                  <span className="text-slate-500 text-xs">
                    Advanced machine learning research, custom model fine-tuning, and full-stack software development.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-br from-[#0A192F] to-[#1E3A8A] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="text-4xl text-[#DC2626] font-serif font-black mb-4">“</div>
                <blockquote className="font-display font-bold text-xl sm:text-2xl text-white leading-relaxed mb-6">
                  At Nair Corporation, we don't just build AI — we build smarter businesses.
                </blockquote>
                <div className="pt-4 border-t border-blue-800/80 flex items-center justify-between">
                  <div>
                    <span className="font-display font-extrabold text-sm text-white block">
                      Nair Corporation
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-blue-300 block">
                      Executive Directive
                    </span>
                  </div>
                  <Sparkles className="w-5 h-5 text-blue-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Delivery Topology Horizontal Showcase: Mouse Wheel Scroll Enabled */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              Engineering Hubs &amp; Operational Nodes
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-500 mr-2 hidden sm:inline-block">
              Scroll Mouse Wheel to Slide
            </span>
            <button
              onClick={() => handleHubScroll('left')}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-xs cursor-pointer"
              aria-label="Scroll hubs left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleHubScroll('right')}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-xs cursor-pointer"
              aria-label="Scroll hubs right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={hubScrollRef}
          className="flex gap-6 overflow-x-auto pb-5 pt-1 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {deliveryHubs.map((hub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="w-[300px] sm:w-[350px] shrink-0 snap-start rounded-3xl bg-white border border-slate-200/90 p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: `${hub.color}15`, color: hub.color }}
                  >
                    {hub.badge}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-slate-500 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
                    <span>{hub.city}</span>
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-xl text-[#0A192F] mb-2 leading-snug">
                  {hub.hub}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {hub.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-xs text-[#1D4ED8] font-bold">
                <span>{hub.focus}</span>
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Mission Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-lg relative overflow-hidden group hover:border-[#1D4ED8] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#1D4ED8] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Target className="w-6 h-6 stroke-[2.2]" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F] mb-4">
              To Empower Businesses with Intelligent Scale
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              To empower businesses with innovative AI solutions that drive efficiency, growth, and long-term success — demystifying machine learning and deploying deterministic, high-impact pipelines without bloated overhead.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-lg relative overflow-hidden group hover:border-[#DC2626] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 text-[#DC2626] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F] mb-4">
              To Be the Most Trusted Global AI Vanguard
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              To be a trusted global AI partner, helping organizations transform the way they work through intelligent technology, transparent execution, zero data retention safeguards, and permanent client code ownership.
            </p>
          </div>

        </div>
      </section>

      {/* Core Operational Values: Wide Layout */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 text-left">
        <div className="mb-10 pb-3 border-b border-slate-200">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            How We Deliver Client Advantage
          </h2>
          <p className="text-slate-600 text-base mt-2 max-w-2xl">
            Our operating principles define every line of code, architectural diagram, and deployment milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-5">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-xl text-[#0A192F] mb-2">Measurable ROI First</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              We focus on high-yield, low-friction wins first. Every initiative is benchmarked against quantified hours saved and revenue protected before capital commitment.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-xl text-[#0A192F] mb-2">Zero-Retention Security</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Your proprietary enterprise intelligence is never used to train public models. We deploy isolated private VPC containers and sovereign runtimes.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-5">
              <Users2 className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-xl text-[#0A192F] mb-2">100% Client Ownership</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              All custom pipelines, model adapters, and workflows developed during our engagement remain your company's exclusive intellectual property with full portability.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
        <div className="rounded-3xl bg-[#0A192F] text-white p-8 sm:p-14 border border-blue-900/60 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1D4ED8]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#DC2626]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Ready to Accelerate Your Enterprise?
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Schedule a confidential consultation to explore customized AI architectures for your company.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onBookCall('About Page Bottom CTA')}
                className="w-full px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-3 cursor-pointer hover:scale-102"
              >
                <span>Book an AI strategy call</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenAssessment}
                className="w-full px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all text-center cursor-pointer"
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

export default AboutPage;
