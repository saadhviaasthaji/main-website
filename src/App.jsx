import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SansthaNavbar from './components/layout/SansthaNavbar';
import Footer from './components/layout/Footer';
import { LanguageProvider } from './context/LanguageContext';
// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Events from './pages/Events';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

// Sanstha Pages
import SansthaHome from './pages/sanstha/SansthaHome';
import SansthaAbout from './pages/sanstha/SansthaAbout';
import SansthaWorks from './pages/sanstha/SansthaWorks';
import RotiBank from './pages/sanstha/RotiBank';
import Gallery from './pages/sanstha/Gallery';
import Founder from './pages/sanstha/Founder';
import President from './pages/sanstha/President';
import Donation from './pages/sanstha/Donation';
import Membership from './pages/sanstha/Membership';
import ScrollToTop from './components/layout/ScrollToTop';
import SplashCursor from './components/ui/SplashCursor';
import GradientWaves from './components/ui/GradientWaves';

const AppContent = () => {
  const location = useLocation();
  const isSanstha = location.pathname.startsWith('/sanstha');

  return (
    <div className="app flex flex-col min-h-screen relative z-0">
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
      <SplashCursor 
        DENSITY_DISSIPATION={1.5}
        VELOCITY_DISSIPATION={2.5}
        CURL={8}
        SPLAT_RADIUS={0.56}
        SPLAT_FORCE={9500}
        RAINBOW_MODE={false}
        COLOR="#d3d3d3"
      />
      <ScrollToTop />
      {isSanstha ? <SansthaNavbar /> : <Navbar />}
      <main className="main-content flex-grow">
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
