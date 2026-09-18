import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-black pt-12 pb-6 border-t border-gray-200">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-8">

          {/* Col 1: Brand, Bio, Contact, Social */}
          <div className="lg:col-span-6 flex flex-col">
            <img
              src="/assets/shared/logos/aastha-logo.webp"
              alt="Saadhvi Aastha Ji Logo"
              className="h-16 md:h-20 object-contain mb-4 self-start"
            />

            <p className="text-brand-charcoal/80 text-base mb-6 leading-relaxed font-sans pr-6 lg:pr-12">
              Saadhvi Aastha Ji is a renowned spiritual orator, author, motivational speaker, and devotional artist known for her heartfelt kathavachans and inspirational messages.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div>
                <span className="block text-brand-charcoal font-bold text-base mb-2">Phone Number</span>
                <a href="tel:+918591902050" className="text-brand-charcoal/80 text-base hover:text-black transition-colors flex items-center gap-2">
                  <Phone size={18} className="text-brand-charcoal" /> +91 85919 02050
                </a>
              </div>
              <div>
                <span className="block text-brand-charcoal font-bold text-base mb-2">Email Address</span>
                <a href="mailto:saadhviaasthaji@gmail.com" className="text-brand-charcoal/80 text-base hover:text-black transition-colors flex items-center gap-2">
                  <Mail size={18} className="text-brand-charcoal" /> saadhviaasthaji@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-base font-semibold text-brand-charcoal">Follow Us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-brand-charcoal/20 flex items-center justify-center text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-brand-charcoal/20 flex items-center justify-center text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-brand-charcoal/20 flex items-center justify-center text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <FaXTwitter size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-brand-charcoal/20 flex items-center justify-center text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 lg:col-start-8">
            <h3 className="text-xl font-bold font-serif mb-4 text-brand-charcoal">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/about" className="text-brand-charcoal/80 text-base hover:text-brand-charcoal hover:translate-x-1 transition-all">About Saadhvi Aastha Ji</Link>
              <Link to="/booking" className="text-brand-charcoal/80 text-base hover:text-brand-charcoal hover:translate-x-1 transition-all">Bookings</Link>
              <Link to="/contact" className="text-brand-charcoal/80 text-base hover:text-brand-charcoal hover:translate-x-1 transition-all">Contact</Link>
            </div>
          </div>

          {/* Col 3: Initiatives */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold font-serif mb-4 text-brand-charcoal">Initiatives</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/sanstha" className="text-brand-charcoal/80 text-base hover:text-brand-charcoal hover:translate-x-1 transition-all">Aastha Sanstha</Link>
              <Link to="/sanstha/roti-bank" className="text-brand-charcoal/80 text-base hover:text-brand-charcoal hover:translate-x-1 transition-all">Roti Bank</Link>
              <Link to="/sanstha/donation" className="text-brand-charcoal/80 text-base hover:text-brand-charcoal hover:translate-x-1 transition-all">Make a Donation</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-brand-charcoal/80">
          <p>&copy; {new Date().getFullYear()} Saadhvi Aastha Ji . Powered by <a href="https://ri5ing.is-a.dev/" target="_blank" rel="noreferrer" className="font-semibold text-brand-charcoal hover:text-black transition-colors">ri5ing</a></p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
