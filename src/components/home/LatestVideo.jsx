import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';

const LatestVideo = () => {
  return (
    <section className="py-24 bg-[#e6ece9]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-5/12">
            <Reveal>
              <Kicker className="mb-2">MUSIC VIDEOS BY SAADHVI AASTHA JI</Kicker>
              <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-[#a63c06] mb-6">
                Watch The Latest Video
              </h2>
              <p className="text-[#c36f09] mb-8 font-sans leading-relaxed text-sm md:text-base pr-0 md:pr-10">
                Keep yourself tuned to her latest music videos, where every composition is a beautiful expression of devotion and inner peace. Discover new releases that soothe the soul, uplift the heart, and deepen your connection with spirituality through music.
              </p>
              <Link to="/videos" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs font-bold hover:bg-gray-800 transition-colors">
                Watch More
                <span className="text-lg">→</span>
              </Link>
            </Reveal>
          </div>

          {/* Right Side: Video Thumbnail */}
          <div className="w-full lg:w-7/12 mt-12 lg:mt-0">
            <Reveal delay={0.2}>
              <div className="relative w-full aspect-video bg-gray-400 group cursor-pointer overflow-hidden shadow-2xl">
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-gray-600">
                  <span className="font-serif text-xl">Video Thumbnail Placeholder</span>
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
                    <span className="text-white font-serif font-bold text-lg leading-none">Dekho Ram Aye</span>
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

export default LatestVideo;
