import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Phone, Mail } from 'lucide-react';

const SansthaFooter = () => {
  return (
    <footer className="bg-transparent text-[#a63c06] pt-12 pb-6 border-t border-gray-200">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-8">
          
          {/* Col 1: Brand, Bio, Contact, Social */}
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="text-3xl font-serif text-[#a63c06] mb-4 font-bold self-start">
              Aastha Sevabhavi Sanstha
            </h2>
            
            <p className="text-[#c36f09] text-base mb-6 leading-relaxed font-sans pr-6 lg:pr-12">
              Aastha Sevabhavi Sanstha is a non-profit organization dedicated to serving humanity. We work tirelessly to provide food, clothing, and essential support to vulnerable mothers, orphanages, and families in need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div>
                <span className="block text-[#a63c06] font-bold text-base mb-2">Phone Number</span>
                <a href="tel:+918591902050" className="text-[#c36f09] text-base hover:text-[#a63c06] transition-colors flex items-center gap-2">
                  <Phone size={18} className="text-[#a63c06]" /> +91 85919 02050
                </a>
              </div>
              <div>
                <span className="block text-[#a63c06] font-bold text-base mb-2">Email Address</span>
                <a href="mailto:saadhviaasthaji@gmail.com" className="text-[#c36f09] text-base hover:text-[#a63c06] transition-colors flex items-center gap-2">
                  <Mail size={18} className="text-[#a63c06]" /> saadhviaasthaji@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-base font-semibold text-[#a63c06]">Follow Us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-[#a63c06]/20 flex items-center justify-center text-[#a63c06] hover:bg-[#a63c06] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-[#a63c06]/20 flex items-center justify-center text-[#a63c06] hover:bg-[#a63c06] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-[#a63c06]/20 flex items-center justify-center text-[#a63c06] hover:bg-[#a63c06] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <FaXTwitter size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-[#a63c06]/20 flex items-center justify-center text-[#a63c06] hover:bg-[#a63c06] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 lg:col-start-8">
            <h3 className="text-xl font-bold font-serif mb-4 text-[#a63c06]">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/sanstha/about" className="text-[#c36f09] text-base hover:text-[#a63c06] hover:translate-x-1 transition-all">About Us</Link>
              <Link to="/sanstha/our-works" className="text-[#c36f09] text-base hover:text-[#a63c06] hover:translate-x-1 transition-all">Our Works</Link>
              <Link to="/sanstha/gallery" className="text-[#c36f09] text-base hover:text-[#a63c06] hover:translate-x-1 transition-all">Gallery</Link>
              <Link to="/contact" className="text-[#c36f09] text-base hover:text-[#a63c06] hover:translate-x-1 transition-all">Contact</Link>
            </div>
          </div>

          {/* Col 3: Get Involved */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold font-serif mb-4 text-[#a63c06]">Get Involved</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/sanstha/roti-bank" className="text-[#c36f09] text-base hover:text-[#a63c06] hover:translate-x-1 transition-all">Roti Bank Initiative</Link>
              <Link to="/sanstha/donation" className="text-[#c36f09] text-base hover:text-[#a63c06] hover:translate-x-1 transition-all">Make a Donation</Link>
              <Link to="/sanstha/membership" className="text-[#c36f09] text-base hover:text-[#a63c06] hover:translate-x-1 transition-all">Become a Member</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#c36f09]">
          <p>&copy; {new Date().getFullYear()} Aastha Sevabhavi Sanstha . Powered by <a href="https://ri5ing.is-a.dev/" target="_blank" rel="noreferrer" className="font-semibold text-[#a63c06] hover:text-[#a63c06] transition-colors">ri5ing</a></p>
        </div>
      </div>
    </footer>
  );
};

export default SansthaFooter;
