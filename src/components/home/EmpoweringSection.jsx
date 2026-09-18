import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';
import { useLanguage } from '../../context/LanguageContext';
import AnimatedText from '../ui/AnimatedText';

const EmpoweringSection = () => {
  const { language } = useLanguage();
  return (
    <section className="py-24 bg-transparent">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <Kicker className="mb-2">{<AnimatedText section="empowering" tKey="kicker" />}</Kicker>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-charcoal">
              {<AnimatedText section="empowering" tKey="title" />}
            </h2>
          </Reveal>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Column 1: Image Top, Content Bottom */}
          <Reveal delay={0.1} direction="left">
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="w-full aspect-[4/3] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <img src="/assets/pages/home/empowering/katha.webp" alt="Katha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-brand-charcoal/10 p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">{<AnimatedText section="empowering" tKey="kathaTitle" />}</h3>
                <p className="text-brand-charcoal/80 font-medium text-sm mb-6 leading-relaxed">
                  {<AnimatedText section="empowering" tKey="kathaDesc" />}
                </p>
                <Link to="/events" className="inline-flex items-center gap-2 bg-transparent border-2 border-brand-charcoal text-brand-charcoal px-6 py-2 text-xs font-bold hover:bg-brand-charcoal hover:text-[#fbf5e6] transition-colors shadow-sm">
                  {<AnimatedText section="common" tKey="knowMore" />}
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Column 2: Content Top, Image Bottom */}
          <Reveal delay={0.2} direction="up">
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-brand-charcoal/10 p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">{<AnimatedText section="empowering" tKey="gurukulTitle" />}</h3>
                <p className="text-brand-charcoal/80 font-medium text-sm mb-6 leading-relaxed">
                  {<AnimatedText section="empowering" tKey="gurukulDesc" />}
                </p>
                <Link to="/about#education" className="inline-flex items-center gap-2 bg-transparent border-2 border-brand-charcoal text-brand-charcoal px-6 py-2 text-xs font-bold hover:bg-brand-charcoal hover:text-[#fbf5e6] transition-colors shadow-sm">
                  {<AnimatedText section="common" tKey="knowMore" />}
                  <span className="text-lg">→</span>
                </Link>
              </div>
              <div className="w-full aspect-[4/3] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <img src="/assets/pages/home/empowering/gurukul.webp" alt="Gurukul" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </Reveal>

          {/* Column 3: Image Top, Content Bottom */}
          <Reveal delay={0.3} direction="right">
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="w-full aspect-[4/3] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <img src="/assets/pages/home/empowering/sanstha.webp" alt="Sanstha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-brand-charcoal/10 p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">{<AnimatedText section="empowering" tKey="sansthaTitle" />}</h3>
                <p className="text-brand-charcoal/80 font-medium text-sm mb-6 leading-relaxed">
                  {<AnimatedText section="empowering" tKey="sansthaDesc" />}
                </p>
                <Link to="/sanstha" className="inline-flex items-center gap-2 bg-transparent border-2 border-brand-charcoal text-brand-charcoal px-6 py-2 text-xs font-bold hover:bg-brand-charcoal hover:text-[#fbf5e6] transition-colors shadow-sm">
                  {<AnimatedText section="common" tKey="knowMore" />}
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default EmpoweringSection;
