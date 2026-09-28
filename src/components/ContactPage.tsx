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

// Custom SVG Icons matching GradientFooter for exact brand representation
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/nairai',
    icon: LinkedInIcon,
    hoverClass: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@naircorp?si=gcy-P6RD3bsbm9Zv',
    icon: YouTubeIcon,
    hoverClass: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/naircorp?stkn=NTJoY2VjcDUxY3B0&utm_source=qr',
    icon: InstagramIcon,
    hoverClass: 'hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1MA8bMLjab/?mibextid=wwXIfr',
    icon: FacebookIcon,
    hoverClass: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
  },
];

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

      {/* Booking Grid: Left Channels & Right Side-by-Side Scheduler Card */}
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
                  <span className="font-mono text-xs text-slate-500 uppercase block font-semibold mb-2.5">
                    Official Social Channels
                  </span>
                  <div className="flex items-center gap-2.5">
                    {socialLinks.map((s) => {
                      const IconComp = s.icon;
                      return (
                        <a
                          key={s.name}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Follow NAIR.AI on ${s.name}`}
                          title={s.name}
                          className={`w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110 active:scale-95 ${s.hoverClass}`}
                        >
                          <IconComp />
                        </a>
                      );
                    })}
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

          {/* Right Column: Embedded Interactive Scheduler with Date & Time and Form SIDE BY SIDE */}
          <div className="lg:col-span-8 text-left">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl space-y-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Scheduler Title & Status Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-100/70 text-[#1D4ED8] flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Live Calendar
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">30-min strategy session</span>
                      </div>
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                        Schedule Strategy Call
                      </h2>
                      <p className="text-slate-500 text-xs sm:text-sm font-normal mt-0.5">
                        Select a date &amp; time, and enter your details to confirm your briefing.
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 shrink-0 self-start">
                      <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                      <span>EST (UTC-5)</span>
                    </div>
                  </div>

                  {/* SIDE BY SIDE: Date & Time Section on Left, Form on Right */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    
                    {/* LEFT SIDE (md:col-span-6): Compact Date & Time Picker */}
                    <div className="md:col-span-6 space-y-4">
                      
                      {/* Step 1 Header with Selected Badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-[#1D4ED8] text-white font-mono font-bold text-[11px] flex items-center justify-center shrink-0">
                            1
                          </span>
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A192F]">
                            Date &amp; Time
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-[#1D4ED8] font-bold">
                          {selectedDate.monthName} {selectedDate.dayNumber} · {selectedTime}
                        </span>
                      </div>

                      {/* Compact Month Calendar */}
                      <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-3 sm:p-3.5 shadow-2xs space-y-2.5">
                        {/* Month Navigation Strip */}
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                          <div className="flex items-center gap-1.5">
                            <span className="font-display font-extrabold text-sm sm:text-base text-[#0A192F]">
                              {MONTH_NAMES[currentMonth]} {currentYear}
                            </span>
                            <button
                              type="button"
                              onClick={jumpToToday}
                              className="px-1.5 py-0.5 text-[9px] font-mono uppercase font-bold text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 rounded transition-colors cursor-pointer"
                            >
                              Today
                            </button>
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={prevMonth}
                              className="w-7 h-7 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-white text-slate-600 hover:text-[#1D4ED8] flex items-center justify-center transition-all cursor-pointer"
                              aria-label="Previous month"
                            >
                              <ChevronLeft className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={nextMonth}
                              className="w-7 h-7 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-white text-slate-600 hover:text-[#1D4ED8] flex items-center justify-center transition-all cursor-pointer"
                              aria-label="Next month"
                            >
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Weekday Names Header */}
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {DAY_NAMES.map((name, idx) => (
                            <div
                              key={name}
                              className={`text-[10px] font-mono font-bold uppercase py-0.5 ${
                                idx === 0 || idx === 6 ? 'text-slate-400' : 'text-slate-600'
                              }`}
                            >
                              {name.slice(0, 2)}
                            </div>
                          ))}
                        </div>

                        {/* Calendar Days Matrix */}
                        <div className="grid grid-cols-7 gap-1">
                          {/* Previous Month Inactive Trailing Days */}
                          {Array.from({ length: firstDayOfWeek }).map((_, i) => {
                            const prevDayNum = daysInPrevMonth - firstDayOfWeek + i + 1;
                            return (
                              <div
                                key={`prev-${i}`}
                                className="h-8 rounded-lg flex items-center justify-center text-[11px] font-mono text-slate-300 select-none bg-slate-50/40"
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
                                className={`h-8 rounded-lg flex flex-col items-center justify-center relative transition-all duration-150 cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#1D4ED8] text-white font-bold shadow-md shadow-blue-600/30 scale-105 z-10'
                                    : isPast
                                    ? 'text-slate-300 bg-slate-50/20 cursor-not-allowed'
                                    : isWeekend
                                    ? 'text-slate-500 bg-slate-50/50 hover:bg-blue-50/60 hover:text-[#1D4ED8] border border-transparent'
                                    : 'text-slate-800 bg-white hover:bg-blue-50 hover:text-[#1D4ED8] border border-slate-100 hover:border-blue-200 shadow-2xs'
                                }`}
                              >
                                <span className="text-xs font-semibold leading-none">
                                  {dayNumber}
                                </span>

                                {/* Indicators */}
                                {isSelected ? (
                                  <span className="w-1 h-1 rounded-full bg-white mt-0.5" />
                                ) : isTodayDate ? (
                                  <span className="w-1 h-1 rounded-full bg-[#1D4ED8] mt-0.5" title="Today" />
                                ) : !isPast && !isWeekend ? (
                                  <span className="w-0.5 h-0.5 rounded-full bg-blue-300 mt-0.5 opacity-70" />
                                ) : null}
                              </button>
                            );
                          })}

                          {/* Next Month Inactive Leading Days */}
                          {Array.from({
                            length: (7 - ((firstDayOfWeek + daysInMonth) % 7)) % 7,
                          }).map((_, i) => (
                            <div
                              key={`next-${i}`}
                              className="h-8 rounded-lg flex items-center justify-center text-[11px] font-mono text-slate-300 select-none bg-slate-50/40"
                            >
                              {i + 1}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Available Time Slots Underneath the Calendar */}
                      <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-3 sm:p-3.5 shadow-2xs space-y-2">
                        <div className="flex items-center justify-between pb-1 border-b border-slate-200/70">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-[#1D4ED8]" />
                            <span>Time Slots ({selectedDate.dayName})</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">30 min</span>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5">
                          {AVAILABLE_TIME_SLOTS.map((timeSlot) => {
                            const isSelected = selectedTime === timeSlot;
                            return (
                              <button
                                key={timeSlot}
                                type="button"
                                onClick={() => setSelectedTime(timeSlot)}
                                className={`py-2 px-2.5 rounded-xl border text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center justify-between ${
                                  isSelected
                                    ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-xs'
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                                }`}
                              >
                                <span>{timeSlot}</span>
                                {isSelected && (
                                  <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                          <span className="flex items-center gap-1">
                            <Video className="w-3 h-3 text-[#1D4ED8]" /> Google Meet / Zoom
                          </span>
                          <span className="flex items-center gap-1 text-slate-500">
                            <ShieldCheck className="w-3 h-3 text-[#1D4ED8]" /> Mutual NDA
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* RIGHT SIDE (md:col-span-6): Attendee Details Form */}
                    <div className="md:col-span-6 space-y-3.5">
                      
                      {/* Step 2 Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-[#1D4ED8] text-white font-mono font-bold text-[11px] flex items-center justify-center shrink-0">
                            2
                          </span>
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A192F]">
                            Your Information
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">* Required</span>
                      </div>

                      {/* Inputs */}
                      <div className="space-y-3">
                        <div>
                          <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Sarah Jenkins"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all bg-white"
                          />
                        </div>

                        <div>
                          <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Work Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="s.jenkins@enterprise.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all bg-white"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                              Company *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Acme Health"
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all bg-white"
                            />
                          </div>

                          <div>
                            <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                              Phone
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+1 (555) 019"
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all bg-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Strategic Consultation Focus
                          </label>
                          <select
                            value={formData.interest}
                            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-none bg-white transition-all font-medium"
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
                          <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Current Challenges / Stack (Optional)
                          </label>
                          <textarea
                            rows={2}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Briefly describe your existing software stack or workflow challenges..."
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-none transition-all resize-none font-medium bg-white"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full mt-2 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.98]"
                      >
                        <span>Confirm AI Strategy Call • {selectedDate.monthName} {selectedDate.dayNumber} ({selectedTime})</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>

                    </div>

                  </div>
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
