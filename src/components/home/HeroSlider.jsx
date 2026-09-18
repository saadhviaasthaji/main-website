import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import Reveal from '../ui/Reveal';
import { useLanguage } from '../../context/LanguageContext';
import AnimatedText from '../ui/AnimatedText';

const HeroSlider = () => {
  const { language } = useLanguage();
  const slides = [
    {
      id: 1,
      image: "/assets/pages/home/hero/desktop-1.webp",
      mobileImage: "/assets/pages/home/hero/mobile-1.webp",
      kicker: "",
      title: "",
      description: ""
    },
    {
      id: 2,
      image: "/assets/pages/home/hero/desktop-2.webp",
      mobileImage: "/assets/pages/home/hero/mobile-2.webp",
      kicker: "",
      title: "",
      description: ""
    },
    {
      id: 3,
      image: "/assets/pages/home/hero/desktop-3.webp",
      mobileImage: "/assets/pages/home/hero/mobile-3.webp",
      kicker: "",
      title: "",
      description: ""
    },
    {
      id: 4,
      image: "/assets/pages/home/hero/desktop-4.webp",
      mobileImage: "/assets/pages/home/hero/mobile-4.webp",
      kicker: "",
      title: "",
      description: ""
    },
    {
      id: 5,
      image: "/assets/pages/home/hero/desktop-5.webp",
      mobileImage: "/assets/pages/home/hero/mobile-5.webp",
      kicker: "",
      title: "",
      description: ""
    }
  ];

  return (
    <div
      className="relative w-full h-[85vh] md:h-screen bg-transparent overflow-hidden"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
      }}
    >


      {/* The solid bottom gradient fade was removed in favor of the CSS mask-image on the wrapper for true transparency blending */}

      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation={true}
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full z-10 custom-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Full Slide Background Image */}
            <div className="absolute inset-0 w-full h-full">
              {/* Placeholder Image - swap URL for actual images */}
              <picture>
                <source media="(min-width: 768px)" srcSet={slide.image} />
                <img
                  src={slide.mobileImage}
                  alt="Slide background"
                  className="w-full h-full object-cover"
                  fetchpriority={slide.id === 1 ? "high" : "auto"}
                  loading={slide.id === 1 ? "eager" : "lazy"}
                  decoding="async"
                />
              </picture>
            </div>

            <div className="w-full h-full w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center md:items-end text-center md:text-right relative z-10 pt-24 pb-12 md:pb-0">
              {/* Content Box (takes up roughly half the screen on desktop, with right padding to clear the navigation arrow) */}
              <div className="w-full md:w-[60%] flex flex-col items-center md:items-end md:pr-12 lg:pr-20">
                <Reveal>
                  <span className="text-sm md:text-base font-bold tracking-widest uppercase text-[#a63c06] mb-4 block">
                    {slide.kicker}
                  </span>

                  <p className="text-lg md:text-xl text-[#c36f09] font-serif max-w-lg ml-auto leading-relaxed drop-shadow-sm">
                    {slide.description}
                  </p>
                </Reveal>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-0 md:-bottom-2 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
        <span className="text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-[#4a1a03] font-black mb-2 drop-shadow-md bg-white/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/40 shadow-lg">Scroll Down</span>
        <div className="w-[2px] h-8 md:h-12 bg-white/50 relative overflow-hidden rounded-full shadow-md backdrop-blur-sm border border-white/20">
          <div className="w-full h-1/2 bg-[#4a1a03] absolute top-0 left-0 rounded-full animate-scroll-indicator"></div>
        </div>
      </div>

      <style>{`
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          color: black;
          background-color: transparent;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .custom-swiper .swiper-button-next:after,
        .custom-swiper .swiper-button-prev:after {
          font-size: 24px;
          font-weight: bold;
        }
        
        @keyframes scrollDownAnim {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-scroll-indicator {
          animation: scrollDownAnim 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
