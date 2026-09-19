import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';
import AnimatedText from '../ui/AnimatedText';

const SansthaPreviewCard = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Image Section */}
            <div className="w-full md:w-5/12 relative min-h-[300px] md:min-h-full bg-gray-100">
              <img 
                src="/assets/pages/home/sanstha/sanstha.webp" 
                alt="Aastha Sevabhavi Sanstha" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-7/12 p-10 md:p-14 flex flex-col justify-center">
              <Kicker><AnimatedText section="home" tKey="sansthaPreviewKicker" /></Kicker>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#a63c06] mb-4">
                <AnimatedText section="home" tKey="sansthaPreviewTitle" />
              </h2>
              <div className="mb-6 font-sans text-sm text-brand-blue font-semibold tracking-wide">
                <AnimatedText section="home" tKey="sansthaPreviewReg" />
              </div>
              <p className="text-[#c36f09] font-sans leading-relaxed mb-8 text-lg">
                <AnimatedText section="home" tKey="sansthaPreviewDesc" />
              </p>
              <div>
                <Link to="/sanstha" className="btn-outline">
                  <AnimatedText section="home" tKey="sansthaPreviewBtn" /> &rarr;
                </Link>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SansthaPreviewCard;
