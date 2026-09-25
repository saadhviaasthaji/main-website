import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from '../../ui/AnimatedText';

const SansthaAboutHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-[95vh] md:h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1593113580327-0248408f65d6?q=80&w=2070&auto=format&fit=crop" 
          alt="Sanstha Hero" 
          className="w-full h-[120%] object-cover -mt-[10%]"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-4 w-full max-w-5xl mx-auto mt-20"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#c36f09] font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
        >
          <AnimatedText section="sansthaAbout" tKey="heroLabel" />
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#a63c06] mb-8 tracking-tight leading-none drop-shadow-sm"
        >
          <AnimatedText section="sansthaAbout" tKey="heroTitle1" /> <br />
          <span className="italic text-[#a63c06]/90"><AnimatedText section="sansthaAbout" tKey="heroTitle2" /></span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[#c36f09] font-sans text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
        >
          <AnimatedText section="sansthaAbout" tKey="heroDesc" />
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-0 md:-bottom-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[#4a1a03] text-[10px] md:text-[12px] tracking-[0.3em] uppercase mb-2 font-black drop-shadow-md bg-white/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/40 shadow-lg"><AnimatedText section="sansthaAbout" tKey="scrollDown" /></span>
        <div className="w-[2px] h-8 md:h-12 bg-white/50 relative overflow-hidden rounded-full shadow-md backdrop-blur-sm border border-white/20">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-[#4a1a03] absolute top-0 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SansthaAboutHero;
