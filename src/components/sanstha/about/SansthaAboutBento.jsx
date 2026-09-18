import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../ui/Reveal';
import { Heart, Users, HandHeart, Shield, BookOpen, Utensils } from 'lucide-react';

const objectives = [
  {
    title: "Food Security",
    desc: "Providing food and essential necessities to people facing hardship through the Roti Bank initiative.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    color: "#4a2e1b",
    textColor: "text-white",
    number: "01"
  },
  {
    title: "Elderly Care",
    desc: "Supporting elderly and vulnerable mothers with dignity.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    color: "#8b6508",
    textColor: "text-white",
    number: "02"
  },
  {
    title: "Child Welfare",
    desc: "Providing assistance to orphanages and children in need.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    color: "#3e2723",
    textColor: "text-white",
    number: "03"
  },
  {
    title: "Essential Supplies",
    desc: "Distributing clothing, ration, school kits and other essential materials.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    color: "#6b3112",
    textColor: "text-white",
    number: "04"
  },
  {
    title: "Future Ashrams",
    desc: "Establishing Anath Ashram, Vriddha Ashram and Gaushala in Kashi, Ayodhya, and Mathura.",
    image: "https://images.unsplash.com/photo-1596443326162-8e104e7c3b2e?q=80&w=1600&auto=format&fit=crop",
    colSpan: "md:col-span-3",
    color: "#5c4033",
    textColor: "text-white",
    number: "05"
  }
];

const SansthaAboutBento = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <Reveal>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#a63c06] font-bold mb-4 block">Our Focus</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#a63c06] mb-6 tracking-tight">Social Objectives</h2>
            <p className="text-[#c36f09] font-sans text-lg">
              The Sanstha works towards providing holistic support to vulnerable sections of society through targeted, impactful initiatives.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {objectives.map((obj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl shadow-xl ${obj.colSpan} border border-white/10 flex flex-col justify-end cursor-pointer min-h-[380px]`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img src={obj.image} alt={obj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
              </div>

              {/* Gradient Fade Overlay */}
              <div 
                className="absolute inset-0 z-10 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to bottom, transparent 0%, ${obj.color}99 40%, ${obj.color} 80%, ${obj.color} 100%)`
                }}
              ></div>

              {/* Background Number Watermark */}
              <div className={`absolute -right-4 -bottom-10 text-[150px] font-serif font-bold leading-none select-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 text-white/[0.05] z-10`}>
                {obj.number}
              </div>

              {/* Content */}
              <div className="relative z-20 p-8 md:p-10 mt-auto">
                <h3 className={`text-2xl md:text-3xl font-serif mb-4 text-white drop-shadow-md`}>{obj.title}</h3>
                <p className={`font-sans text-base md:text-lg leading-relaxed text-gray-200 drop-shadow-sm`}>
                  {obj.desc}
                </p>
              </div>
              
              {/* Animated Bottom Border */}
              <div className={`absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-700 ease-out z-20`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SansthaAboutBento;
