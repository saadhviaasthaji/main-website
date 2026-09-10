import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll for sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (name) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sanstha Works', path: '/sanstha' },
    { name: 'Query / Doubts', path: '/query' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src="https://see.fontimg.com/api/rf5/7BWnK/OWIxZDJiOTU1MThlNDNiMGFkZWQ3ZGUwMjU4MTllMWYub3Rm/U2FhZGh2aSBBYXN0aGEgSmk/brother-signature.png?r=fs&h=70&w=1250&fg=000000&bg=FFFFFF&tb=1&s=56" alt="Saadhvi Aastha Ji Logo" className="h-10 md:h-12 object-contain mix-blend-multiply" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                <Link to={link.path} className="text-brand-charcoal font-sans hover:text-brand-blue transition-colors">
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <Link to="/booking" className="btn-primary">
              Booking
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-brand-charcoal p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link, idx) => (
                <div key={idx} className="border-b border-gray-100 py-2">
                  <Link to={link.path} onClick={() => setIsOpen(false)} className="block py-2 text-brand-charcoal font-sans text-lg">
                    {link.name}
                  </Link>
                </div>
              ))}
              <div className="pt-6">
                <Link to="/booking" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center block">
                  Booking
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
