import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SansthaNavbar from './components/layout/SansthaNavbar';
import Footer from './components/layout/Footer';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/layout/ScrollToTop';

// Lazy load Heavy Components
const GradientWaves = lazy(() => import('./components/ui/GradientWaves'));

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
const Founder = lazy(() => import('./pages/sanstha/Founder'));
const President = lazy(() => import('./pages/sanstha/President'));
const Donation = lazy(() => import('./pages/sanstha/Donation'));
const Membership = lazy(() => import('./pages/sanstha/Membership'));

// Loading Fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isSanstha = location.pathname.startsWith('/sanstha');

  return (
    <div className="app flex flex-col min-h-screen relative z-0">
      <Suspense fallback={null}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100dvh', zIndex: -1 }}>
          <GradientWaves
            horizonColor="#d1d5db"
            waveColor="#9ca3af"
            crestColor="#f3f4f6"
            speed={0.4}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={1.0}
            height={5.5}
            fogDepth={15}
            detail="medium"
            brightness={1.0}
            opacity={1.0}
            mouseInteraction={true}
            parallaxStrength={0.5}
            grain={true}
            grainIntensity={0.05}
          />
        </div>
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
            <Route path="/sanstha/founder" element={<Founder />} />
            <Route path="/sanstha/president" element={<President />} />
            <Route path="/sanstha/donation" element={<Donation />} />
            <Route path="/sanstha/membership" element={<Membership />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
