import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SansthaNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll for sticky navbar effect and scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background change
      setIsScrolled(currentScrollY > 50);

      // Hide/Show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true);  // Scrolling up or at top
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/sanstha' },
    { name: 'About Us', path: '/sanstha/about' },
    { name: 'Our Works', path: '/sanstha/our-works' },
    { name: 'Roti Bank', path: '/sanstha/roti-bank' },
    { name: 'Gallery', path: '/sanstha/gallery' },
    { name: 'Donation', path: '/sanstha/donation' },
    { name: 'Membership', path: '/sanstha/membership' },
    { name: 'Founder', path: '/sanstha/founder' },
    { name: 'President', path: '/sanstha/president' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} bg-transparent py-4`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/sanstha">
                <img src="https://see.fontimg.com/api/rf5/7BWnK/OWIxZDJiOTU1MThlNDNiMGFkZWQ3ZGUwMjU4MTllMWYub3Rm/QWFzdGhhIFNldmFiaGF2aSBTYW5zdGhh/brother-signature.png?r=fs&h=70&w=1250&fg=000000&bg=FFFFFF&tb=1&s=56" alt="Aastha Sevabhavi Sanstha Logo" className={`h-10 md:h-12 object-contain transition-all duration-300 ${!isScrolled ? 'invert mix-blend-screen' : 'mix-blend-multiply'}`} />
              </Link>
            </div>

            {/* Right Side (CTA + Hamburger) */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="hidden md:block">
                <Link to="/" className="px-6 py-2.5 bg-transparent text-white border border-white font-semibold rounded-none transition-all hover:bg-white hover:text-black hover:scale-105 transform">
                  Saadhvi Aastha Ji
                </Link>
              </div>
              
              <button onClick={toggleMenu} className={`p-2 hover:bg-gray-200/50 hover:text-brand-charcoal rounded-full transition-colors ${!isScrolled && !isOpen ? 'text-white' : 'text-brand-charcoal'}`}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 bg-white/20 backdrop-blur-2xl z-40 overflow-hidden"
          >
            {/* Aurora Effect Background */}
            <div className="absolute inset-0 z-[-1] pointer-events-none">
              <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-[#000000]/10 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse"></div>
              <div className="absolute top-[40%] right-[20%] w-[35vw] h-[35vw] bg-gray-400/20 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-[20%] left-[40%] w-[25vw] h-[25vw] bg-gray-300/30 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="flex flex-col items-center justify-start min-h-full pt-28 pb-12 px-4 space-y-6 relative z-10 overflow-y-auto">
              {navLinks.map((link, idx) => (
                <div key={idx}>
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)} 
                    className="block text-brand-charcoal font-serif text-3xl md:text-4xl hover:text-black transition-all duration-300 hover:scale-105 transform drop-shadow-sm"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <div className="pt-12 w-full max-w-xs flex flex-col items-center gap-6">
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full text-center py-4 text-lg font-bold bg-white text-brand-charcoal rounded-none shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)} 
                  className="text-brand-charcoal hover:text-[#000000] font-sans tracking-widest uppercase text-xs font-bold transition-colors pb-1 border-b-2 border-transparent hover:border-[#000000]"
                >
                  Back to Main Site
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SansthaNavbar;
