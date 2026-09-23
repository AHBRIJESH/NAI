import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { WatermarkPattern } from './WatermarkPattern';
import { ScrollReveal } from './ScrollReveal';
import { MotionDotCanvas } from './MotionDotCanvas';

export const NavyTestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'NAIR.AI eliminated the gap between conceptual AI demos and reliable production infrastructure. Their team deployed our autonomous contract intelligence pipeline in 4 weeks, delivering immediate operational return without compromising on data sovereignty.',
      name: 'Marcus Vance',
      title: 'Chief Information & Security Officer, Meridian Financial Group',
      image: '/images/executive_architect.jpg',
      impact: '82% faster compliance audit cycles',
    },
    {
      quote:
        'The zero data retention guarantee was the deciding factor for our compliance board. NAIR.AI engineered an on-prem multi-agent swarm that automates thousands of daily ERP validations with zero external leaks.',
      name: 'Elena Rostova',
      title: 'VP of Global Supply Operations, NexaLogistics',
      image: '/images/executive_architect.jpg',
      impact: '$3.4M annual recurring cost recovery',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#F0F7FF] via-[#E0F2FE] to-[#EFF6FF] text-[#0A192F] relative overflow-hidden border-y border-blue-200/80">
      {/* Motion Dot Deflection Canvas */}
      <MotionDotCanvas dotCount={45} deflectionRadius={120} />

      {/* Translucent Geometric Ribbon Watermark */}
      <WatermarkPattern color="#0284C7" opacity={0.04} />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal y={28} duration={0.6}>
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F]">
              Our Clients Say It Best
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal max-w-xl mx-auto">
              Real outcomes delivered by enterprise-grade autonomous intelligence pipelines.
            </p>
          </div>
        </ScrollReveal>

        {/* Floating White Testimonial Card with Carousel Controls */}
        <ScrollReveal delay={0.12} y={32} duration={0.7}>
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 sm:p-12 text-[#0A192F] shadow-xl border border-blue-100/90 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              
              {/* Left Executive Photo */}
              <div className="shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-md border-2 border-slate-100">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Right Testimonial Content */}
              <div className="flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#DC2626]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-mono text-xs text-[#1D4ED8] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                      {current.impact}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic mb-6 font-normal">
                    "{current.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-display font-black text-lg text-[#0A192F]">
                    {current.name}
                  </h3>
                  <p className="font-mono text-xs text-slate-500 font-semibold mt-0.5">
                    {current.title}
                  </p>
                </div>
              </div>

            </div>

            {/* Carousel Arrow Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white hover:bg-slate-50 text-[#0A192F] border border-blue-200/90 shadow-sm flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-xs font-mono text-slate-600 font-bold">
                {currentIndex + 1} / {testimonials.length}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white hover:bg-slate-50 text-[#0A192F] border border-blue-200/90 shadow-sm flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default NavyTestimonialSection;
