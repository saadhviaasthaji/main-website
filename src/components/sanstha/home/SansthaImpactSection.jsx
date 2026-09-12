import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../ui/Reveal';
import Kicker from '../../ui/Kicker';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslation } from '../../../data/translations';

const SansthaImpactSection = () => {
  const { language } = useLanguage();
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <Kicker className="mb-2">OUR INITIATIVES</Kicker>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-charcoal">
              Empowering Communities
            </h2>
          </Reveal>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Image Top, Content Bottom */}
          <Reveal delay={0.1} direction="left">
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="w-full aspect-[3/4] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop" alt="Roti Bank" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-8">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">{getTranslation(language, 'sanstha', 'rotiBankTitle')}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {getTranslation(language, 'sanstha', 'rotiBankDesc1')}
                </p>
                <Link to="/sanstha/roti-bank" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 text-xs font-bold hover:bg-gray-800 transition-colors">
                  Know More
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Column 2: Content Top, Image Bottom */}
          <Reveal delay={0.2} direction="up">
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="bg-white p-8">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">Support & Care</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Extending a helping hand through regular distribution of rations, clothing, and essential materials for vulnerable mothers and families.
                </p>
                <Link to="/sanstha/about" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 text-xs font-bold hover:bg-gray-800 transition-colors">
                  Know More
                  <span className="text-lg">→</span>
                </Link>
              </div>
              <div className="w-full aspect-[3/4] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop" alt="Support" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>

          {/* Column 3: Image Top, Content Bottom */}
          <Reveal delay={0.3} direction="right">
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="w-full aspect-[4/5] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=600&auto=format&fit=crop" alt="Education" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-8">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">Education & Orphanages</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Regular service visits to orphanages, distributing school kits, and ensuring children in need get the foundational support required.
                </p>
                <Link to="/sanstha/about" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 text-xs font-bold hover:bg-gray-800 transition-colors">
                  Know More
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

export default SansthaImpactSection;
