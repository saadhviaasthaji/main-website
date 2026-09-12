import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

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

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (name) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';
  const useDarkText = isScrolled || isOpen || !isHomePage;
  const showBackground = isScrolled && !isIdle;

  return (
    <>
      <header 
        onMouseEnter={() => setIsIdle(false)}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${showBackground ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-b-3xl' : 'bg-transparent shadow-none rounded-b-none'} py-4`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center max-w-[55vw]">
              <Link to="/">
                <img src="https://see.fontimg.com/api/rf5/7BWnK/OWIxZDJiOTU1MThlNDNiMGFkZWQ3ZGUwMjU4MTllMWYub3Rm/U2FhZGh2aSBBYXN0aGEgSmk/brother-signature.png?r=fs&h=70&w=1250&fg=000000&bg=FFFFFF&tb=1&s=56" alt="Saadhvi Aastha Ji Logo" className={`h-8 md:h-12 w-full object-contain transition-all duration-300 ${!useDarkText ? 'invert mix-blend-screen' : 'mix-blend-multiply'}`} />
              </Link>
            </div>

            {/* Right Side (CTA + Hamburger) */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full border transition-all ${!useDarkText ? 'text-white border-white/50 hover:bg-white/10' : 'text-brand-charcoal border-gray-300 hover:bg-gray-100'}`}
              >
                <Globe size={16} />
                <span className="text-sm font-medium uppercase">{language === 'en' ? 'EN' : 'HI'}</span>
              </button>
              <div className="hidden md:block">
                <Link to="/sanstha" className={`px-6 py-2.5 font-semibold rounded-none transition-all hover:scale-105 transform border ${!useDarkText ? 'bg-transparent text-white border-white hover:bg-white hover:text-black' : 'bg-brand-charcoal text-white border-brand-charcoal hover:bg-black'}`}>
                  Sanstha Works
                </Link>
              </div>
              
              <button onClick={toggleMenu} className={`p-2 hover:bg-gray-200/50 hover:text-brand-charcoal rounded-full transition-colors ${!useDarkText ? 'text-white' : 'text-brand-charcoal'}`}>
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
            className="fixed inset-0 top-0 bg-white/90 backdrop-blur-3xl z-40 overflow-hidden"
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
                  to="/sanstha" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full text-center py-4 text-lg font-bold bg-white text-brand-charcoal rounded-none shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
                >
                  Sanstha Works
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
