import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';

const EmpoweringSection = () => {
  return (
    <section className="py-24 bg-[#f4f4f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <Kicker className="mb-2">SAADHVI AASTHA JI</Kicker>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-charcoal">
              Empowering You, Your Life
            </h2>
          </Reveal>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Image Top, Content Bottom */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="w-full aspect-[3/4] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 font-serif">Katha Image</span>
              </div>
              <div className="bg-white p-8">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">Katha</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  A heartfelt spiritual dialogue that connects ancient wisdom with modern life, nurturing faith, clarity, and inner peace.
                </p>
                <Link to="/katha" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 text-xs font-bold hover:bg-gray-800 transition-colors">
                  Know More
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Column 2: Content Top, Image Bottom */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="bg-white p-8">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">Motivation</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Engaging and soul-stirring talks that bring spiritual wisdom and practical life guidance closer to the modern listener.
                </p>
                <Link to="/motivation" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 text-xs font-bold hover:bg-gray-800 transition-colors">
                  Know More
                  <span className="text-lg">→</span>
                </Link>
              </div>
              <div className="w-full aspect-[3/4] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 font-serif">Motivation Image</span>
              </div>
            </div>
          </Reveal>

          {/* Column 3: Image Top, Content Bottom */}
          <Reveal delay={0.3}>
            <div className="flex flex-col gap-0 shadow-lg group">
              <div className="w-full aspect-[4/5] bg-gray-300 relative overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 font-serif">Music Image</span>
              </div>
              <div className="bg-white p-8">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">Music</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Soulful bhajans that awaken devotion, soothe the heart, and create a divine connection through melody and meaning.
                </p>
                <Link to="/music" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 text-xs font-bold hover:bg-gray-800 transition-colors">
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

export default EmpoweringSection;
