import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../data/translations';

const EmpoweringSection = () => {
  const { language } = useLanguage();
  return (
    <section className="py-24 bg-transparent">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <Kicker className="mb-2">{getTranslation(language, 'empowering', 'kicker')}</Kicker>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-charcoal">
              {getTranslation(language, 'empowering', 'title')}
            </h2>
          </Reveal>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Image Top, Content Bottom */}
          <Reveal delay={0.1} direction="left">
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="w-full aspect-[4/3] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 font-serif">Katha Image</span>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">{getTranslation(language, 'empowering', 'kathaTitle')}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {getTranslation(language, 'empowering', 'kathaDesc')}
                </p>
                <Link to="/katha" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 text-xs font-bold hover:bg-gray-800 transition-colors">
                  {getTranslation(language, 'common', 'knowMore')}
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Column 2: Content Top, Image Bottom */}
          <Reveal delay={0.2} direction="up">
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="bg-white p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">{getTranslation(language, 'empowering', 'gurukulTitle')}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {getTranslation(language, 'empowering', 'gurukulDesc')}
                </p>
                <Link to="/about#education" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 text-xs font-bold hover:bg-gray-800 transition-colors">
                  {getTranslation(language, 'common', 'knowMore')}
                  <span className="text-lg">→</span>
                </Link>
              </div>
              <div className="w-full aspect-[4/3] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600&auto=format&fit=crop" alt="Gurukul" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>

          {/* Column 3: Image Top, Content Bottom */}
          <Reveal delay={0.3} direction="right">
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="w-full aspect-[4/3] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1593113563332-f144d2843bb3?q=80&w=600&auto=format&fit=crop" alt="Sanstha" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">{getTranslation(language, 'empowering', 'sansthaTitle')}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {getTranslation(language, 'empowering', 'sansthaDesc')}
                </p>
                <Link to="/sanstha" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 text-xs font-bold hover:bg-gray-800 transition-colors">
                  {getTranslation(language, 'common', 'knowMore')}
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
