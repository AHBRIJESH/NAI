import React from 'react';

export const PressBar: React.FC = () => {
  const accolades = [
    { title: 'Inc. 5000', subtitle: 'Fastest-Growing AI Systems' },
    { title: 'Clutch Top 1%', subtitle: 'Leader in Enterprise AI' },
    { title: 'Markets Insider', subtitle: 'Leading Automation Architecture' },
    { title: 'SOC2 Type II', subtitle: 'Audited Enterprise Compliance' },
  ];

  return (
    <section className="py-10 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-400 font-bold mb-6">
          RECOGNIZED FOR TECHNICAL RIGOR &amp; DELIVERY
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
          {accolades.map((acc, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="font-display font-black text-lg md:text-xl text-[#0A192F] tracking-tight">
                {acc.title}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-semibold mt-0.5">
                {acc.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressBar;
