import React from 'react';
import Reveal from './Reveal';
import Kicker from './Kicker';

const AlternatingContentBlock = ({ 
  kicker, 
  title, 
  content, 
  imageSrc, 
  imageAlt, 
  imageRight = false,
  bullets = null
}) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-50 last:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>
          
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-brand-lightgrey flex items-center justify-center">
                  {imageSrc ? (
                    <img 
                      src={imageSrc} 
                      alt={imageAlt || title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 font-sans">[Image Placeholder]</span>
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <Reveal delay={0.2}>
              {kicker && <Kicker>{kicker}</Kicker>}
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-6 leading-tight">
                {title}
              </h2>
              
              <div className="text-gray-600 font-sans space-y-4 text-lg leading-relaxed">
                {typeof content === 'string' ? <p>{content}</p> : content}
              </div>

              {bullets && (
                <ul className="mt-8 space-y-4">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 font-sans">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlternatingContentBlock;
