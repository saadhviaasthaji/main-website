import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import Reveal from '../ui/Reveal';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      kicker: "MOTIVATION BY SAADHVI AASTHA JI",
      title: "A VOICE THAT INSPIRES MILLIONS",
      description: "She carries an extraordinary passion for inspiring people. Through her insightful teachings on values and virtues, she shares what she believes are the true foundations of a meaningful life. Every word of her address is thoughtfully crafted to guide her audience toward happiness, clarity, and inner peace."
    },
    {
      id: 2,
      kicker: "DEVOTION BY SAADHVI AASTHA JI",
      title: "AWAKENING THE INNER SOUL",
      description: "Her melodious bhajans and spiritual kathas have a unique way of touching the heart. Join her journey of spreading divine love and experiencing profound tranquility through the timeless wisdom of our ancient scriptures."
    }
  ];

  return (
    <div className="relative w-full h-screen bg-[#f4f4f6] overflow-hidden">
      {/* Decorative Background Blob/Texture Placeholder */}
      <div className="absolute inset-0 z-0 opacity-30" style={{ background: 'radial-gradient(circle at 70% 30%, #e6e6e9 0%, transparent 60%), radial-gradient(circle at 30% 70%, #ffffff 0%, transparent 50%)' }}></div>
      
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
              <img src={`https://picsum.photos/seed/${slide.id}/1920/1080`} alt="Slide background" className="w-full h-full object-cover" />
              {/* Subtle Gradient Overlay to ensure text readability on the right */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white/90"></div>
            </div>

            <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center md:items-end text-center md:text-right relative z-10 pt-24 pb-12 md:pb-0">
              {/* Content Box (takes up roughly half the screen on desktop) */}
              <div className="w-full md:w-[60%] flex flex-col items-center md:items-end">
                <Reveal>
                  <span className="text-sm md:text-base font-bold tracking-widest uppercase text-brand-charcoal mb-4 block">
                    {slide.kicker}
                  </span>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-extrabold text-brand-charcoal mb-6 leading-[1.1] drop-shadow-sm">
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
