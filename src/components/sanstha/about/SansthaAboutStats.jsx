import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../ui/Reveal';

const stats = [
  { value: "15+", label: "Years of Service" },
  { value: "10k+", label: "Meals Served" },
  { value: "50+", label: "Active Volunteers" },
  { value: "5+", label: "Core Initiatives" }
];

const SansthaAboutStats = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center relative">
                {idx !== stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#a63c06]/20"></div>
                )}
                <motion.h3 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif mb-4 text-[#a63c06]"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-sm md:text-base tracking-widest uppercase font-bold text-[#c36f09]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SansthaAboutStats;
