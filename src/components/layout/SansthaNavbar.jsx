import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Heart } from 'lucide-react';
import { Pivot as Hamburger } from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import AnimatedText from '../ui/AnimatedText';

const SansthaNavbar = () => {
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

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: <AnimatedText section="sansthaNav" tKey="home" />, path: '/sanstha' },
    { name: <AnimatedText section="sansthaNav" tKey="about" />, path: '/sanstha/about' },
    { name: <AnimatedText section="sansthaNav" tKey="rotiBank" />, path: '/sanstha/roti-bank' },
    { name: <AnimatedText section="sansthaNav" tKey="gallery" />, path: '/sanstha/gallery' },
    { name: <AnimatedText section="sansthaNav" tKey="members" />, path: '/sanstha/members' }
  ];

  const isSansthaHomePage = location.pathname === '/sanstha' || location.pathname === '/sanstha/';
  const useDarkText = isScrolled || isOpen || !isSansthaHomePage;
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
              <Link to="/sanstha">
                <img src="/assets/shared/logos/sanstha-logo.webp" alt="Aastha Sevabhavi Sanstha Logo" className="h-12 md:h-16 w-full object-contain transition-all duration-300" />
              </Link>
            </div>

            {/* Right Side (CTA + Hamburger) */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full border transition-all ${!useDarkText ? 'text-white border-white/50 hover:bg-white/10' : 'text-[#a63c06] border-gray-300 hover:bg-gray-100'}`}
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
                <Link to="/sanstha/donation" className={`hidden md:flex items-center space-x-2 px-6 py-2.5 font-bold transition-all duration-300 transform border rounded shadow-md ${!useDarkText ? 'bg-[#a63c06] text-white border-[#a63c06] hover:bg-white hover:text-[#a63c06]' : 'bg-[#a63c06] text-white border-[#a63c06] hover:bg-transparent hover:text-[#a63c06] hover:border-[#a63c06]'}`}>
                  <Heart size={18} className="animate-pulse" />
                  <span>{<AnimatedText section="sansthaNav" tKey="donation" />}</span>
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
                  to="/sanstha/donation" 
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-4 text-lg font-bold bg-[#a63c06] text-white rounded shadow-md border-2 border-[#a63c06] hover:bg-transparent hover:text-[#a63c06] transition-all duration-300 transform"
                >
                  <Heart size={20} className="animate-pulse" />
                  <span>{<AnimatedText section="sansthaNav" tKey="donation" />}</span>
                </Link>
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)} 
                  className="text-[#a63c06] hover:text-[#000000] font-sans tracking-widest uppercase text-xs font-bold transition-colors pb-1 border-b-2 border-transparent hover:border-[#000000]"
                >
                  <AnimatedText section="sansthaNav" tKey="backToMain" />
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
