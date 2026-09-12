import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

const BookingBanner = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <Reveal>
          <div className="bg-brand-blue text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-ephesis text-white mb-6 font-normal">
              Invite Saadhvi Aastha Ji for Katha
            </h2>
            <p className="text-lg md:text-xl font-sans mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Bring the profound teachings and peaceful aura of Saadhvi Aastha Ji to your community, organization, or special event.
            </p>
            <Link to="/booking" className="inline-block bg-white text-brand-blue font-bold font-sans py-4 px-10 rounded-none shadow-lg hover:bg-brand-charcoal hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              Book Now
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BookingBanner;
