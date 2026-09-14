import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../ui/Reveal';
import { ShieldCheck, Calendar, FileText } from 'lucide-react';

const SansthaAboutLegal = () => {
  return (
    <section className="py-24 bg-white text-black border-t border-gray-100">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4 block">Transparency</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-black">Legal & Registration</h2>
              <p className="text-gray-600 font-sans text-lg mb-8 max-w-xl">
                We operate with full transparency and are legally registered under the relevant authorities to accept and distribute donations responsibly.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-6 transition-transform"
              >
                <div className="bg-black p-4 rounded-full text-white shrink-0 shadow-md">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-2">Establishment</h4>
                  <p className="font-serif text-xl text-black">September 2017</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-6 transition-transform"
              >
                <div className="bg-black p-4 rounded-full text-white shrink-0 shadow-md">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-2">Registration Number</h4>
                  <p className="font-serif text-xl text-black">F/40324/Thane/Mumbai</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-6 transition-transform"
              >
                <div className="bg-black p-4 rounded-full text-white shrink-0 shadow-md">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-2">Entity Type</h4>
                  <p className="font-serif text-xl text-black">Society Registration Certificate</p>
                  <p className="text-gray-500 text-sm mt-1">Under the Societies Registration Act, 1860</p>
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
