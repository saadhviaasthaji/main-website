import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../../ui/Reveal';
import Kicker from '../../ui/Kicker';

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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-5/12">
            <Reveal direction="left">
              <Kicker className="mb-4">A GLIMPSE INTO OUR WORK</Kicker>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-[#a63c06] mb-8 leading-tight tracking-tight">
                Explore Our Gallery
              </h2>
              <p className="text-[#c36f09] mb-10 font-sans leading-relaxed text-lg max-w-lg font-light">
                Witness the impact of our initiatives firsthand. From massive food drives by the Roti Bank to educational programs and community support, see how dedication transforms into tangible change.
              </p>
              
              <Link to="/sanstha/gallery" className="group inline-flex items-center gap-4 text-white bg-[#a63c06] rounded-full px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#c36f09] transition-all duration-300 shadow-xl hover:shadow-2xl">
                View Gallery
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

          {/* Right Side: Image Grid (Small Boxes) */}
          <div className="w-full lg:w-7/12 mt-12 lg:mt-0">
            <Reveal delay={0.2} direction="right" className="w-full">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      zIndex: 10
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transform origin-center ${
                      index === 0 ? 'mt-0 md:mt-12' : 
                      index === 1 ? 'mt-8 md:mt-0' : 
                      index === 2 ? '-mt-4 md:mt-12' : 
                      'mt-4 md:mt-0'
                    }`}
                    style={{ aspectRatio: '4/5' }}
                  >
                    <img 
                      src={src} 
                      alt={`Gallery Preview ${index + 1}`} 
                      className="w-full h-full object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                    />
                    

                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SansthaVideo;
