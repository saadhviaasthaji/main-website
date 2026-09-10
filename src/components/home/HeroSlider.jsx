import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

const HeroSlider = () => {
  const slides = [
    { bg: 'bg-[#4FA8D8]' }, 
    { bg: 'bg-[#2c739c]' },
    { bg: 'bg-[#2D3748]' }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        allowTouchMove={false}
        className="w-full h-full absolute inset-0 -z-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`w-full h-full ${slide.bg} flex items-center justify-center opacity-80`}>
               <span className="text-white/20 text-4xl font-serif">[Hero Image {index + 1}]</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 bg-black/20">
        <Reveal>
          <h1 className="text-7xl md:text-9xl font-script text-white mb-2 drop-shadow-md tracking-wider">
            Saadhvi Aastha Ji
          </h1>
          <p className="text-xl md:text-3xl font-sans text-white mb-8 font-light tracking-wide drop-shadow">
            [Spiritual Tagline Goes Here]
          </p>
          <p className="text-md md:text-lg text-gray-200 italic max-w-2xl mx-auto mb-12">
            "[Optional Devotional Quote Placeholder]"
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="btn-primary border border-transparent">
              Know More
            </Link>
            <Link to="/about" className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-white hover:text-brand-blue transition-colors duration-300 inline-block text-center">
              Explore Journey
            </Link>
            <Link to="/booking" className="btn-primary border border-transparent">
              Invite for Katha
            </Link>
            <Link to="/contact" className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-white hover:text-brand-blue transition-colors duration-300 inline-block text-center">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default HeroSlider;
