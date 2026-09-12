import React from 'react';
import Reveal from '../components/ui/Reveal';
import SocialMediaBar from '../components/home/SocialMediaBar';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="page fade-in pt-24 md:pt-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        
        {/* Section 1: Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <Reveal>
            <div className="pt-4">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                BIO
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-charcoal mb-8">
                {getTranslation(language, 'home', 'heroTitle')}
              </h1>
              
              <div className="prose prose-lg font-sans text-gray-600 leading-relaxed">
                <p className="mb-6">{getTranslation(language, 'about', 'bioText1')}</p>
                <p className="mb-6">{getTranslation(language, 'about', 'bioText2')}</p>
                <p>{getTranslation(language, 'about', 'bioText3')}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=1200&auto=format&fit=crop" 
                alt="Saadhvi Aastha Ji Landscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
                <h2 className="text-5xl md:text-7xl font-ephesis text-white drop-shadow-lg opacity-80">
                  {getTranslation(language, 'home', 'heroTitle')}
                </h2>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section 2: Purpose, Vision & Recognition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal delay={0.1}>
            <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1000&auto=format&fit=crop" 
                alt="Saadhvi Aastha Ji Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="pt-4 lg:pt-10">
              {/* Purpose & Vision */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-6">
                  Her Purpose & Vision
                </h2>
                <div className="prose prose-lg font-sans text-gray-600 leading-relaxed">
                  <p className="mb-6">{getTranslation(language, 'about', 'missionText')}</p>
                  <p className="mb-6">{getTranslation(language, 'about', 'bioText4')}</p>
                  <p>{getTranslation(language, 'about', 'bioText5')}</p>
                </div>
              </div>

              {/* Recognition & Honours */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-6">
                  Recognition & Honours
                </h2>
                <div className="prose prose-lg font-sans text-gray-600 leading-relaxed">
                  <p className="mb-6">{getTranslation(language, 'about', 'motivationText')}</p>
                  <p className="mb-6">{getTranslation(language, 'about', 'bioText6')}</p>
                  <p>{getTranslation(language, 'about', 'bioText7')}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>

      <SocialMediaBar />
    </div>
  );
};

export default About;
