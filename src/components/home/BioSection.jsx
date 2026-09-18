import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';
import { useLanguage } from '../../context/LanguageContext';
import AnimatedText from '../ui/AnimatedText';

const BioSection = () => {
  const { language } = useLanguage();
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-8">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-[45%] order-1 lg:order-1 z-10 mt-8 lg:mt-0 relative">
            <Reveal direction="left">
              <div className="lg:pr-10 relative z-10">
                <Kicker className="mb-4">BIO</Kicker>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6 text-[#a63c06] leading-tight break-words">
                  {<AnimatedText section="home" tKey="heroTitle" />}
                </h2>
                


                <p className="text-[#c36f09] mb-10 leading-relaxed font-sans text-base md:text-lg">
                  {<AnimatedText section="home" tKey="introText" />}
                </p>
                
                <Link to="/about" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-all hover:scale-105 rounded-full shadow-lg hover:shadow-xl">
                  {<AnimatedText section="common" tKey="readMore" />}
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Side Image Collage */}
          <div className="w-full lg:w-[55%] order-2 lg:order-2 relative z-0 mt-12 lg:mt-0">
            <Reveal direction="right">
              <div className="grid grid-cols-2 gap-4 md:gap-6 h-[450px] sm:h-[550px] md:h-[650px] w-full max-w-2xl mx-auto lg:ml-auto">
                {/* Column 1 (Offset down) */}
                <div className="col-span-1 pt-12 md:pt-20 flex flex-col gap-4 md:gap-6">
                  <div className="flex-grow rounded-3xl overflow-hidden shadow-2xl relative group">
                    <img src="/assets/pages/home/bio/bio-1.webp" alt="Spiritual journey" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="h-1/3 rounded-3xl overflow-hidden shadow-xl relative group hidden sm:block">
                    <img src="/assets/pages/home/bio/bio-2.webp" alt="Meditation" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                </div>
                
                {/* Column 2 (Offset up) */}
                <div className="col-span-1 pb-12 md:pb-20 flex flex-col gap-4 md:gap-6">
                  <div className="h-2/5 rounded-3xl overflow-hidden shadow-xl relative group">
                    <img src="/assets/pages/home/bio/bio-3.webp" alt="Community" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="flex-grow rounded-3xl overflow-hidden shadow-2xl relative group">
                    <img src="/assets/pages/home/bio/bio-4.webp" alt="Preaching" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BioSection;
