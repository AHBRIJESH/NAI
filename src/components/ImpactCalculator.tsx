import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ImpactCalculatorProps {
  onBookCall: () => void;
  isCinematicDark: boolean;
}

export const ImpactCalculator: React.FC<ImpactCalculatorProps> = ({ onBookCall }) => {
  const [teamSize, setTeamSize] = useState<number>(45);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(8);
  const [hourlyRate, setHourlyRate] = useState<number>(65);

  // Math calculations
  const totalWeeklyHours = teamSize * hoursPerWeek;
  const annualManualHours = totalWeeklyHours * 50; // 50 working weeks
  const automationEfficiencyFactor = 0.75; // 75% repetitive time recovered
  const annualHoursRecovered = Math.round(annualManualHours * automationEfficiencyFactor);
  const annualCostSaved = Math.round(annualHoursRecovered * hourlyRate);
  const fteEquivalentReturned = (annualHoursRecovered / 2000).toFixed(1);

  return (
    <section
      id="calculator"
      className="py-28 md:py-36 bg-[#FFFDEE] border-t border-[#0C342C]/10 text-[#06231D] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.24em] uppercase font-bold bg-[#E2FBCE] text-[#06231D] border border-[#076653]/20 shadow-xs mb-6">
            <Calculator className="w-3.5 h-3.5 text-[#076653]" />
            <span>ROI ESTIMATOR</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight mb-5 text-[#06231D]">
            Quantify Your <span className="text-[#076653]">Efficiency Yield</span>.
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl font-normal leading-relaxed text-[#0C342C]/75">
            Adjust the metrics below to estimate the annual operational bandwidth and budget recaptured by automating repetitive enterprise workflows.
          </p>
        </div>

        {/* Broad Interactive Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Controls Column (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl border border-[#0C342C]/10 bg-[#FFFDEE] p-8 sm:p-12 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-2xl mb-8 text-[#06231D]">
                Operational Parameters
              </h3>

              {/* Slider 1: Team Size */}
              <div className="mb-9">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#0C342C]/70 font-bold">
                    Team Members Handling Workflows
                  </label>
                  <span className="font-mono font-black text-2xl text-[#076653]">
                    {teamSize} People
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="300"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2FBCE] rounded-lg appearance-none cursor-pointer accent-[#076653]"
                />
                <div className="flex justify-between text-xs font-mono text-[#0C342C]/50 font-bold mt-2">
                  <span>5</span>
                  <span>150</span>
                  <span>300+</span>
                </div>
              </div>

              {/* Slider 2: Weekly Repetitive Hours */}
              <div className="mb-9">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#0C342C]/70 font-bold">
                    Repetitive Hours / Person / Week
                  </label>
                  <span className="font-mono font-black text-2xl text-[#076653]">
                    {hoursPerWeek} hrs/wk
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2FBCE] rounded-lg appearance-none cursor-pointer accent-[#076653]"
                />
                <div className="flex justify-between text-xs font-mono text-[#0C342C]/50 font-bold mt-2">
                  <span>2 hrs</span>
                  <span>12 hrs</span>
                  <span>25 hrs</span>
                </div>
              </div>

              {/* Slider 3: Hourly Rate */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#0C342C]/70 font-bold">
                    Blended Hourly Compensation
                  </label>
                  <span className="font-mono font-black text-2xl text-[#076653]">
                    ${hourlyRate}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="180"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2FBCE] rounded-lg appearance-none cursor-pointer accent-[#076653]"
                />
                <div className="flex justify-between text-xs font-mono text-[#0C342C]/50 font-bold mt-2">
                  <span>$30/hr</span>
                  <span>$100/hr</span>
                  <span>$180/hr</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#0C342C]/60 font-mono pt-5 border-t border-[#0C342C]/10 font-medium">
              *Calculation based on industry benchmark 75% automated time recovery rate across back-office operations.
            </p>
          </div>

          {/* Results Column (Broad Midnight Forest container with Acid Lime metrics) */}
          <div className="lg:col-span-6 rounded-3xl border border-[#076653]/30 bg-[#06231D] text-[#FFFDEE] p-6 sm:p-10 flex flex-col justify-between shadow-2xl shadow-[#06231D]/25 min-w-0 overflow-hidden">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E3EF26] font-bold mb-6">
                <TrendingUp className="w-4 h-4 shrink-0" />
                <span>PROJECTED RECOVERED VALUE</span>
              </div>

              {/* Responsive Main Headline Value with Dynamic Overflow Protection */}
              <div className="mb-8 min-w-0 overflow-hidden">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E2FBCE]/70 block mb-2 font-bold">
                  Estimated Annual Cost Recovery
                </span>
                <div
                  className={`font-display font-black text-[#E3EF26] tracking-tight leading-none break-all sm:break-normal transition-all duration-150 ${
                    `$${annualCostSaved.toLocaleString()}`.length >= 11
                      ? 'text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl'
                      : `$${annualCostSaved.toLocaleString()}`.length >= 9
                      ? 'text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl'
                      : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
                  }`}
                >
                  ${annualCostSaved.toLocaleString()}
                </div>
                <div className="flex flex-wrap items-center gap-2.5 mt-2.5">
                  <span className="text-xs sm:text-sm font-mono font-medium text-[#E2FBCE]/60">
                    budget recaptured per year
                  </span>
                  {annualCostSaved >= 1000000 && (
                    <span className="text-[11px] font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-[#0C342C] text-[#E3EF26] border border-[#076653]/60">
                      ~${(annualCostSaved / 1000000).toFixed(1)}M / yr
                    </span>
                  )}
                </div>
              </div>

              {/* Output Metric Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0C342C]/80 border border-[#076653]/40 min-w-0 overflow-hidden">
                  <div className="flex items-center gap-2 text-[#E2FBCE] text-xs font-mono mb-1.5 font-bold">
                    <Clock className="w-4 h-4 text-[#E3EF26] shrink-0" />
                    <span className="truncate">HOURS RECOVERED</span>
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#FFFDEE] truncate">
                    {annualHoursRecovered.toLocaleString()}
                  </div>
                  <span className="text-xs text-[#E2FBCE]/60 block mt-1 font-mono">
                    Hours returned / yr
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#0C342C]/80 border border-[#076653]/40 min-w-0 overflow-hidden">
                  <div className="flex items-center gap-2 text-[#E2FBCE] text-xs font-mono mb-1.5 font-bold">
                    <TrendingUp className="w-4 h-4 text-[#E3EF26] shrink-0" />
                    <span className="truncate">FTE BANDWIDTH</span>
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#FFFDEE] truncate">
                    +{fteEquivalentReturned} FTEs
                  </div>
                  <span className="text-xs text-[#E2FBCE]/60 block mt-1 font-mono">
                    Capacity unlocked
                  </span>
                </div>
              </div>

              {/* Strategic Context */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-[#E2FBCE]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#E3EF26] shrink-0 mt-0.5" />
                  <span>Immediate deployment without retraining existing operational staff.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#E2FBCE]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#E3EF26] shrink-0 mt-0.5" />
                  <span>Zero proprietary data used for public LLM model retraining.</span>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <button
              onClick={onBookCall}
              className="w-full py-5 px-6 bg-[#E3EF26] hover:bg-[#d2de1e] text-[#06231D] font-mono text-xs uppercase tracking-wider font-extrabold rounded-full transition-all duration-200 shadow-xl shadow-[#E3EF26]/20 flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Validate ROI With An AI Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImpactCalculator;
