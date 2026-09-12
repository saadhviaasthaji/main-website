import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Reveal from '../../ui/Reveal';
import Kicker from '../../ui/Kicker';

const SansthaTestimonials = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Suresh (Mumbai)",
      role: "BENEFICIARY",
      text: "The Roti Bank has been a lifeline for me and my family during tough times. To receive a freshly cooked meal when you have nothing is a true blessing from God.",
      rating: 5
    },
    {
      id: 2,
      name: "Pooja Mehta (Volunteer)",
      role: "COMMUNITY VOLUNTEER",
      text: "Serving with Aastha Sevabhavi Sanstha has changed my perspective on life. The smiles we see when distributing food are the most rewarding part of my week.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <Reveal>
            <Kicker className="mb-2">IMPACT STORIES</Kicker>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal">
              Voices from the Community
            </h2>
          </Reveal>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <button onClick={() => swiperRef.current?.slidePrev()} className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white transition-colors group">
              <span className="text-xl">←</span>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()} className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white transition-colors group">
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Slider */}
        <Reveal delay={0.2}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex gap-6 items-start">
                  {/* Avatar */}
                  <div className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full shadow-md overflow-hidden relative">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-gray-400"></div>
                     <div className="absolute inset-0 flex items-center justify-center opacity-30 text-4xl">👤</div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 text-black text-xs">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6">
                      {t.text}
                    </p>
                    
                    <div>
                      <span className="font-bold text-black text-sm">{t.name}</span>
                      <span className="mx-2 text-gray-300">|</span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</span>
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
