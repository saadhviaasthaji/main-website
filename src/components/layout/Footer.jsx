import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-black pt-20 pb-8 border-t border-gray-200">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4">
            <img src="https://see.fontimg.com/api/rf5/7BWnK/OWIxZDJiOTU1MThlNDNiMGFkZWQ3ZGUwMjU4MTllMWYub3Rm/U2FhZGh2aSBBYXN0aGEgSmk/brother-signature.png?r=fs&h=70&w=1250&fg=000000&bg=FFFFFF&tb=1&s=56" alt="Saadhvi Aastha Ji Logo" className="h-10 object-contain mix-blend-multiply mb-6" />
            
            <p className="text-gray-600 text-xs mb-10 leading-relaxed font-sans pr-6">
              Saadhvi Aastha Ji is a renowned spiritual orator, author, motivational speaker, and devotional artist known for her heartfelt kathavachans and inspirational messages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <span className="block text-black font-bold text-sm mb-1">Phone Number</span>
                <a href="tel:+910000000000" className="text-gray-600 text-xs hover:text-black transition-colors flex items-center gap-2">
                  <Phone size={14} className="text-brand-charcoal" /> +91 00000 00000
                </a>
              </div>
              <div>
                <span className="block text-black font-bold text-sm mb-1">Email Address</span>
                <a href="mailto:contact@saadhviaasthaji.in" className="text-gray-600 text-xs hover:text-black transition-colors flex items-center gap-2">
                  <Mail size={14} className="text-brand-charcoal" /> contact@saadhviaasthaji.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Social */}
          <div className="lg:col-span-4">

            <div className="flex items-center gap-4 mt-8">
              <span className="text-xs text-gray-500">Social Media :</span>
              <div className="flex space-x-2">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                  <FaFacebookF size={12} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                  <FaInstagram size={12} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                  <FaXTwitter size={12} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                  <FaYoutube size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold font-serif mb-4 text-black">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/about" className="text-gray-600 text-xs hover:text-black transition-colors">About Saadhvi Aastha Ji</Link>

              <Link to="/booking" className="text-gray-600 text-xs hover:text-black transition-colors">Bookings</Link>
              <Link to="/contact" className="text-gray-600 text-xs hover:text-black transition-colors">Contact</Link>
            </div>
          </div>

          {/* Col 4: Initiatives */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold font-serif mb-4 text-black">Initiatives</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/sanstha" className="text-gray-600 text-xs hover:text-black transition-colors">Aastha Sanstha</Link>
              <Link to="/sanstha/roti-bank" className="text-gray-600 text-xs hover:text-black transition-colors">Roti Bank</Link>
              <Link to="/sanstha/donation" className="text-gray-600 text-xs hover:text-black transition-colors">Make a Donation</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Saadhvi Aastha Ji Ventures. Powered by <span className="font-semibold text-gray-700">PM Talents</span></p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
