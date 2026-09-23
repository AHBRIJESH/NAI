import { useState, useEffect } from 'react';
import { LenisProvider } from './components/LenisProvider';
import { Navbar, type PageRoute } from './components/Navbar';
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
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { ContactPage } from './components/ContactPage';
import { FAQPage } from './components/FAQPage';
import { AssessmentModal } from './components/AssessmentModal';
import { BookingModal } from './components/BookingModal';
import { PagePreloader } from './components/PagePreloader';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(false);
  const [prefillService, setPrefillService] = useState<string>('');
  const [assessmentData, setAssessmentData] = useState<Record<string, string> | undefined>(undefined);

  // Page Routing State ('home' | 'about' | 'services' | 'case-studies' | 'contact' | 'faq')
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/about' || hash === '#about') return 'about';
      if (hash === '#/services' || hash === '#services') return 'services';
      if (hash === '#/case-studies' || hash === '#case-studies') return 'case-studies';
      if (hash === '#/contact' || hash === '#contact') return 'contact';
      if (hash === '#/faq' || hash === '#faq') return 'faq';
    }
    return 'home';
  });

  // Synchronize route with browser history and URL hash
  useEffect(() => {
    const handleRouteCheck = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/about' || hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#/services' || hash === '#services') {
        setCurrentPage('services');
      } else if (hash === '#/case-studies' || hash === '#case-studies') {
        setCurrentPage('case-studies');
      } else if (hash === '#/contact' || hash === '#contact') {
        setCurrentPage('contact');
      } else if (hash === '#/faq' || hash === '#faq') {
        setCurrentPage('faq');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handleRouteCheck);
    window.addEventListener('hashchange', handleRouteCheck);
    return () => {
      window.removeEventListener('popstate', handleRouteCheck);
      window.removeEventListener('hashchange', handleRouteCheck);
    };
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Refined Smooth Preloader (active on initial visit)
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

        {/* Top Fixed Global Navigation Bar */}
        <Navbar
          onBookCall={() => handleOpenBooking()}
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />

        {/* Dynamic Page Views */}
        {currentPage === 'home' && (
          <main className="w-full">
            {/* 1. Hero Section (AI Orb Face 380px with 5s Auto Reactions) */}
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
              onExploreCapabilities={() => handleNavigate('services')}
            />

            {/* 5. Team & Capabilities Split */}
            <TeamSplitSection />

            {/* 6. Customer Success Story */}
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

            {/* 10. Expert Solutions Grid */}
            <BlueSolutionsSection
              onSelectSolution={(sol) => handleOpenBooking(sol)}
            />

            {/* 11. Unified Minimal Uncomfortable Truth & Technical Feasibility Section */}
            <CalloutBanner
              onBookCall={() => handleOpenBooking()}
            />
          </main>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onBackToHome={() => handleNavigate('home')}
            onBookCall={handleOpenBooking}
            onOpenAssessment={handleOpenAssessment}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onBackToHome={() => handleNavigate('home')}
            onBookCall={handleOpenBooking}
            onOpenAssessment={handleOpenAssessment}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'case-studies' && (
          <CaseStudiesPage
            onBackToHome={() => handleNavigate('home')}
            onBookCall={handleOpenBooking}
            onOpenAssessment={handleOpenAssessment}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onBackToHome={() => handleNavigate('home')}
            onBookCall={handleOpenBooking}
            onOpenAssessment={handleOpenAssessment}
          />
        )}

        {currentPage === 'faq' && (
          <FAQPage
            onBackToHome={() => handleNavigate('home')}
            onBookCall={handleOpenBooking}
            onOpenAssessment={handleOpenAssessment}
          />
        )}

        {/* Panoramic Gradient Footer */}
        <GradientFooter
          onBookCall={() => handleOpenBooking()}
          onNavigate={handleNavigate}
          onOpenAssessment={handleOpenAssessment}
        />

        {/* Global Interactive Modals */}
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
