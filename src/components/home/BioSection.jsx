import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';

const BioSection = () => {
  return (
    <section className="py-24 bg-brand-lightgrey relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <Kicker>BIO</Kicker>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-brand-charcoal">
            Meet Saadhvi Aastha Ji
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-sans">
            A renowned spiritual orator, author, motivational speaker, and devotional artist known for her heartfelt kathavachans and inspirational messages. With her graceful narration and deep understanding of values, she connects with audiences of all ages, guiding them toward clarity, compassion, and inner peace.
          </p>
          <Link to="/about" className="inline-block border-b-2 border-[#4FA8D8] text-[#4FA8D8] font-sans font-bold pb-1 hover:text-brand-charcoal hover:border-brand-charcoal transition-colors duration-300">
            Read More
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default BioSection;
