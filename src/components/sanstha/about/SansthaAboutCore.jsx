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
                  src="/assets/pages/sanstha/home/org/portrait1.webp" 
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
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#c36f09] mb-6 block"><AnimatedText section="sansthaAbout" tKey="introKicker" /></span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#a63c06] mb-8 tracking-tight leading-tight">
                <AnimatedText section="sansthaAbout" tKey="introTitle" />
              </h2>
              <div className="font-sans text-lg md:text-xl text-[#c36f09] leading-relaxed font-light space-y-6 max-w-2xl">
                <p><AnimatedText section="sanstha" tKey="aboutIntro" /></p>
                <p><AnimatedText section="sanstha" tKey="aboutText1" /></p>
                <p><AnimatedText section="sanstha" tKey="aboutText2" /></p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Mission */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24 mb-32">
          <div className="w-full md:w-5/12 relative">
            <Reveal direction="right">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl relative">
                <img 
                  src="/assets/pages/sanstha/home/initiative/Support&Care.webp" 
                  alt="Mission"
                  className="w-full h-full object-cover filter grayscale opacity-90 transition-transform duration-1000 hover:scale-105 hover:opacity-100"
                />
              </div>
              <div className="absolute top-8 -right-8 w-32 h-32 bg-gray-100 rounded-full -z-10 hidden md:block"></div>
            </Reveal>
          </div>
          <div className="w-full md:w-7/12">
            <Reveal direction="left" delay={0.2}>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#c36f09] mb-6 block"><AnimatedText section="sansthaAbout" tKey="missionKicker" /></span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#a63c06] mb-8 tracking-tight leading-tight">
                <AnimatedText section="sanstha" tKey="missionTitle" />
              </h2>
              <div className="font-sans text-lg md:text-xl text-[#c36f09] leading-relaxed font-light max-w-2xl">
                <p><AnimatedText section="sanstha" tKey="missionText" /></p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-5/12 relative">
            <Reveal direction="left">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl relative">
                <img 
                  src="/assets/pages/sanstha/home/initiative/rotibank.webp" 
                  alt="Vision"
                  className="w-full h-full object-cover filter grayscale opacity-90 transition-transform duration-1000 hover:scale-105 hover:opacity-100"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-black/10 rounded-full -z-10 hidden md:block"></div>
            </Reveal>
          </div>
          <div className="w-full md:w-7/12">
            <Reveal direction="right" delay={0.2}>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#c36f09] mb-6 block"><AnimatedText section="sansthaAbout" tKey="visionKicker" /></span>
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
