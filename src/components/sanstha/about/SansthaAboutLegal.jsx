import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../ui/Reveal';
import { ShieldCheck, Calendar, FileText } from 'lucide-react';
import AnimatedText from '../../ui/AnimatedText';

const SansthaAboutLegal = () => {
  return (
    <section className="py-24 bg-transparent text-[#a63c06] border-t border-brand-charcoal/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c36f09] font-bold mb-4 block"><AnimatedText section="sansthaAbout" tKey="legalKicker" /></span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-[#a63c06]"><AnimatedText section="sansthaAbout" tKey="legalTitle" /></h2>
              <p className="text-[#c36f09] font-sans text-lg mb-8 max-w-xl">
                <AnimatedText section="sansthaAbout" tKey="legalSubtitle" />
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-[#6b3112]/90 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg flex items-start gap-6 transition-transform"
              >
                <div className="bg-white/10 p-4 rounded-full text-white shrink-0 shadow-inner border border-white/10">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gray-300 mb-2"><AnimatedText section="sansthaAbout" tKey="legalEst" /></h4>
                  <p className="font-serif text-xl text-white"><AnimatedText section="sansthaAbout" tKey="legalEstVal" /></p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-[#4a2e1b]/90 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg flex items-start gap-6 transition-transform"
              >
                <div className="bg-white/10 p-4 rounded-full text-white shrink-0 shadow-inner border border-white/10">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gray-300 mb-2"><AnimatedText section="sansthaAbout" tKey="legalReg" /></h4>
                  <p className="font-serif text-xl text-white"><AnimatedText section="sansthaAbout" tKey="legalRegVal" /></p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-[#8b6508]/90 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg flex items-start gap-6 transition-transform"
              >
                <div className="bg-white/10 p-4 rounded-full text-white shrink-0 shadow-inner border border-white/10">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gray-300 mb-2"><AnimatedText section="sansthaAbout" tKey="legalType" /></h4>
                  <p className="font-serif text-xl text-white"><AnimatedText section="sansthaAbout" tKey="legalTypeVal1" /></p>
                  <p className="text-gray-300 text-sm mt-1"><AnimatedText section="sansthaAbout" tKey="legalTypeVal2" /></p>
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SansthaAboutLegal;
