import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../ui/Reveal';
import Kicker from '../../ui/Kicker';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslation } from '../../../data/translations';

const SansthaIntroSection = () => {
  const { language } = useLanguage();
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-8">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1 z-10 mt-8 lg:mt-0 relative">
            <Reveal direction="left">
              <div className="lg:pr-10 relative z-10">
                <Kicker className="mb-4">ABOUT</Kicker>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6 text-brand-charcoal leading-tight">
                  {getTranslation(language, 'sanstha', 'heroTitle')}
                </h2>
                
                <img 
                  src="https://see.fontimg.com/api/rf5/7BWnK/OWIxZDJiOTU1MThlNDNiMGFkZWQ3ZGUwMjU4MTllMWYub3Rm/U2FhZGh2aSBBYXN0aGEgSmk/brother-signature.png?r=fs&h=70&w=1250&fg=000000&bg=FFFFFF&tb=1&s=56" 
                  alt="Signature" 
                  className="h-10 md:h-12 object-contain mix-blend-multiply mb-8 opacity-80" 
                />

                <p className="text-gray-600 mb-10 leading-relaxed font-sans text-base md:text-lg">
                  {getTranslation(language, 'sanstha', 'introText')}
                </p>
                
                <Link to="/sanstha/about" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-all hover:scale-105 rounded-full shadow-lg hover:shadow-xl">
                  {getTranslation(language, 'common', 'readMore')}
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2 relative z-0">
            <Reveal direction="right">
              <div className="w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group ml-auto">
                {/* Placeholder Image container */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 transition-transform duration-1000 group-hover:scale-105">
                  <img src="https://images.unsplash.com/photo-1593113563332-f144d2843bb3?q=80&w=800&auto=format&fit=crop" alt="Sanstha Seva" className="w-full h-full object-cover" />
                </div>
                
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 opacity-90 transition-opacity duration-500">
                  <div className="border-l-4 border-white pl-6">
                    <ul className="text-white/95 text-sm md:text-base space-y-3 font-medium">
                      <li>✨ Serving humanity through education and food distribution.</li>
                      <li>✨ Building a community rooted in compassion and care.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SansthaIntroSection;
