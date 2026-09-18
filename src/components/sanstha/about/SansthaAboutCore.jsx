import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../ui/Reveal';
import AnimatedText from '../../ui/AnimatedText';

const SansthaAboutCore = () => {
  return (
    <section className="py-24 md:py-32 bg-transparent text-[#a63c06] overflow-hidden border-b border-brand-charcoal/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Intro */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 mb-32">
          <div className="w-full md:w-5/12 relative">
            <Reveal direction="left">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" 
                  alt="Who We Are"
                  className="w-full h-full object-cover filter grayscale opacity-90 transition-transform duration-1000 hover:scale-105 hover:opacity-100"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-black/10 rounded-full -z-10 hidden md:block"></div>
            </Reveal>
          </div>
          <div className="w-full md:w-7/12">
            <Reveal direction="right" delay={0.2}>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#c36f09] mb-6 block">Introduction</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#a63c06] mb-8 tracking-tight leading-tight">
                Who We Are
              </h2>
              <div className="font-sans text-lg md:text-xl text-[#c36f09] leading-relaxed font-light space-y-6 max-w-2xl">
                <p><AnimatedText section="sanstha" tKey="aboutIntro" /></p>
                <p><AnimatedText section="sanstha" tKey="aboutText1" /></p>
                <p><AnimatedText section="sanstha" tKey="aboutText2" /></p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Mission (Overlapping Design) */}
        <div className="relative mb-32">
          <Reveal>
            <div className="w-full md:w-3/4 ml-auto bg-white/50 backdrop-blur-xl border border-white/20 text-[#a63c06] p-12 md:p-20 rounded-3xl relative z-10 shadow-xl">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#c36f09] mb-6 block">Mission</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight leading-tight">
                <AnimatedText section="sanstha" tKey="missionTitle" />
              </h2>
              <p className="font-sans text-lg md:text-2xl text-[#c36f09] leading-relaxed font-light max-w-3xl">
                <AnimatedText section="sanstha" tKey="missionText" />
              </p>
            </div>
          </Reveal>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/3 aspect-square overflow-hidden rounded-3xl hidden lg:block z-0 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1593113580327-0248408f65d6?q=80&w=2070&auto=format&fit=crop" 
              alt="Mission"
              className="w-full h-full object-cover filter grayscale opacity-60"
            />
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="w-full md:w-5/12 relative">
            <Reveal direction="right">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Vision"
                  className="w-full h-full object-cover filter grayscale opacity-90 transition-transform duration-1000 hover:scale-105 hover:opacity-100"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gray-100 rounded-full -z-10 hidden md:block"></div>
            </Reveal>
          </div>
          <div className="w-full md:w-7/12">
            <Reveal direction="left" delay={0.2}>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#c36f09] mb-6 block">Vision</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#a63c06] mb-8 tracking-tight leading-tight">
                <AnimatedText section="sanstha" tKey="visionTitle" />
              </h2>
              <div className="font-sans text-lg md:text-xl text-[#c36f09] leading-relaxed font-light max-w-2xl">
                <AnimatedText section="sanstha" tKey="visionText" />
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SansthaAboutCore;
