import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../ui/Reveal';
import AnimatedText from '../../ui/AnimatedText';

const SansthaDonationBanner = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <Reveal>
          <div className="bg-gradient-to-br from-[#a63c06] via-[#852d03] to-[#5c1e02] text-white rounded-[2rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/pattern-light.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 font-medium tracking-tight">
              <AnimatedText section="sansthaHome" tKey="donTitle" />
            </h2>
            <p className="text-lg md:text-xl font-sans mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed font-light">
              <AnimatedText section="sansthaHome" tKey="donDesc" />
            </p>
            <Link to="/sanstha/donation" className="inline-block bg-transparent border border-white text-white font-bold font-sans py-4 px-10 rounded-full shadow-lg hover:bg-white hover:text-[#a63c06] transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest text-sm">
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
