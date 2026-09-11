import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';

const BioSection = () => {
  return (
    <section className="py-24 bg-[#f4f4f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <Kicker className="mb-2">BIO</Kicker>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold mb-6 text-brand-charcoal leading-tight">
                Meet Saadhvi Aastha Ji
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed font-sans text-sm md:text-base pr-0 md:pr-10">
                A renowned spiritual orator, author, motivational speaker, and devotional artist known for her heartfelt kathavachans and inspirational messages. With her graceful narration and deep understanding of values, she connects with audiences of all ages, guiding them toward clarity, compassion, and inner peace. Her talks, bhajans, and teachings continue to inspire millions across the world.
              </p>
              
              <Link to="/about" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-sm font-bold hover:bg-gray-800 transition-colors mb-12">
                Read More
                <span className="text-lg">→</span>
              </Link>

              {/* Snapshot Stats */}
              <div className="border-t border-gray-300 pt-8 relative">
                <div className="absolute -top-3 left-0 bg-[#f4f4f6] pr-4 font-bold text-gray-800 uppercase tracking-widest text-xs">
                  Snapshot
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                  <div>
                    <h3 className="text-3xl font-extrabold text-black mb-2">10K+</h3>
                    <p className="font-bold text-black text-sm mb-2">Sessions</p>
                    <p className="text-xs text-gray-500 leading-relaxed">Over 10,000+ live spiritual sessions delivered across the globe, touching millions of hearts with wisdom, faith, and transformative guidance.</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-black mb-2">12M+</h3>
                    <p className="font-bold text-black text-sm mb-2">Followers</p>
                    <p className="text-xs text-gray-500 leading-relaxed">A thriving community of 12M+ followers inspired daily by her words of faith, positivity, and purpose.</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-black mb-2">500+</h3>
                    <p className="font-bold text-black text-sm mb-2">Live Kathas</p>
                    <p className="text-xs text-gray-500 leading-relaxed">Delivered 500+ Katha sessions, spreading the timeless wisdom of sacred scriptures with devotion, clarity, and heartfelt storytelling.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-1/2 relative">
            <Reveal>
              <div className="w-full aspect-[3/4] bg-gray-300 relative overflow-hidden shadow-xl">
                {/* Placeholder Image container */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <span className="font-serif text-xl">Portrait Image</span>
                </div>
                
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <ul className="text-white/80 text-sm space-y-2 list-disc list-inside">
                    <li>25 years of service to mankind.</li>
                    <li>A motivational guide who inspires people to embrace peace, values, and meaningful living.</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BioSection;
