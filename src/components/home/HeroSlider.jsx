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
      {/* Decorative Background Blob/Texture Placeholder */}
      <div className="absolute inset-0 z-0 opacity-30" style={{ background: 'radial-gradient(circle at 70% 30%, #e6e6e9 0%, transparent 60%), radial-gradient(circle at 30% 70%, #ffffff 0%, transparent 50%)' }}></div>

      {/* Top left white cloud blur effect to highlight logo */}
      <div className="absolute -top-[10%] -left-[10%] w-[80%] max-w-[600px] h-[40%] max-h-[400px] bg-white rounded-full mix-blend-normal filter blur-[80px] md:blur-[120px] opacity-90 z-40 pointer-events-none"></div>

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
                  <span className="text-sm md:text-base font-bold tracking-widest uppercase text-brand-charcoal mb-4 block">
                    {slide.kicker}
                  </span>

                  <p className="text-lg md:text-xl text-gray-800 font-serif max-w-lg ml-auto leading-relaxed drop-shadow-sm">
                    {slide.description}
                  </p>
                </Reveal>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
        @keyframes scroll-wheel {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll-wheel {
          animation: scroll-wheel 1.5s infinite;
        }
      `}</style>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-brand-charcoal rounded-full flex justify-center p-1 opacity-70">
          <div className="w-1.5 h-2 bg-brand-charcoal rounded-full animate-scroll-wheel"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
