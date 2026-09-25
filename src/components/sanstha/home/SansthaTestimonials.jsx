import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import Reveal from '../../ui/Reveal';
import Kicker from '../../ui/Kicker';
import AnimatedText from '../../ui/AnimatedText';

const SansthaTestimonials = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Reena Bhat (Gujarat)",
      role: "FOLLOWER",
      text: "The most beautiful form of service is one where help comes with dignity. My association with Aastha Sevabhavi Sanstha made me realise that supporting someone in need is not only about providing essentials, but also about giving them a sense of care, belonging and respect."
    },
    {
      id: 2,
      name: "Shreyash Nagothi (Mumbai)",
      role: "IT PROFESSIONAL",
      text: "Spending time with elderly mothers and understanding their needs has been a learning experience in itself. Aastha Sevabhavi Sanstha’s service has taught me that standing by someone, listening to them and simply being there can be one of the greatest forms of service."
    },
    {
      id: 3,
      name: "Pramod Shinde (Mumbai)",
      role: "VOLUNTEER",
      text: "Visiting children and providing them with food, clothing and essential supplies is always deeply touching. Their innocent smiles remind us that even a small act of kindness can bring meaningful happiness into someone’s life."
    },
    {
      id: 4,
      name: "Krishna Pachori (Vrindavan)",
      role: "COMMUNITY SUPPORTER",
      text: "What truly stands out about Aastha Sevabhavi Sanstha is that service is not treated as a one-time activity, but as an ongoing responsibility. From providing food and clothing to supporting people in need, every effort reflects a genuine spirit of compassion and humanity."
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
            modules={[Navigation, Autoplay, EffectFade]}
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
                    <p className="text-xl md:text-3xl font-serif text-[#a63c06] leading-relaxed mb-12">
                      "{t.text}"
                    </p>
                    
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-[1px] bg-black"></div>
                      <div>
                        <h4 className="font-bold text-lg text-black uppercase tracking-widest">{t.name}</h4>
                        <p className="text-sm font-medium text-[#c36f09] mb-1">{t.role}</p>
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
