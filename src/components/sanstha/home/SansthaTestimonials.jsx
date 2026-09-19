import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Reveal from '../../ui/Reveal';
import Kicker from '../../ui/Kicker';
import AnimatedText from '../../ui/AnimatedText';

const SansthaTestimonials = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      nameKey: "test1Name",
      locationKey: "test1Loc",
      roleKey: "test1Role",
      textKey: "test1Text"
    },
    {
      id: 2,
      nameKey: "test2Name",
      locationKey: "test2Loc",
      roleKey: "test2Role",
      textKey: "test2Text"
    }
  ];

  return (
    <section className="py-32 bg-transparent">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Header & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <Reveal>
            <Kicker className="mb-4 opacity-70"><AnimatedText section="sansthaHome" tKey="testKicker" /></Kicker>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-[#a63c06] tracking-tight leading-none">
              <AnimatedText section="sansthaHome" tKey="testTitle1" /><span className="italic text-[#c36f09]"><AnimatedText section="sansthaHome" tKey="testTitle2" /></span>
            </h2>
          </Reveal>
          
          <div className="flex gap-4 mt-8 md:mt-0">
            <button onClick={() => swiperRef.current?.slidePrev()} className="w-14 h-14 flex items-center justify-center border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300">
              <span className="text-xl font-light">←</span>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()} className="w-14 h-14 flex items-center justify-center border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300">
              <span className="text-xl font-light">→</span>
            </button>
          </div>
        </div>

        {/* Editorial Slider */}
        <Reveal delay={0.2}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={80}
            slidesPerView={1}
            speed={1000}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
                  
                  {/* Huge Quote Mark */}
                  <div className="hidden md:block text-[15rem] leading-none font-serif text-gray-100 opacity-50 select-none -mt-32">
                    "
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-2xl md:text-3xl lg:text-5xl font-serif text-[#a63c06] leading-[1.3] mb-12 tracking-tight">
                      "<AnimatedText section="sansthaHome" tKey={t.textKey} />"
                    </p>
                    
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-[1px] bg-black"></div>
                      <div>
                        <span className="font-medium text-[#a63c06] text-lg block"><AnimatedText section="sansthaHome" tKey={t.nameKey} /></span>
                        <span className="text-xs text-[#c36f09] uppercase tracking-widest mt-1 block"><AnimatedText section="sansthaHome" tKey={t.roleKey} /> — <AnimatedText section="sansthaHome" tKey={t.locationKey} /></span>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

      </div>
    </section>
  );
};

export default SansthaTestimonials;
