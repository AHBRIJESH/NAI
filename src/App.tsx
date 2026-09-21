import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JourneyNavigator } from './components/JourneyNavigator';
import { SolutionsGrid } from './components/SolutionsGrid';
import { ImpactCalculator } from './components/ImpactCalculator';
import { FAQPage } from './components/FAQPage';
import { CalloutBanner } from './components/CalloutBanner';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';
import { BookingModal } from './components/BookingModal';
import { PagePreloader } from './components/PagePreloader';
import { NeuralEngineSection } from './components/NeuralEngineSection';

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

  // Refined Minimal Preloader (active on first visit)
  const [preloaderActive, setPreloaderActive] = useState<boolean>(true);

  const handleOpenBooking = (serviceName?: string) => {
    setPrefillService(serviceName || 'AI Strategy & Readiness');
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

  const handleSelectJourneyPath = (pathId: string) => {
    if (pathId === 'solutions') {
      const el = document.getElementById('solutions');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (pathId === 'automation') {
      const el = document.getElementById('calculator');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (pathId === 'training') {
      const el = document.getElementById('solutions');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDEE] text-[#06231D] selection:bg-[#E3EF26] selection:text-[#06231D]">
      {/* Refined Smooth Logo Reveal Preloader */}
      {preloaderActive && (
        <PagePreloader
          duration={1300}
          onComplete={() => setPreloaderActive(false)}
        />
      )}

      {/* Top Navigation */}
      <Navbar
        onBookCall={() => handleOpenBooking()}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {currentPage === 'home' ? (
        <>
          {/* Side-by-Side Hero Section */}
          <Hero
            onBookCall={() => handleOpenBooking()}
            onOpenAssessment={handleOpenAssessment}
          />

          {/* Dedicated Interactive Fluid Orb Neural Engine Section */}
          <NeuralEngineSection
            onOpenAssessment={handleOpenAssessment}
            onBookCall={() => handleOpenBooking('Autonomous Neural Engine')}
          />

          {/* "Where are you in your AI journey?" Navigator */}
          <JourneyNavigator
            onOpenAssessment={handleOpenAssessment}
            onSelectPath={handleSelectJourneyPath}
            isCinematicDark={false}
          />

          {/* Solutions & Capabilities Grid */}
          <SolutionsGrid
            onBookCall={(service) => handleOpenBooking(service)}
            isCinematicDark={false}
          />

          {/* Interactive ROI Impact Estimator */}
          <ImpactCalculator
            onBookCall={() => handleOpenBooking('Operational Automation')}
            isCinematicDark={false}
          />

          {/* Creative Razor-Sharp Ransom Note Editorial Callout — Positioned above the Footer */}
          <CalloutBanner />
        </>
      ) : (
        /* Dedicated Full-Sized FAQ Page */
        <FAQPage
          onBackToHome={() => handleNavigate('home')}
          onBookCall={handleOpenBooking}
          onOpenAssessment={handleOpenAssessment}
        />
      )}

      {/* Footer */}
      <Footer
        onBookCall={() => handleOpenBooking()}
        isCinematicDark={false}
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
  );
}

export default App;
