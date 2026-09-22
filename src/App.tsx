import { useState, useEffect } from 'react';
import { LenisProvider } from './components/LenisProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTrustBar } from './components/LogoTrustBar';
import { NeuralEngineSection } from './components/NeuralEngineSection';
import { BlueStatsSection } from './components/BlueStatsSection';
import { TeamSplitSection } from './components/TeamSplitSection';
import { CustomerSuccessSection } from './components/CustomerSuccessSection';
import { CalloutBanner } from './components/CalloutBanner';
import { PressBar } from './components/PressBar';
import { SuccessByNumbersSection } from './components/SuccessByNumbersSection';
import { ImpactCalculator } from './components/ImpactCalculator';
import { BlueSolutionsSection } from './components/BlueSolutionsSection';
import { GradientFooter } from './components/GradientFooter';
import { FAQPage } from './components/FAQPage';
import { AssessmentModal } from './components/AssessmentModal';
import { BookingModal } from './components/BookingModal';
import { PagePreloader } from './components/PagePreloader';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(false);
  const [prefillService, setPrefillService] = useState<string>('');
  const [assessmentData, setAssessmentData] = useState<Record<string, string> | undefined>(undefined);

  // Page Routing State ('home' | 'faq')
  const [currentPage, setCurrentPage] = useState<'home' | 'faq'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#/faq' || hash === '#faq' || path === '/faq') {
        return 'faq';
      }
    }
    return 'home';
  });

  // Sync with browser back/forward and hash
  useEffect(() => {
    const handleRouteCheck = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      const isFaq = hash === '#/faq' || hash === '#faq' || path === '/faq';
      setCurrentPage(isFaq ? 'faq' : 'home');
    };
    window.addEventListener('popstate', handleRouteCheck);
    window.addEventListener('hashchange', handleRouteCheck);
    return () => {
      window.removeEventListener('popstate', handleRouteCheck);
      window.removeEventListener('hashchange', handleRouteCheck);
    };
  }, []);

  const handleNavigate = (page: 'home' | 'faq', sectionId?: string) => {
    if (page === 'faq') {
      setCurrentPage('faq');
      window.location.hash = '#/faq';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      window.history.replaceState(null, '', window.location.pathname);
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Refined Smooth Preloader (active on first visit)
  const [preloaderActive, setPreloaderActive] = useState<boolean>(true);

  const handleOpenBooking = (serviceName?: string) => {
    setPrefillService(serviceName || 'Enterprise AI Strategy & Delivery');
    setIsBookingOpen(true);
  };

  const handleOpenAssessment = () => {
    setIsAssessmentOpen(true);
  };

  const handleBookWithAssessmentData = (data: Record<string, string>) => {
    setAssessmentData(data);
    setIsAssessmentOpen(false);
    setPrefillService('AI Strategy & Readiness Assessment');
    setIsBookingOpen(true);
  };

  return (
    <LenisProvider>
      <div className="min-h-screen bg-white text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white antialiased">
        {/* Smooth Logo Reveal Preloader */}
        {preloaderActive && (
          <PagePreloader
            duration={1200}
            onComplete={() => setPreloaderActive(false)}
          />
        )}

        {/* Fixed Top Navigation Bar */}
        <Navbar
          onBookCall={() => handleOpenBooking()}
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />

        {currentPage === 'home' ? (
          <main className="w-full">
            {/* 1. Hero Section (Green Photo / Deep Navy Colorgrade + "Every company has an AI idea. Ours has a ship date.") */}
            <Hero
              onBookCall={() => handleOpenBooking()}
              onOpenAssessment={handleOpenAssessment}
            />

            {/* 2. Trusted By Industry Leaders Logo Bar */}
            <LogoTrustBar />

            {/* 3. Proprietary Multi-Agent Inference Engine Section */}
            <NeuralEngineSection
              onOpenAssessment={handleOpenAssessment}
              onBookCall={() => handleOpenBooking('Autonomous Neural Core Engine')}
            />

            {/* 4. Royal Blue Stats Section ("AI, Software, and Data. Built to Ship.") */}
            <BlueStatsSection
              onExploreCapabilities={() => {
                const el = document.getElementById('services');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 5. Team & Capabilities Split ("Smart AI Solutions with an Even Smarter AI Team") */}
            <TeamSplitSection />

            {/* 6. Cerulean Customer Success Story */}
            <CustomerSuccessSection
              onSelectCaseStudy={(storyTitle) => handleOpenBooking(`Case Study Inquiry: ${storyTitle}`)}
            />

            {/* 7. Press & Recognition Logo Bar */}
            <PressBar />

            {/* 8. Success by the Numbers Circular Diagram */}
            <SuccessByNumbersSection />

            {/* 9. Interactive ROI Impact Estimator */}
            <ImpactCalculator
              onBookCall={() => handleOpenBooking('Operational Automation ROI')}
            />

            {/* 10. Expert Solutions Grid (Royal Blue Background, 3 White Cards) */}
            <BlueSolutionsSection
              onSelectSolution={(sol) => handleOpenBooking(sol)}
            />

            {/* 11. Unified Minimal Uncomfortable Truth & Technical Feasibility Section */}
            <CalloutBanner
              onBookCall={() => handleOpenBooking()}
            />
          </main>
        ) : (
          /* Dedicated Standalone FAQ Page */
          <FAQPage
            onBackToHome={() => handleNavigate('home')}
            onBookCall={handleOpenBooking}
            onOpenAssessment={handleOpenAssessment}
          />
        )}

        {/* 15. Panoramic Gradient Footer (Navy to Royal Blue with Crimson Accents) */}
        <GradientFooter
          onBookCall={() => handleOpenBooking()}
          onNavigate={handleNavigate}
        />

        {/* Interactive Modals */}
        <AssessmentModal
          isOpen={isAssessmentOpen}
          onClose={() => setIsAssessmentOpen(false)}
          onBookCallWithData={handleBookWithAssessmentData}
        />

        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          prefillService={prefillService}
          assessmentData={assessmentData}
        />
      </div>
    </LenisProvider>
  );
}

export default App;
