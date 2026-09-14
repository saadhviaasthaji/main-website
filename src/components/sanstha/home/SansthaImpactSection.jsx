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
    <section className="py-24 bg-[#FAFAFA]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="mb-16 md:flex justify-between items-end">
          <Reveal>
            <Kicker className="mb-4">OUR INITIATIVES</Kicker>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-black tracking-tight leading-none">
              Empowering <br />
              <span className="text-gray-400 italic">Communities</span>
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
            <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden group bg-brand-charcoal border border-gray-800 flex flex-col justify-end p-8 md:p-12">
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Roti Bank" 
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay filter grayscale" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl md:text-4xl font-serif font-medium text-white mb-4">
                  <AnimatedText section="sanstha" tKey="rotiBankTitle" />
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed max-w-2xl font-light">
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
            <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden group bg-white border border-gray-200 flex flex-col p-8 md:p-10 transition-shadow hover:shadow-xl">
              <h3 className="text-3xl font-serif font-medium text-black mb-4">Support & Care</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light">
                Extending a helping hand through regular distribution of rations, clothing, and essential materials for vulnerable mothers and families.
              </p>
              
              <div className="mt-auto w-full aspect-[4/3] rounded-xl overflow-hidden relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop" 
                  alt="Support" 
                  className="w-full h-full object-cover grayscale-[20%]" 
                />
              </div>
            </div>
          </Reveal>

          {/* Card 3: Education & Orphanages (Wide, spans 7 cols) */}
          <Reveal delay={0.3} direction="up" className="md:col-span-12 lg:col-span-7 h-full">
            <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden group bg-brand-charcoal border border-gray-800 flex flex-col md:flex-row items-center transition-shadow hover:shadow-xl">
              <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=800&auto=format&fit=crop" 
                  alt="Education" 
                  className="w-full h-full object-cover grayscale-[10%] opacity-80" 
                />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-brand-charcoal z-10">
                <h3 className="text-3xl font-serif font-medium mb-4 text-white">Education & Orphanages</h3>
                <p className="text-gray-300 text-sm mb-8 leading-relaxed font-light">
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
            <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden group bg-gray-100 border border-gray-200 flex flex-col p-8 md:p-10 transition-shadow hover:shadow-xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="text-xl">🤍</span>
              </div>
              <h3 className="text-3xl font-serif font-medium text-black mb-4">Elderly Care</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light">
                Providing dedicated support, compassion, and a safe haven for vulnerable and elderly mothers in our community.
              </p>
              
              <div className="mt-auto w-full h-48 rounded-xl overflow-hidden relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop" 
                  alt="Elderly Care" 
                  className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
            </div>
          </Reveal>

          {/* Card 5: Gaushala (Wide, spans 12 cols) */}
          <Reveal delay={0.5} direction="up" className="md:col-span-12 h-full lg:h-[350px]">
            <div className="relative w-full h-full min-h-[350px] rounded-[2rem] overflow-hidden group bg-brand-charcoal border border-gray-800 flex flex-col justify-center items-center text-center p-8 md:p-16">
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="https://images.unsplash.com/photo-1596443326162-8e104e7c3b2e?q=80&w=1600&auto=format&fit=crop" 
                  alt="Gau Seva" 
                  className="w-full h-full object-cover opacity-30 mix-blend-overlay filter grayscale" 
                />
              </div>
              <div className="absolute inset-0 bg-black/60"></div>
              
              <div className="relative z-10 max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4 block">Future Vision</span>
                <h3 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">Gau Seva & Animal Welfare</h3>
                <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed font-light">
                  Working towards our long-term vision of establishing sustainable spaces, including a Gaushala (cow shelter), dedicated to the ethical care and protection of animals.
                </p>
                <Link to="/sanstha/about" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-8 py-3 text-sm font-medium hover:bg-gray-200 transition-colors">
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
