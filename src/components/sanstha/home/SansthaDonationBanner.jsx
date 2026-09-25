import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from '../../ui/AnimatedText';
import Reveal from '../../ui/Reveal';

const SansthaDonationBanner = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <Reveal>
          <div className="bg-[#a63c06] text-white rounded-[2rem] p-10 md:p-16 md:flex md:items-center md:justify-between shadow-2xl">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                <AnimatedText section="sansthaHome" tKey="donTitle" />
              </h2>
              <p className="text-gray-200 text-lg font-light max-w-2xl">
                <AnimatedText section="sansthaHome" tKey="donDesc" />
              </p>
            </div>
            <div className="md:w-1/3 flex md:justify-end">
              <Link to="/sanstha/donation" className="bg-white text-[#a63c06] hover:bg-gray-100 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors shadow-lg">
                <AnimatedText section="sansthaHome" tKey="donBtn" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SansthaDonationBanner;
