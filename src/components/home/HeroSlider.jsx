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
      kicker: <AnimatedText section="home" tKey="heroSubtitle" uppercase />,
      title: <AnimatedText section="home" tKey="heroTitle" />,
      description: <AnimatedText section="home" tKey="heroTagline" />
    },
    {
      id: 2,
      kicker: "DEVOTION",
      title: <AnimatedText section="home" tKey="heroTitle" />,
      description: <AnimatedText section="home" tKey="heroQuote" />
    }
  ];

  return (
    <div 
      className="relative w-full h-screen bg-transparent overflow-hidden"
      style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
    >
      {/* Decorative Background Blob/Texture Placeholder */}
      <div className="absolute inset-0 z-0 opacity-30" style={{ background: 'radial-gradient(circle at 70% 30%, #e6e6e9 0%, transparent 60%), radial-gradient(circle at 30% 70%, #ffffff 0%, transparent 50%)' }}></div>
      
      {/* Top dark gradient to ensure navbar visibility */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-40 pointer-events-none"></div>
      
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
              <img 
                src={`https://picsum.photos/seed/${slide.id}/1920/1080`} 
                alt="Slide background" 
                className="w-full h-full object-cover" 
                fetchpriority={slide.id === 1 ? "high" : "auto"}
                loading={slide.id === 1 ? "eager" : "lazy"}
                decoding="async"
              />
              {/* Subtle Gradient Overlay to ensure text readability on the right */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white/90"></div>
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
          justify-center;
        }
        .custom-swiper .swiper-button-next:after,
        .custom-swiper .swiper-button-prev:after {
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
