import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../../ui/Reveal';
import Kicker from '../../ui/Kicker';
import { useLanguage } from '../../../context/LanguageContext';
import AnimatedText from '../../ui/AnimatedText';

const SansthaIntroSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 md:py-32 relative bg-transparent overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-5/12 relative z-20">
            <Reveal direction="up">
              <Kicker className="mb-6 opacity-70">OUR ORGANIZATION</Kicker>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium mb-8 text-[#a63c06] leading-[1.1] tracking-tight">
                <AnimatedText section="sanstha" tKey="heroTitle" />
              </h2>
              
              <div className="w-20 h-1 bg-black mb-10"></div>

              <p className="text-[#c36f09] mb-8 leading-[1.8] font-sans text-lg font-light max-w-xl">
                <AnimatedText section="sanstha" tKey="introText" />
              </p>
              
              {/* Added Elements: Quick Stats/Tags */}
              <div className="grid grid-cols-2 gap-6 mb-12 border-t border-gray-100 pt-8">
                <div>
                  <h4 className="text-3xl font-serif text-[#a63c06] mb-1">10+</h4>
                  <p className="text-xs tracking-widest text-[#c36f09] uppercase font-bold">Years of Service</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-[#a63c06] mb-1">3</h4>
                  <p className="text-xs tracking-widest text-[#c36f09] uppercase font-bold">Core Initiatives</p>
                </div>
              </div>

              <Link to="/sanstha/about" className="group inline-flex items-center gap-4 text-white bg-[#a63c06] rounded-full px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#c36f09] transition-all duration-300 shadow-xl hover:shadow-2xl">
                <AnimatedText section="common" tKey="readMore" />
                <motion.span 
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </Link>
            </Reveal>
          </div>

          {/* Right Image Collage */}
          <div className="w-full lg:w-7/12 relative">
            <Reveal direction="left" delay={0.2} className="h-full">
              <div className="grid grid-cols-12 gap-4 md:gap-6 h-[60vh] lg:h-[80vh]">
                
                {/* Main Large Image */}
                <div className="col-span-12 md:col-span-8 row-span-2 relative rounded-3xl overflow-hidden group shadow-2xl h-full">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 1.5, ease: "easeOut" }} className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1593113563332-f144d2843bb3?q=80&w=2000&auto=format&fit=crop" 
                      alt="Sanstha Seva" 
                      className="w-full h-full object-cover filter grayscale-[10%]" 
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/5 transition-opacity group-hover:bg-transparent"></div>
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-6 left-6 bg-[#fbf5e6]/90 backdrop-blur-md border border-brand-charcoal/10 px-6 py-3 rounded-full shadow-lg">
                    <span className="text-sm font-semibold tracking-wide text-[#a63c06]">Compassion in Action</span>
                  </div>
                </div>

                {/* Top Right Small Image */}
                <div className="col-span-6 md:col-span-4 relative rounded-3xl overflow-hidden group shadow-lg h-full">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 1.5, ease: "easeOut" }} className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop" 
                      alt="Roti Bank" 
                      className="w-full h-full object-cover filter grayscale-[30%]" 
                    />
                  </motion.div>
                </div>

                {/* Bottom Right Small Image */}
                <div className="col-span-6 md:col-span-4 relative rounded-3xl overflow-hidden group shadow-lg h-full hidden md:block">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 1.5, ease: "easeOut" }} className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop" 
                      alt="Elderly Care" 
                      className="w-full h-full object-cover filter grayscale-[20%]" 
                    />
                  </motion.div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* Mission and Vision Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 relative z-20">
          
          <Reveal delay={0.1} direction="up" className="h-full">
            <div className="bg-[#6b3112]/90 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-16 h-full hover:shadow-xl transition-shadow duration-500">
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">
                <AnimatedText section="sanstha" tKey="missionTitle" />
              </h3>
              <p className="text-gray-200 font-sans text-lg md:text-xl leading-[1.8] font-light">
                <AnimatedText section="sanstha" tKey="missionText" />
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="up" className="h-full">
            <div className="bg-[#8b6508]/90 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-16 h-full hover:shadow-xl transition-shadow duration-500 group">
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">
                <AnimatedText section="sanstha" tKey="visionTitle" />
              </h3>
              <p className="text-gray-200 font-sans text-lg md:text-xl leading-[1.8] font-light">
                <AnimatedText section="sanstha" tKey="visionText" />
              </p>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

export default SansthaIntroSection;
