import React from 'react';
import Reveal from '../ui/Reveal';

const DevotionalQuote = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Icon/Image placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg className="w-96 h-96 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <Reveal>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-8 rounded-full"></div>
          <h2 className="text-2xl md:text-4xl font-serif font-medium text-brand-charcoal leading-relaxed italic mb-8">
            "[Placeholder for a short inspirational or devotional quote/message communicating Saadhvi Aastha's core philosophy.]"
          </h2>
          <p className="font-sans text-brand-blue font-bold tracking-widest uppercase text-sm">
            Bhakti & Spiritual Identity
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default DevotionalQuote;
