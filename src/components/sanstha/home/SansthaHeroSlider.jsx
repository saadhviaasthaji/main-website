import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import Reveal from '../../ui/Reveal';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslation } from '../../../data/translations';

const SansthaHeroSlider = () => {
  const { language } = useLanguage();
  const slides = [
    {
      id: 1,
      kicker: "WELCOME TO",
      title: "Aastha Sevabhavi Sanstha",
      description: "Where devotion transforms into service."
    },
    {
      id: 2,
      kicker: "SEVA",
      title: "Service to Humanity",
      description: "Eradicating hunger, one meal at a time."
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
            <div className="absolute inset-0 w-full h-full">
              <img src={`https://picsum.photos/seed/${slide.id + 10}/1920/1080`} alt="Slide background" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white/90"></div>
            </div>

            <div className="w-full h-full w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center md:items-end text-center md:text-right relative z-10 pt-24 pb-12 md:pb-0">
              <div className="w-full md:w-[60%] flex flex-col items-center md:items-end">
                <Reveal>
                  <span className="text-sm md:text-base font-bold tracking-widest uppercase text-brand-charcoal mb-4 block">
                    {slide.kicker}
                  </span>
                  <h1 className={`text-6xl md:text-8xl lg:text-9xl ${language === 'hi' ? 'font-kalam' : 'font-ephesis'} text-brand-charcoal mb-6 leading-[1.1] drop-shadow-sm font-normal`}>
                    {slide.title}
                  </h1>
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
      `}</style>
    </div>
  );
};

export default SansthaHeroSlider;
