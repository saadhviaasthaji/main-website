import React from 'react';
import Reveal from './Reveal';
import Kicker from './Kicker';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AlternatingContentBlock = ({ 
  kicker, 
  title, 
  content, 
  imageSrc, 
  imageAlt, 
  imageRight = false,
  bullets = null,
  stats = null,
  floatingBadge = null,
  cta = null
}) => {
  return (
    <section className="py-16 md:py-24 bg-transparent border-b border-gray-50 last:border-0 relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className={`flex flex-col ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <Reveal direction={imageRight ? "right" : "left"}>
              {/* Decorative offset background */}
              <div className="absolute inset-0 bg-brand-sand/30 transform translate-x-4 translate-y-4 rounded-xl -z-10"></div>
              
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <div className="absolute inset-0 bg-brand-lightgrey flex items-center justify-center">
                  {imageSrc ? (
                    <img 
                      src={imageSrc} 
                      alt={imageAlt || title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="text-gray-400 font-sans">[Image Placeholder]</span>
                  )}
                </div>
              </div>

              {/* Floating Badge */}
              {floatingBadge && (
                <div className={`absolute ${imageRight ? '-left-6' : '-right-6'} bottom-12 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-white/50 max-w-[200px] z-10 hidden sm:block`}>
                  <p className="font-serif text-2xl text-[#a63c06] font-bold leading-tight mb-1">{floatingBadge.title}</p>
                  <p className="text-sm font-sans text-[#c36f09] font-medium">{floatingBadge.subtitle}</p>
                </div>
              )}
            </Reveal>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <Reveal delay={0.2} direction={imageRight ? "left" : "right"}>
              {kicker && <Kicker>{kicker}</Kicker>}
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#a63c06] mb-6 leading-tight">
                {title}
              </h2>
              
              <div className="text-[#c36f09] font-sans space-y-4 text-lg leading-relaxed mb-8">
                {typeof content === 'string' ? <p>{content}</p> : content}
              </div>

              {/* Stats Grid */}
              {stats && (
                <div className="grid grid-cols-2 gap-6 mb-8 py-6 border-y border-gray-100">
                  {stats.map((stat, idx) => (
                    <div key={idx}>
                      <p className="text-3xl font-serif font-bold text-brand-blue mb-1">{stat.value}</p>
                      <p className="text-sm font-sans text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullets Grid */}
              {bullets && (
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start bg-gray-50 p-4 rounded-xl">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[#c36f09] font-sans text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA Button */}
              {cta && (
                <div className="mt-8">
                  {cta.link.startsWith('http') || cta.link.startsWith('mailto:') || cta.link.startsWith('tel:') ? (
                    <a href={cta.link} className="inline-flex items-center gap-2 btn-primary">
                      {cta.text} <ArrowRight size={18} />
                    </a>
                  ) : (
                    <Link to={cta.link} className="inline-flex items-center gap-2 btn-primary">
                      {cta.text} <ArrowRight size={18} />
                    </Link>
                  )}
                </div>
              )}
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlternatingContentBlock;
