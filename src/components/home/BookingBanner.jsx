import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import AnimatedText from '../ui/AnimatedText';

const BookingBanner = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      
      {/* Masked Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none"
        style={{ 
          backgroundImage: `url('/assets/pages/home/empowering/katha.webp')`,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        {/* Dark overlay specifically bounded inside the masked image so they fade together */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 flex flex-col justify-between min-h-[85vh]">
        
        {/* Top/Left Section: Title & Quote */}
        <div className="max-w-2xl mt-4 md:mt-12">
          <Reveal>
            {/* Title Block */}
            <div className="text-center md:text-left mb-8 md:mb-12">
              <h2 className="font-serif text-[#E8C881] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                <span className="block text-2xl md:text-3xl tracking-[0.2em] uppercase mb-2"><AnimatedText section="home" tKey="inviteTitle" /></span>
                <span className="block text-5xl md:text-7xl lg:text-[5.5rem] leading-none mb-2" style={{ fontVariant: 'small-caps' }}><AnimatedText section="home" tKey="inviteName" /></span>
                <span className="block text-2xl md:text-3xl tracking-[0.2em] uppercase"><AnimatedText section="home" tKey="inviteForKatha" /></span>
              </h2>
            </div>
            
            {/* Quote Box */}
            <div className="relative p-8 md:p-12 bg-[#2A1104]/85 backdrop-blur-md border border-[#C5A059] max-w-xl mx-auto md:mx-0 shadow-2xl">
              {/* Corner Ornaments */}
              <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-[#C5A059] opacity-70" />
              <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-[#C5A059] opacity-70" />
              <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-[#C5A059] opacity-70" />
              <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-[#C5A059] opacity-70" />

              {/* Decorative flourish lines */}
              <div className="absolute -top-1.5 left-12 w-4 h-4 rounded-full border border-[#C5A059] bg-[#2A1104] hidden md:block" />
              <div className="absolute -bottom-1.5 right-12 w-4 h-4 rounded-full border border-[#C5A059] bg-[#2A1104] hidden md:block" />
              
              <p className="text-xl md:text-3xl font-serif text-[#FDF4E3] leading-relaxed text-center drop-shadow-sm">
                <AnimatedText section="home" tKey="inviteQuote" />
              </p>
            </div>
          </Reveal>
        </div>

        {/* Bottom/Right Section: Button */}
        <div className="self-center md:self-end mt-16 md:mt-0 mb-4 md:mb-12">
          <Reveal delay={0.2}>
            <Link to="/booking" className="inline-block relative group">
              {/* Ornate Button Wrapper */}
              <div 
                className="relative bg-gradient-to-r from-[#e3c180] via-[#fef2d2] to-[#e3c180] text-[#3e1f06] px-12 md:px-16 py-4 md:py-5 shadow-[0_10px_30px_rgba(0,0,0,0.7)] transition-transform transform group-hover:scale-105 border-4 border-[#C5A059]/30"
                style={{
                  borderRadius: '30px 10px 30px 10px',
                }}
              >
                <span className="relative z-10 font-bold text-2xl md:text-3xl tracking-widest font-sans drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  <AnimatedText section="home" tKey="bookNow" />
                </span>
                
                {/* Inner button border detail */}
                <div 
                  className="absolute inset-1 border border-[#8B6530] opacity-50 pointer-events-none" 
                  style={{ borderRadius: '25px 6px 25px 6px' }}
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ borderRadius: '26px 6px 26px 6px' }} />
              </div>
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default BookingBanner;
