import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Bio */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Saadhvi Aastha Ji</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              A young spiritual journey rooted in devotion. Inspiring millions to embrace peace, values, and meaningful living through ancient wisdom.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-6">Contact Us</h3>
            <div className="mb-4">
              <span className="block text-sm text-gray-400 uppercase tracking-wider mb-1">Phone Number</span>
              <a href="tel:+910000000000" className="text-lg hover:text-brand-blue transition-colors">+91 00000 00000</a>
            </div>
            <div>
              <span className="block text-sm text-gray-400 uppercase tracking-wider mb-1">Email Address</span>
              <a href="mailto:contact@saadhviaasthaji.in" className="text-lg hover:text-brand-blue transition-colors">contact@saadhviaasthaji.in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-bold font-serif mb-3">Quick Links</h3>
            <Link to="/about" className="text-gray-400 hover:text-brand-blue transition-colors">About Journey</Link>
            <Link to="/booking" className="text-gray-400 hover:text-brand-blue transition-colors">Booking</Link>
            <Link to="/query" className="text-gray-400 hover:text-brand-blue transition-colors">Query / Doubts</Link>
            <Link to="/contact" className="text-gray-400 hover:text-brand-blue transition-colors">Contact</Link>
          </div>

          {/* Sanstha Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-bold font-serif mb-3">Sanstha Works</h3>
            <Link to="/sanstha" className="text-gray-400 hover:text-brand-blue transition-colors">Sanstha Home</Link>
            <Link to="/sanstha/about" className="text-gray-400 hover:text-brand-blue transition-colors">About Us</Link>
            <Link to="/sanstha/our-works" className="text-gray-400 hover:text-brand-blue transition-colors">Our Works</Link>
            <Link to="/sanstha/donation" className="text-gray-400 hover:text-brand-blue transition-colors">Donation</Link>
            <Link to="/sanstha/membership" className="text-gray-400 hover:text-brand-blue transition-colors">Membership</Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Saadhvi Aastha Ji. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
