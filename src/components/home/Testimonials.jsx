import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';
import AnimatedText from '../ui/AnimatedText';

const Testimonials = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "S. P Jain (Rajasthan)",
      role: "ADVOCATE",
      text: "Her connection with Radha Naam is something you don’t just hear—you can feel it. Being part of that experience brought a sense of inner peace that stayed with me long after it ended.",
      rating: 5
    },
    {
      id: 2,
      name: "Sudarshan Oberoi",
      role: "SOFTWARE PROFESSIONAL",
      text: "There are moments when the mind carries more than words can express. Her Katha and bhajans have given me a space where I can pause, breathe and simply feel connected to the Divine.",
      rating: 5
    },
    {
      id: 3,
      name: "Rajesh Srivastav",
      role: "ENTREPRENEUR",
      text: "She showed me that being connected to Krishna does not mean stepping away from modern life. It means finding the right direction while continuing to live it.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-transparent">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Header & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 md:mb-12">
          <Reveal>
            <Kicker className="mb-1 md:mb-3 text-xs font-semibold tracking-widest text-gray-500 uppercase">IMPACT STORIES</Kicker>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-[#a63c06] tracking-tight leading-none">
              <AnimatedText section="home" tKey="testimonialsTitle1" />
              <span className="italic text-[#c36f09] ml-2 md:ml-3">
                <AnimatedText section="home" tKey="testimonialsTitle2" />
              </span>
            </h2>
          </Reveal>
          
          <div className="flex gap-3 mt-3 md:mt-0">
            <button onClick={() => swiperRef.current?.slidePrev()} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-200 rounded-full hover:border-gray-400 transition-colors text-gray-400 hover:text-[#a63c06]">
              <span className="text-lg md:text-xl">←</span>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-200 rounded-full hover:border-gray-400 transition-colors text-gray-400 hover:text-[#a63c06]">
              <span className="text-lg md:text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Slider */}
        <Reveal delay={0.2}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex flex-col md:flex-row gap-0 md:gap-6 items-start">
                  {/* Quote Icon */}
                  <div className="text-6xl md:text-9xl text-gray-200 font-serif leading-none mt-[-0.5rem] md:mt-[-1rem] mb-2 md:mb-0">
                    &ldquo;
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 max-w-4xl">
                    <h3 className="text-xl md:text-4xl lg:text-[2.75rem] font-serif text-[#a63c06] leading-[1.3] mb-4 md:mb-8">
                      "{t.text}"
                    </h3>
                    
                    <div className="flex items-center gap-3 md:gap-6">
                      <div className="w-8 md:w-12 h-[1px] bg-black"></div>
                      <div>
                        <div className="font-bold text-[#a63c06] text-sm md:text-base">{t.name}</div>
                        <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-0.5 md:mt-1">{t.role}</div>
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

export default Testimonials;
