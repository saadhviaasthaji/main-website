import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../ui/Reveal';
import Kicker from '../../ui/Kicker';

const SansthaVideo = () => {
  return (
    <section className="py-24 bg-[#e6ece9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-5/12">
            <Reveal direction="left">
              <Kicker className="mb-2">A GLIMPSE INTO OUR WORK</Kicker>
              <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-brand-charcoal mb-6">
                Watch Us In Action
              </h2>
              <p className="text-gray-600 mb-8 font-sans leading-relaxed text-sm md:text-base pr-0 md:pr-10">
                Witness the impact of our initiatives firsthand. From massive food drives by the Roti Bank to educational programs and community support, see how dedication transforms into tangible change.
              </p>
              <Link to="/sanstha/our-works" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs font-bold hover:bg-gray-800 transition-colors">
                Watch More
                <span className="text-lg">→</span>
              </Link>
            </Reveal>
          </div>

          {/* Right Side: Video Thumbnail */}
          <div className="w-full lg:w-7/12 mt-12 lg:mt-0">
            <Reveal delay={0.2} direction="right">
              <div className="relative w-full aspect-video bg-gray-400 group cursor-pointer overflow-hidden shadow-2xl">
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-gray-600">
                  <img src="https://images.unsplash.com/photo-1593113563332-f144d2843bb3?q=80&w=1200&auto=format&fit=crop" alt="Sanstha Action" className="w-full h-full object-cover" />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Play Button & Title */}
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/40 transition-all">
                    {/* Play Icon */}
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-[12px] border-t-transparent border-b-transparent border-l-white ml-1"></div>
                  </div>
                  <div>
                    <span className="text-white text-xs font-bold block mb-1">Watch Now</span>
                    <span className="text-white font-serif font-bold text-lg leading-none">Roti Bank Distribution Drive</span>
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

export default SansthaVideo;
