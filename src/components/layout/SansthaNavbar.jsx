import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SansthaNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-brand-lightgrey py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/sanstha">
              <img src="https://see.fontimg.com/api/rf5/7BWnK/OWIxZDJiOTU1MThlNDNiMGFkZWQ3ZGUwMjU4MTllMWYub3Rm/QWFzdGhhIFNldmFiaGF2aSBTYW5zdGhh/brother-signature.png?r=fs&h=70&w=1250&fg=000000&bg=FFFFFF&tb=1&s=56" alt="Aastha Sevabhavi Sanstha Logo" className="h-10 md:h-12 object-contain mix-blend-multiply" />
            </Link>
          </div>

          {/* Mobile/Desktop Hamburger Menu Button */}
          <div className="flex items-center">
            <button onClick={toggleMenu} className="text-brand-charcoal p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-white/85 backdrop-blur-xl z-40 overflow-y-auto border-t border-gray-200/50"
          >
            <div className="flex flex-col items-center justify-start min-h-full py-12 px-4 space-y-6">
              {navLinks.map((link, idx) => (
                <div key={idx}>
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)} 
                    className="block text-brand-charcoal font-serif text-3xl md:text-4xl hover:text-[#4FA8D8] transition-all duration-300 hover:scale-105 transform"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <div className="pt-12 w-full max-w-xs flex flex-col items-center gap-6">
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)} 
                  className="btn-primary w-full text-center py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)} 
                  className="text-brand-charcoal hover:text-[#4FA8D8] font-sans tracking-widest uppercase text-xs font-bold transition-colors pb-1 border-b-2 border-transparent hover:border-[#4FA8D8]"
                >
                  Back to Main Site
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SansthaNavbar;
