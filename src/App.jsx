import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Query from './pages/Query';
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

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/query" element={<Query />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<Terms />} />
            
            {/* Sanstha Routes */}
            <Route path="/sanstha" element={<SansthaHome />} />
            <Route path="/sanstha/about" element={<SansthaAbout />} />
            <Route path="/sanstha/works" element={<SansthaWorks />} />
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
    </Router>
  );
}

export default App;
