import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../../ui/Reveal';
import Kicker from '../../ui/Kicker';
import { useLanguage } from '../../../context/LanguageContext';
import AnimatedText from '../../ui/AnimatedText';

const SansthaImpactSection = () => {
  const { language } = useLanguage();
  return (
    <section className="py-24 bg-transparent">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="mb-16 md:flex justify-between items-end">
          <Reveal>
            <Kicker className="mb-4">OUR INITIATIVES</Kicker>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-[#a63c06] tracking-tight leading-none">
              Empowering <br />
              <span className="text-[#c36f09] italic">Communities</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 md:mt-0">
            <Link to="/sanstha/about" className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300">
              View All Initiatives →
            </Link>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch auto-rows-[minmax(400px,_auto)]">
          
          {/* Card 1: Roti Bank (Large, spans 8 cols) */}
          <Reveal delay={0.1} direction="up" className="md:col-span-12 lg:col-span-8 h-full">
            <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden group bg-[#6b3112]/70 backdrop-blur-xl border border-white/20 flex flex-col justify-end p-8 md:p-12 transition-shadow hover:shadow-xl">
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="/assets/pages/sanstha/home/initiative/rotibank.webp" 
                  alt="Roti Bank" 
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay filter grayscale-[30%]" 
                />
              </div>
              
              <div className="relative z-10 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl md:text-4xl font-serif font-medium text-white mb-4">
                  <AnimatedText section="sanstha" tKey="rotiBankTitle" />
                </h3>
                <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed max-w-2xl font-light">
                  <AnimatedText section="sanstha" tKey="rotiBankDesc1" />
                </p>
                <Link to="/sanstha/roti-bank" className="inline-flex items-center gap-2 text-white text-sm font-semibold tracking-widest uppercase hover:gap-4 transition-all duration-300">
                  Explore Program <span>→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Support & Care (Square, spans 4 cols) */}
          <Reveal delay={0.2} direction="up" className="md:col-span-6 lg:col-span-4 h-full">
            <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden group bg-[#4a2e1b]/90 backdrop-blur-xl border border-white/20 flex flex-col p-8 md:p-10 transition-shadow hover:shadow-xl">
              <h3 className="text-3xl font-serif font-medium text-white mb-4">Support & Care</h3>
              <p className="text-gray-200 text-sm mb-8 leading-relaxed font-light">
                Extending a helping hand through regular distribution of rations, clothing, and essential materials for vulnerable mothers and families.
              </p>
              
              <div className="mt-auto w-full aspect-[4/3] rounded-xl overflow-hidden relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="/assets/pages/sanstha/home/initiative/Support&Care.webp" 
                  alt="Support" 
                  className="w-full h-full object-cover grayscale-[20%]" 
                />
              </div>
            </div>
          </Reveal>

          {/* Card 3: Education & Orphanages (Wide, spans 7 cols) */}
          <Reveal delay={0.3} direction="up" className="md:col-span-12 lg:col-span-7 h-full">
            <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden group bg-[#8b6508]/70 backdrop-blur-xl border border-white/20 flex flex-col md:flex-row items-center transition-shadow hover:shadow-xl">
              <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="/assets/pages/sanstha/home/initiative/education&Oraphanages.webp" 
                  alt="Education" 
                  className="w-full h-full object-cover grayscale-[10%] opacity-70 mix-blend-overlay" 
                />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-transparent z-10">
                <h3 className="text-3xl font-serif font-medium mb-4 text-white">Education & Orphanages</h3>
                <p className="text-gray-200 text-sm mb-8 leading-relaxed font-light">
                  Regular service visits to orphanages, distributing school kits, and ensuring children in need get the foundational support required for a brighter future.
                </p>
                <Link to="/sanstha/about" className="inline-flex items-center gap-2 text-white text-sm font-semibold tracking-widest uppercase hover:gap-4 transition-all duration-300">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Vriddha Ashram (spans 5 cols) */}
          <Reveal delay={0.4} direction="up" className="md:col-span-6 lg:col-span-5 h-full">
            <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden group bg-[#3e2723]/90 backdrop-blur-xl border border-white/20 flex flex-col justify-center p-8 md:p-10 transition-shadow hover:shadow-xl">
              <h3 className="text-3xl font-serif font-medium text-white mb-4">Elderly Care</h3>
              <p className="text-gray-200 text-sm mb-8 leading-relaxed font-light">
                Providing dedicated support, compassion, and a safe haven for vulnerable and elderly mothers in our community.
              </p>
              

            </div>
          </Reveal>

          {/* Card 5: Gaushala (Wide, spans 12 cols) */}
          <Reveal delay={0.5} direction="up" className="md:col-span-12 h-full lg:h-[350px]">
            <div className="relative w-full h-full min-h-[350px] rounded-[2rem] overflow-hidden group bg-[#5c4033]/70 backdrop-blur-xl border border-white/20 flex flex-col justify-center items-center text-center p-8 md:p-16 transition-shadow hover:shadow-xl">
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="/assets/pages/sanstha/home/initiative/GauSeva.webp" 
                  alt="Gau Seva" 
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay filter grayscale-[30%]" 
                />
              </div>
              
              <div className="relative z-10 max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold mb-4 block">Future Vision</span>
                <h3 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">Gau Seva & Animal Welfare</h3>
                <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed font-light">
                  Working towards our long-term vision of establishing sustainable spaces, including a Gaushala (cow shelter), dedicated to the ethical care and protection of animals.
                </p>
                <Link to="/sanstha/about" className="inline-flex items-center gap-2 bg-transparent border border-white text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-white hover:text-amber-900 transition-colors">
                  Our Vision
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default SansthaImpactSection;
