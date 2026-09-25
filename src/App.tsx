import { useState, useEffect } from 'react';
import { LenisProvider } from './components/LenisProvider';
import { Navbar, type PageRoute, type IndustrySector } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTrustBar } from './components/LogoTrustBar';
import { NeuralEngineSection } from './components/NeuralEngineSection';
import { IntelligenceEvolution } from './components/IntelligenceEvolution';
import { BlueStatsSection } from './components/BlueStatsSection';
import { TeamSplitSection } from './components/TeamSplitSection';
import { CustomerSuccessSection } from './components/CustomerSuccessSection';
import { CalloutBanner } from './components/CalloutBanner';
import { SuccessByNumbersSection } from './components/SuccessByNumbersSection';
import { ImpactCalculator } from './components/ImpactCalculator';
import { BlueSolutionsSection } from './components/BlueSolutionsSection';
import { GradientFooter } from './components/GradientFooter';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { IndustriesPage } from './components/IndustriesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { ContactPage } from './components/ContactPage';
import { FAQPage } from './components/FAQPage';
import { ArtificialIntelligencePage } from './components/ArtificialIntelligencePage';
import { DataAndAIFoundationPage } from './components/DataAndAIFoundationPage';
import { AssessmentModal } from './components/AssessmentModal';
import { BookingModal } from './components/BookingModal';
import { PagePreloader } from './components/PagePreloader';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(false);
  const [prefillService, setPrefillService] = useState<string>('');
  const [assessmentData, setAssessmentData] = useState<Record<string, string> | undefined>(undefined);

  // Page Routing State ('home' | 'about' | 'services' | 'industries' | 'resources' | 'case-studies' | 'contact' | 'faq')
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/about' || hash === '#about') return 'about';
      if (hash === '#/services/artificial-intelligence' || hash === '#services/artificial-intelligence' || hash === '#/artificial-intelligence' || hash === '#artificial-intelligence') return 'artificial-intelligence';
      if (hash === '#/services/data-and-ai' || hash === '#services/data-and-ai' || hash === '#/data-and-ai' || hash === '#data-and-ai') return 'data-and-ai';
      if (hash === '#/services' || hash === '#services') return 'services';
      if (hash.startsWith('#/industries') || hash.startsWith('#industries')) return 'industries';
      if (hash === '#/resources' || hash === '#resources') return 'resources';
      if (hash === '#/case-studies' || hash === '#case-studies') return 'case-studies';
      if (hash === '#/contact' || hash === '#contact' || hash === '#/contact-us' || hash === '#contact-us' || hash === '#/book-call' || hash === '#book-call') return 'contact';
      if (hash === '#/faq' || hash === '#faq') return 'faq';
    }
    return 'home';
  });

  // Track specific industry sector ('healthcare' | 'finance' | 'legal')
  const [selectedIndustrySector, setSelectedIndustrySector] = useState<IndustrySector | undefined>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('healthcare')) return 'healthcare';
      if (hash.includes('finance')) return 'finance';
      if (hash.includes('legal')) return 'legal';
    }
    return undefined;
  });

  // Synchronize route with browser history and URL hash
  useEffect(() => {
    const handleRouteCheck = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/about' || hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#/services/artificial-intelligence' || hash === '#services/artificial-intelligence' || hash === '#/artificial-intelligence' || hash === '#artificial-intelligence') {
        setCurrentPage('artificial-intelligence');
      } else if (hash === '#/services/data-and-ai' || hash === '#services/data-and-ai' || hash === '#/data-and-ai' || hash === '#data-and-ai') {
        setCurrentPage('data-and-ai');
      } else if (hash === '#/services' || hash === '#services') {
        setCurrentPage('services');
      } else if (hash.startsWith('#/industries') || hash.startsWith('#industries')) {
        setCurrentPage('industries');
        if (hash.includes('healthcare')) {
          setSelectedIndustrySector('healthcare');
        } else if (hash.includes('finance')) {
          setSelectedIndustrySector('finance');
        } else if (hash.includes('legal')) {
          setSelectedIndustrySector('legal');
        }
      } else if (hash === '#/resources' || hash === '#resources') {
        setCurrentPage('resources');
      } else if (hash === '#/case-studies' || hash === '#case-studies') {
        setCurrentPage('case-studies');
      } else if (hash === '#/contact' || hash === '#contact' || hash === '#/contact-us' || hash === '#contact-us' || hash === '#/book-call' || hash === '#book-call') {
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

  const handleNavigate = (page: PageRoute, sector?: IndustrySector) => {
    setCurrentPage(page);
    if (page === 'industries' && sector) {
      setSelectedIndustrySector(sector);
      window.location.hash = `#/${page}/${sector}`;
    } else if (page === 'artificial-intelligence') {
      window.location.hash = `#/services/artificial-intelligence`;
    } else if (page === 'data-and-ai') {
      window.location.hash = `#/services/data-and-ai`;
    } else if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Refined Smooth Preloader (active on initial visit)
  const [preloaderActive, setPreloaderActive] = useState<boolean>(true);

  // Directly navigate to Contact Us page where full booking calendar & scheduler lives
  const handleOpenBooking = (serviceName?: string) => {
    setPrefillService(serviceName || 'Enterprise AI Strategy & Delivery');
    handleNavigate('contact');
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
          onOpenAssessment={handleOpenAssessment}
        />

        {/* Dynamic Page Views */}
        {currentPage === 'home' && (
          <main className="w-full">
            {/* 1. Hero Section (AI Orb Face 380px with 5s Auto Reactions) */}
            <Hero
              onBookCall={() => handleOpenBooking()}
              onOpenAssessment={handleOpenAssessment}
            />

            {/* 2. Proprietary Multi-Agent Inference Engine Section */}
            <NeuralEngineSection
              onOpenAssessment={handleOpenAssessment}
              onBookCall={() => handleOpenBooking('Autonomous Neural Core Engine')}
            />

            {/* 3. AI -> AGI -> ASI Cognitive Evolution Roadmap */}
            <IntelligenceEvolution
              onBookCall={() => handleOpenBooking('AI to AGI Roadmap')}
              onExploreCapabilities={() => handleNavigate('services')}
            />

            {/* 4. Royal Blue Stats Section ("AI, Software, and Data. Built to Ship.") */}
            <BlueStatsSection
              onExploreCapabilities={() => handleNavigate('services')}
            />

            {/* 5. Team & Capabilities Split */}
            <TeamSplitSection />

            {/* 6. Customer Success Story */}
            <CustomerSuccessSection
              onSelectCaseStudy={() => handleNavigate('case-studies')}
            />

            {/* 8. Success by the Numbers Circular Diagram */}
            <SuccessByNumbersSection />

            {/* 9. Interactive ROI Impact Estimator */}
            <ImpactCalculator
              onBookCall={() => handleOpenBooking('Operational Automation ROI')}
            />

            {/* 10. Expert Solutions Grid */}
            <BlueSolutionsSection
              onSelectSolution={() => handleNavigate('services')}
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

        {currentPage === 'artificial-intelligence' && (
          <ArtificialIntelligencePage
            onBackToHome={() => handleNavigate('home')}
            onBookCall={handleOpenBooking}
            onOpenAssessment={handleOpenAssessment}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'data-and-ai' && (
          <DataAndAIFoundationPage
            onBackToHome={() => handleNavigate('home')}
            onBookCall={handleOpenBooking}
            onOpenAssessment={handleOpenAssessment}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            onBackToHome={() => handleNavigate('home')}
            onBookCall={handleOpenBooking}
            onOpenAssessment={handleOpenAssessment}
            onNavigate={handleNavigate}
            initialSector={selectedIndustrySector}
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

        {(currentPage === 'faq' || currentPage === 'resources') && (
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
