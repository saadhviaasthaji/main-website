import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { Pivot as Hamburger } from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import AnimatedText from '../ui/AnimatedText';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isIdle, setIsIdle] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  // Handle scroll for sticky navbar effect and scroll direction
  useEffect(() => {
    let timeoutId;

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

      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsIdle(true);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    timeoutId = setTimeout(() => {
      setIsIdle(true);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: <AnimatedText section="nav" tKey="home" />, path: '/' },
    { name: <AnimatedText section="nav" tKey="about" />, path: '/about' },
    { name: <AnimatedText section="nav" tKey="events" />, path: '/events' },
    { name: <AnimatedText section="nav" tKey="booking" />, path: '/booking' },
    { name: <AnimatedText section="nav" tKey="contact" />, path: '/contact' }
  ];

  const useDarkText = true; // Always true because the new global background is pale
  const actuallyVisible = isOpen || (isVisible && (!isIdle || !isScrolled));
  const showBackground = isScrolled;

  return (
    <>
      <header
        onMouseEnter={() => setIsIdle(false)}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out transform-gpu will-change-transform ${actuallyVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${showBackground ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-b-3xl' : 'bg-transparent shadow-none rounded-b-none'} py-4`}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center max-w-[55vw]">
              <Link to="/" className="flex items-center gap-3 group relative w-40 h-16 sm:w-48 sm:h-20" aria-label="Home">
                <img
                  src="/assets/shared/logos/aastha-logo.webp"
                  alt="Aastha Logo"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>

            {/* Right Side (CTA + Hamburger) */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full border transition-all duration-300 ${!useDarkText ? 'text-white border-white/50 hover:bg-white/10' : 'text-[#a63c06] border-[#a63c06]/50 hover:bg-[#a63c06] hover:text-white'}`}
              >
                <Globe size={16} />
                <div className="relative w-4 h-5 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={language}
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -15, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute text-sm font-medium uppercase"
                    >
                      {language === 'en' ? 'EN' : 'HI'}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </button>
              <div className="hidden md:block">
                <Link to="/sanstha" className={`px-6 py-2.5 font-semibold rounded-none transition-all duration-300 hover:scale-105 transform border ${!useDarkText ? 'bg-transparent text-white border-white hover:bg-white hover:text-[#a63c06]' : 'bg-transparent text-[#a63c06] border-[#a63c06] hover:bg-[#a63c06] hover:text-white'}`}>
                  {<AnimatedText section="nav" tKey="sansthaWorks" />}
                </Link>
              </div>
              
              <div className={`transition-colors duration-300 rounded-full ${!useDarkText ? 'hover:bg-white/20' : 'hover:bg-[#a63c06]/10'}`}>
                <Hamburger 
                  toggled={isOpen} 
                  toggle={setIsOpen} 
                  color={!useDarkText ? '#ffffff' : '#1a1a1a'} 
                  size={26} 
                  rounded 
                />
              </div>
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
            className="fixed inset-0 top-0 bg-[#fbf5e6]/80 backdrop-blur-3xl z-40 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-start min-h-full pt-28 pb-12 px-4 space-y-6 relative z-10 overflow-y-auto">
              {navLinks.map((link, idx) => (
                <div key={idx}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-[#a63c06] font-serif text-3xl md:text-4xl hover:text-[#a63c06] transition-all duration-300 hover:scale-105 transform drop-shadow-sm"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <div className="pt-12 w-full max-w-xs flex flex-col items-center gap-6">
                <Link
                  to="/sanstha"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 text-lg font-bold bg-transparent border-2 border-[#a63c06] text-[#a63c06] rounded-none shadow-sm hover:bg-[#a63c06] hover:text-[#fbf5e6] transition-all hover:scale-105 transform"
                >
                  {<AnimatedText section="nav" tKey="sansthaWorks" />}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
