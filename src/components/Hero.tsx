import React from 'react';
import { ArrowRight, Play, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall, onOpenAssessment }) => {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0A192F] text-white min-h-[90vh] lg:min-h-[calc(100vh-80px)] flex flex-col justify-center">
      {/* Background Photography with Navy & Cobalt Color Grade Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero_green_office.jpg"
          alt="NAIR.AI Enterprise Engineering Operations"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-125"
        />
        {/* Cinematic Deep Navy / Cobalt Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/95 via-[#0A1D3D]/90 to-[#071326]/95 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F]/60" />
        {/* Subtle Cybernetic Red & Blue Radial Ambient Glows */}
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#1D4ED8]/25 blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#DC2626]/15 blur-[130px]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 text-left">
        <div className="max-w-3xl lg:max-w-4xl">
          
          {/* Eyebrow Kicker */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full font-mono text-xs tracking-[0.24em] uppercase font-bold bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>ENTERPRISE AI ARCHITECTURE &amp; DELIVERY</span>
          </div>

          {/* Headline Matching Reference Image */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight text-white leading-[1.02] mb-6">
            Every company has an AI idea.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
              Ours has a ship date.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-200/90 leading-relaxed max-w-2xl mb-10 font-normal">
            We architect, build, and deploy production-grade autonomous agent systems and enterprise AI software with guaranteed delivery milestones.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
            <button
              onClick={onBookCall}
              className="px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-sm uppercase tracking-wider font-extrabold rounded-full transition-all duration-200 shadow-xl shadow-red-600/30 hover:shadow-2xl hover:scale-102 active:scale-98 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => handleScrollToSection('capabilities')}
              className="px-6 py-4 rounded-full font-mono text-sm tracking-wider font-semibold text-white/90 hover:text-white border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>See How It Works</span>
            </button>
          </div>

          {/* Key Trust Signals */}
          <div className="flex flex-wrap items-center gap-7 sm:gap-10 text-xs sm:text-sm font-mono text-slate-300/80 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-semibold text-white">Zero Data Retention</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FACC15]" />
              <span className="font-semibold text-white">3–4 Week Sprints</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
              <span className="font-semibold text-white">SOC2 Type II Aligned</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
