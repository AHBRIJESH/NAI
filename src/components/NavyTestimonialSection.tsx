import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { WatermarkPattern } from './WatermarkPattern';
import { ScrollReveal } from './ScrollReveal';

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
    <section className="py-24 md:py-32 bg-[#0A192F] text-white relative overflow-hidden">
      {/* Translucent Geometric Ribbon Watermark */}
      <WatermarkPattern color="#FFFFFF" opacity={0.07} />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal y={28} duration={0.6}>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs tracking-[0.2em] uppercase font-bold bg-white/10 text-blue-200 border border-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span>CLIENT PERSPECTIVES</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Our Clients Say It Best
            </h2>
          </div>
        </ScrollReveal>

        {/* Floating White Testimonial Card with Carousel Controls */}
        <ScrollReveal delay={0.12} y={32} duration={0.7}>
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 sm:p-12 text-[#0A192F] shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              
              {/* Left Executive Photo */}
              <div className="shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100">
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
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-xs font-mono text-slate-300 font-bold">
                {currentIndex + 1} / {testimonials.length}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
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
