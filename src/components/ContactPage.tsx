import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Globe2,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Video,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { SubPageMotionBackground } from './SubPageMotionBackground';

interface ContactPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
}

export interface DateSlot {
  dateStr: string;
  dayName: string;
  dayNumber: number;
  monthName: string;
  label: string;
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const SHORT_MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const AVAILABLE_TIME_SLOTS = [
  '09:30 AM EST',
  '11:00 AM EST',
  '01:30 PM EST',
  '03:00 PM EST',
  '04:30 PM EST',
];

function getInitialBusinessDate(): DateSlot {
  const now = new Date();
  const candidate = new Date(now);
  candidate.setDate(candidate.getDate() + 1);

  while (candidate.getDay() === 0 || candidate.getDay() === 6) {
    candidate.setDate(candidate.getDate() + 1);
  }

  const dayOfWeek = candidate.getDay();
  const dateStr = `${candidate.getFullYear()}-${String(candidate.getMonth() + 1).padStart(2, '0')}-${String(
    candidate.getDate()
  ).padStart(2, '0')}`;

  return {
    dateStr,
    dayName: DAY_NAMES[dayOfWeek],
    dayNumber: candidate.getDate(),
    monthName: SHORT_MONTH_NAMES[candidate.getMonth()],
    label: `${DAY_NAMES[dayOfWeek]}, ${SHORT_MONTH_NAMES[candidate.getMonth()]} ${candidate.getDate()}`,
  };
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  onBookCall,
}) => {
  const initialDateSlot = useMemo(() => getInitialBusinessDate(), []);
  const [selectedDate, setSelectedDate] = useState<DateSlot>(initialDateSlot);
  const [selectedTime, setSelectedTime] = useState<string>(AVAILABLE_TIME_SLOTS[1]);

  // Calendar month & year viewing state
  const [currentYear, setCurrentYear] = useState<number>(() => {
    const parts = initialDateSlot.dateStr.split('-');
    return parts.length === 3 ? parseInt(parts[0], 10) : new Date().getFullYear();
  });
  const [currentMonth, setCurrentMonth] = useState<number>(() => {
    const parts = initialDateSlot.dateStr.split('-');
    return parts.length === 3 ? parseInt(parts[1], 10) - 1 : new Date().getMonth();
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'General AI Strategy & Advisory',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calendar calculations
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); // 0 for Sunday
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const jumpToToday = () => {
    const now = new Date();
    setCurrentYear(now.getFullYear());
    setCurrentMonth(now.getMonth());
  };

  const handleDayClick = (dayNumber: number) => {
    const candidate = new Date(currentYear, currentMonth, dayNumber);
    candidate.setHours(0, 0, 0, 0);

    if (candidate < today) return;

    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(
      dayNumber
    ).padStart(2, '0')}`;
    const dayOfWeek = candidate.getDay();
    const dayName = DAY_NAMES[dayOfWeek];
    const monthName = SHORT_MONTH_NAMES[currentMonth];

    setSelectedDate({
      dateStr,
      dayName,
      dayNumber,
      monthName,
      label: `${dayName}, ${monthName} ${dayNumber}`,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.55 },
        colors: ['#1D4ED8', '#DC2626', '#0284C7', '#0A192F', '#38BDF8'],
      });
    } catch (e) {
      // Safe fallback
    }
  };

  const googleCalendarUrl = useMemo(() => {
    const title = encodeURIComponent('NAIR.AI Executive AI Strategy Call');
    const details = encodeURIComponent(
      `Executive 30-minute AI Strategy Call with NAIR.AI Senior Architect.\n\nAttendee: ${formData.name} (${formData.company})\nEmail: ${formData.email}\nPhone: ${formData.phone}\nFocus: ${formData.interest}\nNotes: ${formData.message}`
    );
    const location = encodeURIComponent('Google Meet (link dispatched to email)');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  }, [formData]);

  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//NAIR.AI//Strategy Call Scheduler//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:REQUEST',
      'BEGIN:VEVENT',
      `SUMMARY:NAIR.AI Executive AI Strategy Call`,
      `DESCRIPTION:30-minute AI Strategy Call with NAIR.AI Senior Solutions Architect for ${formData.name} (${formData.company}).`,
      `LOCATION:Google Meet / Zoom`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'NAIR-AI-Strategy-Call.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-24 overflow-hidden">
      {/* Light Colored Motion Background with Subtle Ambient Elements */}
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
          <span>Back to Home</span>
        </button>
      </div>

      {/* Wide Hero Header */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 text-left">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3 block">
              Direct Inquiries &amp; Strategy Sessions
            </span>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04] flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-5">
              <span>Contact</span>
              <img
                src="/images/logo.png"
                alt="NAIR.AI"
                className="h-9 sm:h-13 lg:h-16 w-auto object-contain inline-block drop-shadow-xs"
              />
            </h1>

            <p className="text-base sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed">
              Schedule an objective 30-minute consultation directly with our senior AI systems architects, or send us an inquiry below. We map out high-ROI opportunities, review compliance constraints, and outline a deterministic 30-day implementation plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Grid: Left Channels & Right Embedded Spacious Calendar Scheduler */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Info & Operational Parameters (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-md space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#1D4ED8] font-extrabold block border-b border-slate-100 pb-3">
                DIRECT CHANNELS &amp; OPERATIONAL HOURS
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-slate-500 uppercase block font-semibold">Operational Window</span>
                    <span className="font-display font-bold text-sm text-[#0A192F]">Mon – Sun, 6:00 AM – 11:00 PM EST</span>
                    <span className="text-xs text-slate-500 block mt-0.5">Response within 24 business hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-slate-500 uppercase block font-semibold">Official Inquiries &amp; Strategy</span>
                    <a href="mailto:info@nair.ai" className="font-mono text-sm text-[#1D4ED8] hover:underline font-bold">
                      info@nair.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-slate-500 uppercase block font-semibold">Global Operations</span>
                    <span className="text-xs text-slate-700 font-medium">United States &amp; India Operations</span>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-2">
                  <span className="font-mono text-xs text-slate-500 uppercase block font-semibold mb-2">
                    Official Social Channels
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href="https://www.linkedin.com/company/nairai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-slate-50 hover:bg-[#0A66C2] hover:text-white border border-slate-200 text-xs font-mono font-bold text-slate-700 transition-all flex items-center gap-1.5"
                    >
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://youtube.com/@naircorp?si=gcy-P6RD3bsbm9Zv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-slate-50 hover:bg-[#FF0000] hover:text-white border border-slate-200 text-xs font-mono font-bold text-slate-700 transition-all flex items-center gap-1.5"
                    >
                      <span>YouTube</span>
                    </a>
                    <a
                      href="https://www.instagram.com/naircorp?stkn=NTJoY2VjcDUxY3B0&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-slate-50 hover:bg-[#E1306C] hover:text-white border border-slate-200 text-xs font-mono font-bold text-slate-700 transition-all flex items-center gap-1.5"
                    >
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.facebook.com/share/1MA8bMLjab/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-slate-50 hover:bg-[#1877F2] hover:text-white border border-slate-200 text-xs font-mono font-bold text-slate-700 transition-all flex items-center gap-1.5"
                    >
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs text-slate-600 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0A192F]">
                    <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                    <span>Strict Mutual NDA Protected</span>
                  </div>
                  <p className="font-normal leading-relaxed">
                    All initial discussions operate under standard mutual NDA protocol. Your business metrics, system architecture, and proprietary datasets remain strictly confidential.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Consultation Perks */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-50/90 via-sky-50 to-blue-100/70 border border-blue-200/90 text-[#0A192F] p-7 sm:p-8 shadow-md text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#1D4ED8] block mb-2 font-bold">
                WHAT HAPPENS ON THE CALL
              </span>
              <h3 className="font-display font-extrabold text-xl text-[#0A192F] mb-3">
                Zero Fluff. Pure Engineering.
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5 font-normal">
                <li className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] font-bold">1.</span>
                  <span>Objective breakdown of where AI creates immediate ROI in your workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] font-bold">2.</span>
                  <span>Evaluation of compliance constraints (HIPAA, SOC 2, air-gapped runtimes).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] font-bold">3.</span>
                  <span>Realistic 30-day proof-of-concept milestone and budget estimate.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Scheduler (8 cols on lg - spacious & un-congested) */}
          <div className="lg:col-span-8 text-left">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xl space-y-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Scheduler Title & Status Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-100/70 text-[#1D4ED8] flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Live Calendar
                        </span>
                      </div>
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                        Schedule Strategy Call
                      </h2>
                      <p className="text-slate-500 text-xs sm:text-sm font-normal mt-1">
                        Select your preferred date and time for a 30-minute private briefing with our senior AI architects.
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                      <span>EST (UTC-5)</span>
                    </div>
                  </div>

                  {/* Step 1: Inline Month Calendar & Time Slot Selector (Side-by-side on desktop, stacked on mobile) */}
                  <div className="rounded-2xl bg-slate-50/70 border border-slate-200/80 p-5 sm:p-6 lg:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#1D4ED8] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          1
                        </span>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A192F]">
                          Select Date &amp; Time
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono bg-white px-3 py-1 rounded-lg border border-slate-200 text-slate-600">
                        <Calendar className="w-3.5 h-3.5 text-[#1D4ED8]" />
                        <span>Selected: <strong className="text-[#1D4ED8] font-bold">{selectedDate.label}</strong> at <strong className="text-[#0A192F] font-bold">{selectedTime}</strong></span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
                      
                      {/* Left: Full Interactive Month Calendar (7 cols on md) */}
                      <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs space-y-4">
                        {/* Month Navigation Strip */}
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <span className="font-display font-extrabold text-lg sm:text-xl text-[#0A192F]">
                              {MONTH_NAMES[currentMonth]} {currentYear}
                            </span>
                            <button
                              type="button"
                              onClick={jumpToToday}
                              className="px-2 py-0.5 text-[10px] font-mono uppercase font-bold text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 rounded-md transition-colors cursor-pointer"
                            >
                              Today
                            </button>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={prevMonth}
                              className="w-8 h-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-600 hover:text-[#1D4ED8] flex items-center justify-center transition-all cursor-pointer"
                              aria-label="Previous month"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={nextMonth}
                              className="w-8 h-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-600 hover:text-[#1D4ED8] flex items-center justify-center transition-all cursor-pointer"
                              aria-label="Next month"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Weekday Names Header */}
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {DAY_NAMES.map((name, idx) => (
                            <div
                              key={name}
                              className={`text-[11px] font-mono font-bold uppercase py-1 ${
                                idx === 0 || idx === 6 ? 'text-slate-400' : 'text-slate-600'
                              }`}
                            >
                              {name}
                            </div>
                          ))}
                        </div>

                        {/* Calendar Days Matrix */}
                        <div className="grid grid-cols-7 gap-1.5">
                          {/* Previous Month Inactive Trailing Days */}
                          {Array.from({ length: firstDayOfWeek }).map((_, i) => {
                            const prevDayNum = daysInPrevMonth - firstDayOfWeek + i + 1;
                            return (
                              <div
                                key={`prev-${i}`}
                                className="h-10 sm:h-11 rounded-xl flex items-center justify-center text-xs font-mono text-slate-300 select-none bg-slate-50/40"
                              >
                                {prevDayNum}
                              </div>
                            );
                          })}

                          {/* Current Month Active Days */}
                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const dayNumber = i + 1;
                            const candidate = new Date(currentYear, currentMonth, dayNumber);
                            candidate.setHours(0, 0, 0, 0);

                            const isPast = candidate < today;
                            const isTodayDate = candidate.getTime() === today.getTime();
                            const isWeekend = candidate.getDay() === 0 || candidate.getDay() === 6;

                            const candidateDateStr = `${currentYear}-${String(currentMonth + 1).padStart(
                              2,
                              '0'
                            )}-${String(dayNumber).padStart(2, '0')}`;
                            const isSelected = selectedDate.dateStr === candidateDateStr;

                            return (
                              <button
                                key={dayNumber}
                                type="button"
                                disabled={isPast}
                                onClick={() => handleDayClick(dayNumber)}
                                className={`h-10 sm:h-11 rounded-xl flex flex-col items-center justify-center relative transition-all duration-150 cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#1D4ED8] text-white font-bold shadow-md shadow-blue-600/30 scale-105 z-10'
                                    : isPast
                                    ? 'text-slate-300 bg-slate-50/30 cursor-not-allowed'
                                    : isWeekend
                                    ? 'text-slate-500 bg-slate-50/50 hover:bg-blue-50/60 hover:text-[#1D4ED8] border border-transparent hover:border-blue-200'
                                    : 'text-slate-800 bg-white hover:bg-blue-50/80 hover:text-[#1D4ED8] border border-slate-100 hover:border-blue-200 shadow-2xs'
                                }`}
                              >
                                <span className="text-xs sm:text-sm font-semibold leading-none">
                                  {dayNumber}
                                </span>

                                {/* Today or Available dot indicators */}
                                {isSelected ? (
                                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1" />
                                ) : isTodayDate ? (
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-1" title="Today" />
                                ) : !isPast && !isWeekend ? (
                                  <span className="w-1 h-1 rounded-full bg-blue-300 mt-1 opacity-70" />
                                ) : null}
                              </button>
                            );
                          })}

                          {/* Next Month Inactive Leading Days to complete grid row */}
                          {Array.from({
                            length: (7 - ((firstDayOfWeek + daysInMonth) % 7)) % 7,
                          }).map((_, i) => (
                            <div
                              key={`next-${i}`}
                              className="h-10 sm:h-11 rounded-xl flex items-center justify-center text-xs font-mono text-slate-300 select-none bg-slate-50/40"
                            >
                              {i + 1}
                            </div>
                          ))}
                        </div>

                        {/* Calendar Footer Legend */}
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" /> Selected
                            </span>
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-300" /> Open Slots
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400">Click any open day</span>
                        </div>
                      </div>

                      {/* Right: Available Time Slots (5 cols on md) */}
                      <div className="md:col-span-5 space-y-4">
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs space-y-3">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A192F] flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                              <span>Available Times</span>
                            </span>
                            <span className="text-[10px] font-mono text-slate-500">30 min slots</span>
                          </div>

                          <div className="space-y-2">
                            {AVAILABLE_TIME_SLOTS.map((timeSlot) => {
                              const isSelected = selectedTime === timeSlot;
                              return (
                                <button
                                  key={timeSlot}
                                  type="button"
                                  onClick={() => setSelectedTime(timeSlot)}
                                  className={`w-full py-2.5 px-3.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-between ${
                                    isSelected
                                      ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-sm'
                                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                                  }`}
                                >
                                  <span>{timeSlot}</span>
                                  {isSelected && (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                            <Video className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                            <span>Google Meet / Zoom</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Step 2: Attendee & Business Information Form */}
                  <div className="space-y-5 pt-2">
                    <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#1D4ED8] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          2
                        </span>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A192F]">
                          Attendee &amp; Project Information
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">* Required fields</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Sarah Jenkins"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                          Work Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="s.jenkins@enterprise.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Health Holdings"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2834"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Strategic Consultation Focus
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none bg-white transition-all font-medium"
                      >
                        <option>General AI Strategy &amp; Architecture Feasibility</option>
                        <option>Autonomous Agentic Swarms &amp; Workflow Automation</option>
                        <option>NAIR.AI Docs™ Intelligent Extraction &amp; OCR</option>
                        <option>Healthcare &amp; Life Sciences HIPAA Automation</option>
                        <option>Financial Services, Risk Modeling &amp; Fraud Defense</option>
                        <option>Legal Practice &amp; Automated Contract Review</option>
                        <option>Private VPC &amp; Air-Gapped Sovereign Deployment</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Current Systems or Workflow Challenges (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your existing software stack, key workflow friction, or compliance requirements..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all resize-none font-medium"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/30 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.01] active:scale-[0.98]"
                  >
                    <span>Confirm AI Strategy Call • {selectedDate.label} ({selectedTime})</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-200 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/10">
                    <CheckCircle2 className="w-8 h-8 text-[#1D4ED8]" />
                  </div>

                  <div className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8] font-bold block mb-2">
                    APPOINTMENT CONFIRMED
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                    We'll See You on the Call, {formData.name.split(' ')[0] || 'Partner'}!
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    A calendar invitation and conference briefing have been sent to <strong className="font-bold text-[#0A192F]">{formData.email}</strong>.
                  </p>

                  {/* Scheduled Details Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-200/80">
                      <span className="font-bold uppercase text-[#0A192F]">Scheduled Session</span>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-[#1D4ED8] font-bold">Confirmed</span>
                    </div>
                    <div className="space-y-1 text-xs font-mono text-slate-700">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#1D4ED8]" />
                        <span className="font-bold">{selectedDate.label}, {currentYear}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#1D4ED8]" />
                        <span className="font-bold">{selectedTime} (30 Minutes)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-[#1D4ED8]" />
                        <span>Google Meet / Zoom Video Link Dispatched</span>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Sync Options */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
                    <a
                      href={googleCalendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1D4ED8] border border-blue-200 font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Add to Google Cal</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleDownloadICS}
                      className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download .ics</span>
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-slate-300 font-mono text-xs uppercase font-bold text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      Schedule Another Session
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
