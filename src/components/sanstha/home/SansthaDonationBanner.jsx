import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../ui/Reveal';

const SansthaDonationBanner = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <Reveal>
          <div className="bg-[#a63c06] text-white rounded-[2rem] p-10 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 font-medium tracking-tight">
              Support Our Mission
            </h2>
            <p className="text-lg md:text-xl font-sans mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed font-light">
              Your contribution helps us provide food, clothing, and essential support to vulnerable mothers, orphanages, and families in need.
            </p>
            <Link to="/sanstha/donation" className="inline-block bg-transparent border border-white text-white font-bold font-sans py-4 px-10 rounded-full shadow-lg hover:bg-white hover:text-[#a63c06] transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest text-sm">
              Donate Now
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SansthaDonationBanner;
