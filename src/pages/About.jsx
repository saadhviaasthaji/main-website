import React from 'react';
import Reveal from '../components/ui/Reveal';
import SocialMediaBar from '../components/home/SocialMediaBar';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="page fade-in pt-24 md:pt-28 bg-transparent min-h-screen">
      <div className="w-full px-4 md:px-8 lg:px-12 mx-auto mb-20">
        
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

          <Reveal delay={0.2} direction="right">
            <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
              <div className="col-span-1 pt-8 flex flex-col gap-4">
                <div className="flex-grow rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=800&auto=format&fit=crop" alt="Saadhvi Aastha Ji" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
              <div className="col-span-1 pb-8 flex flex-col gap-4">
                <div className="h-1/2 rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop" alt="Spirituality" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="h-1/2 rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="https://images.unsplash.com/photo-1593113563332-f144d2843bb3?q=80&w=800&auto=format&fit=crop" alt="Devotion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section 2: Purpose, Vision & Recognition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal delay={0.1} direction="left" className="lg:sticky lg:top-32">
            <div className="grid grid-cols-2 gap-4 h-[500px] lg:h-[650px]">
              <div className="col-span-1 pb-12 flex flex-col gap-4">
                <div className="h-2/5 rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop" alt="Teaching" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="flex-grow rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop" alt="Community" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
              <div className="col-span-1 pt-12 flex flex-col gap-4">
                <div className="flex-grow rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?q=80&w=800&auto=format&fit=crop" alt="Guidance" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
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

        {/* Section 3: Gurukul Education */}
        <div id="education" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-24">
          <Reveal>
            <div className="pt-4 lg:pt-10">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                EDUCATION
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-6">
                {getTranslation(language, 'about', 'gurukulTitle')}
              </h2>
              
              <div className="prose prose-lg font-sans text-gray-600 leading-relaxed">
                <p className="mb-6">{getTranslation(language, 'about', 'gurukulText1')}</p>
                <p>{getTranslation(language, 'about', 'gurukulText2')}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="right" className="lg:sticky lg:top-32">
            <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
              <div className="col-span-1 pt-8 flex flex-col gap-4">
                <div className="flex-grow rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="https://images.unsplash.com/photo-1574681604112-2593d6eefab7?q=80&w=800&auto=format&fit=crop" alt="Gurukul Tradition" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
              <div className="col-span-1 pb-8 flex flex-col gap-4">
                <div className="h-1/2 rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="https://images.unsplash.com/photo-1542838686-37ed7a7ef3f1?q=80&w=800&auto=format&fit=crop" alt="Vedic Knowledge" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="h-1/2 rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=800&auto=format&fit=crop" alt="Scriptures" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
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
