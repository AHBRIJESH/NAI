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
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import type { PageRoute } from './Navbar';

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

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full font-mono text-[11px] tracking-[0.26em] uppercase font-extrabold bg-blue-50 text-[#1D4ED8] border border-blue-200 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span>ABOUT NAIR CORPORATION</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
            More Than AI Solutions.{' '}
            <span className="text-[#1D4ED8]">A Partner in Your Growth.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            We deliver customized AI solutions that solve real business challenges. From intelligent chatbots and automation agents to generative AI and predictive analytics, we build systems that improve efficiency, reduce costs, and enhance customer experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onBookCall('About Us - Consultation')}
              className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/25 hover:scale-102 flex items-center gap-2.5 cursor-pointer"
            >
              <span>Schedule Strategic Briefing</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all shadow-xs cursor-pointer"
            >
              <span>Explore Products &amp; Services</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Two Continents Story Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md font-mono text-[10px] uppercase font-bold tracking-widest bg-blue-50 text-[#1D4ED8] border border-blue-200">
                <Globe2 className="w-3.5 h-3.5" />
                <span>GLOBAL DELIVERY ARCHITECTURE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight leading-snug">
                AI Professionals Across Two Continents
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                With a dedicated team of experienced AI professionals spanning the <strong className="text-[#0A192F] font-bold">United States</strong> and <strong className="text-[#0A192F] font-bold">India</strong>, we combine high-touch executive strategy with relentless, 24/7 technical execution.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                We believe every business can benefit from AI. That's why we work closely with our clients to understand their unique goals, identify untapped leverage points, and implement secure, scalable solutions that deliver immediate, measurable ROI.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#1D4ED8] block">USA</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold block mt-1">
                    Strategy &amp; Architecture
                  </span>
                  <span className="text-xs text-slate-600 mt-0.5 block">East Coast Operating Center</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#DC2626] block">INDIA</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold block mt-1">
                    Engineering &amp; Labs
                  </span>
                  <span className="text-xs text-slate-600 mt-0.5 block">24/7 Deployment &amp; Ops</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-br from-[#0A192F] to-[#1E3A8A] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden text-left">
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

      {/* Mission & Vision Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-lg text-left relative overflow-hidden group hover:border-[#1D4ED8] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#1D4ED8] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Target className="w-6 h-6 stroke-[2.2]" />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8] font-bold block mb-2">
              OUR MISSION //
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F] mb-4">
              To Empower Businesses with Intelligent Scale
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              To empower businesses with innovative AI solutions that drive efficiency, growth, and long-term success — demystifying machine learning and deploying deterministic, high-impact pipelines without bloated overhead.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-lg text-left relative overflow-hidden group hover:border-[#DC2626] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 text-[#DC2626] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-[#DC2626] font-bold block mb-2">
              OUR VISION //
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F] mb-4">
              To Be the Most Trusted Global AI Vanguard
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              To be a trusted global AI partner, helping organizations transform the way they work through intelligent technology, transparent execution, zero data retention safeguards, and permanent client code ownership.
            </p>
          </div>

        </div>
      </section>

      {/* Core Operational Values */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 text-left">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#1D4ED8] font-bold block mb-3">
            GUIDING PRINCIPLES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            How We Deliver Client Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-5">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-xl text-[#0A192F] mb-2">Measurable ROI First</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              We focus on high-yield, low-friction wins first. Every initiative is benchmarked against quantified hours saved and revenue protected before capital commitment.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-xl text-[#0A192F] mb-2">Zero-Retention Security</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Your proprietary enterprise intelligence is never used to train public models. We deploy isolated private VPC containers and sovereign runtimes.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-5">
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
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="rounded-3xl bg-[#0A192F] text-white p-8 sm:p-14 border border-blue-900/60 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1D4ED8]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#DC2626]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-blue-300 font-bold block mb-4">
              START A PROJECT //
            </span>

            <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Ready to Build a Smarter Business?
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-normal">
              Let's talk about how AI can transform your operations, eliminate manual bottlenecks, and accelerate your competitive growth.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onBookCall('About Us - Consultation')}
                className="px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-3 cursor-pointer hover:scale-102"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenAssessment}
                className="px-8 py-4 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full border border-blue-700/60 bg-blue-950 hover:bg-blue-900 text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Take Readiness Diagnostic</span>
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

export default AboutPage;
