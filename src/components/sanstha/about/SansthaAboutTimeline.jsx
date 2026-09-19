import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Reveal from '../../ui/Reveal';

const timelineEvents = [
  {
    year: "15+ Years Ago",
    title: "The Beginning",
    desc: "The Founder's social-service journey began, driven by a deep commitment to helping those in need."
  },
  {
    year: "2017",
    title: "Formal Registration",
    desc: "Formal organizational registration and establishment of the Aastha Sevabhavi Sanstha in Thane, Mumbai."
  },
  {
    year: "Initiative",
    title: "Roti Bank",
    desc: "Development of the Roti Bank initiative to address food insecurity and reduce food waste."
  },
  {
    year: "Ongoing",
    title: "Expanded Relief",
    desc: "Continued food, ration, and clothing distribution activities. Regular service visits to orphanages and other needy communities."
  },
  {
    year: "Present",
    title: "Disability Assistance",
    desc: "Extension of assistance towards persons with disabilities, ensuring holistic support for vulnerable sections."
  }
];

const SansthaAboutTimeline = () => {
  const containerRef = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-32 bg-transparent relative overflow-hidden" ref={containerRef}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-[#a63c06] font-bold mb-4 block">Our Journey</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#a63c06] mb-6 tracking-tight">Major Achievements</h2>
            <p className="text-[#c36f09] font-sans text-lg">
              Our continuous efforts have led to significant milestones in our journey of serving humanity.
            </p>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block"></div>
          
          {/* Animated Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-black -translate-x-1/2 hidden md:block z-0"
          ></motion.div>

          <div className="space-y-16 md:space-y-32">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#fbf5e6] border-4 border-black -translate-x-1/2 z-10 hidden md:block shadow-[0_0_0_8px_rgba(0,0,0,0.05)]"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="bg-[#FAFAFA] p-12 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <span className="text-[#a63c06] font-bold tracking-widest text-sm md:text-base uppercase mb-4 block">{event.year}</span>
                    <h3 className="text-3xl md:text-4xl font-serif text-[#a63c06] mb-6">{event.title}</h3>
                    <p className="text-[#c36f09] font-sans text-lg md:text-xl leading-relaxed">{event.desc}</p>
                  </motion.div>
                </div>
                
                {/* Empty space for other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SansthaAboutTimeline;
