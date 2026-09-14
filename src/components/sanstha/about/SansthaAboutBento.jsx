import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../ui/Reveal';
import { Heart, Users, HandHeart, Shield, BookOpen, Utensils } from 'lucide-react';

const objectives = [
  {
    title: "Food Security",
    desc: "Providing food and essential necessities to people facing hardship through the Roti Bank initiative.",
    icon: <Utensils size={32} className="text-black mb-4 transition-transform duration-500 group-hover:-translate-y-2" />,
    colSpan: "md:col-span-2",
    bg: "bg-white",
    number: "01"
  },
  {
    title: "Elderly Care",
    desc: "Supporting elderly and vulnerable mothers with dignity.",
    icon: <Users size={32} className="text-white mb-4 transition-transform duration-500 group-hover:-translate-y-2" />,
    colSpan: "md:col-span-1",
    bg: "bg-black",
    textColor: "text-white",
    number: "02"
  },
  {
    title: "Child Welfare",
    desc: "Providing assistance to orphanages and children in need.",
    icon: <Heart size={32} className="text-black mb-4 transition-transform duration-500 group-hover:-translate-y-2" />,
    colSpan: "md:col-span-1",
    bg: "bg-white",
    number: "03"
  },
  {
    title: "Essential Supplies",
    desc: "Distributing clothing, ration, school kits and other essential materials.",
    icon: <BookOpen size={32} className="text-black mb-4 transition-transform duration-500 group-hover:-translate-y-2" />,
    colSpan: "md:col-span-2",
    bg: "bg-white",
    number: "04"
  },
  {
    title: "Future Ashrams",
    desc: "Establishing Anath Ashram, Vriddha Ashram and Gaushala in Kashi, Ayodhya, and Mathura.",
    icon: <Shield size={32} className="text-white mb-4 transition-transform duration-500 group-hover:-translate-y-2" />,
    colSpan: "md:col-span-3",
    bg: "bg-brand-charcoal",
    textColor: "text-white",
    number: "05"
  }
];

const SansthaAboutBento = () => {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <Reveal>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-black font-bold mb-4 block">Our Focus</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-6 tracking-tight">Social Objectives</h2>
            <p className="text-gray-500 font-sans text-lg">
              The Sanstha works towards providing holistic support to vulnerable sections of society through targeted, impactful initiatives.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {objectives.map((obj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative overflow-hidden p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] ${obj.bg} ${obj.colSpan} border border-gray-100 flex flex-col justify-between cursor-pointer`}
            >
              {/* Background Number Watermark */}
              <div className={`absolute -right-4 -bottom-10 text-[150px] font-serif font-bold leading-none select-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 ${obj.textColor ? 'text-white/[0.03]' : 'text-black/[0.03]'}`}>
                {obj.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="bg-gray-100/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm group-hover:bg-gray-200/50 transition-colors">
                  {obj.icon}
                </div>
                <h3 className={`text-2xl md:text-3xl font-serif mb-4 ${obj.textColor || 'text-black'}`}>{obj.title}</h3>
              </div>
              <p className={`relative z-10 font-sans text-lg leading-relaxed ${obj.textColor ? 'text-white/80' : 'text-gray-500'}`}>
                {obj.desc}
              </p>
              
              {/* Animated Bottom Border */}
              <div className={`absolute bottom-0 left-0 h-1 bg-black w-0 group-hover:w-full transition-all duration-700 ease-out ${obj.textColor ? 'bg-white' : 'bg-black'}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SansthaAboutBento;
