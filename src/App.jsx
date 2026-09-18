import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SansthaNavbar from './components/layout/SansthaNavbar';
import Footer from './components/layout/Footer';
import SansthaFooter from './components/layout/SansthaFooter';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/layout/ScrollToTop';

// Lazy load Heavy Components
const GradientWaves = lazy(() => import('./components/ui/GradientWaves'));
import SignatureText from './components/ui/SignatureText';

// Lazy load Main Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Booking = lazy(() => import('./pages/Booking'));
const Contact = lazy(() => import('./pages/Contact'));
const Events = lazy(() => import('./pages/Events'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

// Lazy load Sanstha Pages
const SansthaHome = lazy(() => import('./pages/sanstha/SansthaHome'));
const SansthaAbout = lazy(() => import('./pages/sanstha/SansthaAbout'));
const SansthaWorks = lazy(() => import('./pages/sanstha/SansthaWorks'));
const RotiBank = lazy(() => import('./pages/sanstha/RotiBank'));
const Gallery = lazy(() => import('./pages/sanstha/Gallery'));
const Donation = lazy(() => import('./pages/sanstha/Donation'));
const Members = lazy(() => import('./pages/sanstha/Members'));

// Loading Fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <SignatureText width="200px" />
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isSanstha = location.pathname.startsWith('/sanstha');

  return (
    <div className="app flex flex-col min-h-screen relative z-0">
      <Suspense fallback={null}>
        {/* Global Website Background */}
        <div 
          className="fixed top-0 left-0 w-full h-[100vh] h-[100dvh] z-[-1] bg-[#fbf5e6] bg-cover bg-center bg-no-repeat bg-[url('/assets/pages/background/mandala_mobile.webp')] md:bg-[url('/assets/pages/background/mandala_web.webp')]"
        />
      </Suspense>
      <ScrollToTop />
      {isSanstha ? <SansthaNavbar /> : <Navbar />}
      <main className="main-content flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<Terms />} />
            
            {/* Sanstha Routes */}
            <Route path="/sanstha" element={<SansthaHome />} />
            <Route path="/sanstha/about" element={<SansthaAbout />} />
            <Route path="/sanstha/our-works" element={<SansthaWorks />} />
            <Route path="/sanstha/roti-bank" element={<RotiBank />} />
            <Route path="/sanstha/gallery" element={<Gallery />} />
            <Route path="/sanstha/members" element={<Members />} />
            <Route path="/sanstha/donation" element={<Donation />} />
          </Routes>
        </Suspense>
      </main>
      {isSanstha ? <SansthaFooter /> : <Footer />}
    </div>
  );
};

import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // The SVG animation takes around 1.72s to complete fully.
    // We add a small buffer so the user can read it.
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <AnimatePresence mode="wait">
          {initialLoading ? (
            <motion.div
              key="splash"
              exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            >
              <SignatureText width="800px" className="w-full max-w-3xl px-4" />
            </motion.div>
          ) : (
            <motion.div
              key="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }}
              className="w-full min-h-screen"
            >
              <AppContent />
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
    </LanguageProvider>
  );
}

export default App;
