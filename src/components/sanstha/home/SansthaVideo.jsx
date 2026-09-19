import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../../ui/Reveal';
import Kicker from '../../ui/Kicker';
import AnimatedText from '../../ui/AnimatedText';

const SansthaVideo = () => {
  // Array of images for the gallery preview
  const images = [
    "https://images.unsplash.com/photo-1593113563332-f144d2843bb3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          
          <Reveal direction="up" className="w-full flex flex-col items-center">
            <Kicker className="mb-4 text-center">A GLIMPSE INTO OUR WORK</Kicker>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-[#a63c06] mb-8 leading-tight tracking-tight">
              <AnimatedText section="sansthaHome" tKey="galleryTitle" />
            </h2>
            <p className="text-[#c36f09] mb-10 font-sans leading-relaxed text-lg font-light text-center">
              <AnimatedText section="sansthaHome" tKey="galleryDesc" />
            </p>
            
            <Link to="/sanstha/gallery" className="group inline-flex items-center gap-4 text-white bg-[#a63c06] rounded-full px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#c36f09] transition-all duration-300 shadow-xl hover:shadow-2xl">
              <AnimatedText section="sansthaHome" tKey="galleryBtn" />
              <motion.span 
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                →
              </motion.span>
            </Link>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default SansthaVideo;
