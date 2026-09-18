import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';

const OfficialUpdates = () => {
  const articles = [
    {
      id: 1,
      date: "June 29, 2026",
      title: "First-Ever Divine Concert Concludes On A High Note, Redefining The Devotional Live Experience",
      excerpt: "Mumbai, June 2026: The first-ever Divine Concert concluded successfully at the Dome, NSCI, Mumbai, bringing a new dimension to devotional music through an...",
    },
    {
      id: 2,
      date: "April 22, 2026",
      title: "‘Divine Concert’ 2026 Date Announced: A New Era Of Spiritual Music",
      excerpt: "Mumbai, April 22, 2026: Mark your calendars for an evening of soulful devotion and modern musical energy. Celebrated spiritual orator and singer Saadhvi Aastha Ji...",
    },
    {
      id: 3,
      date: "February 18, 2026",
      title: "Spiritual Orator Honoured With Winners Book Of World Records ‘Indian Icon Award 2026’",
      excerpt: "Mumbai, India – February 18, 2026– In a glittering ceremony held today, renowned spiritual orator and motivational speaker Saadhvi Aastha Ji was proudly presented...",
    }
  ];

  return (
    <section className="py-24 bg-[#e6e6e9]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <Reveal>
            <Kicker className="mb-2">PRESS ROOM</Kicker>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#a63c06]">
              Official Updates
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <Link to="/press" className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs font-bold hover:bg-gray-800 transition-colors">
              View All Articles
              <span className="text-lg font-normal">+</span>
            </Link>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Reveal key={article.id} delay={0.1 * (index + 1)}>
              <div className="flex flex-col h-full group cursor-pointer">
                {/* Image */}
                <div className="w-full aspect-[16/9] bg-gray-300 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                    <span className="font-serif">Article Image {article.id}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <span className="text-gray-500 text-xs mb-3 block">{article.date}</span>
                  <h3 className="text-xl font-serif font-bold text-[#a63c06] mb-4 leading-snug group-hover:text-[#c36f09] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#c36f09] font-sans text-xs leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto pt-2">
                    <Link to={`/press/${article.id}`} className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 text-[10px] uppercase font-bold hover:bg-gray-800 transition-colors">
                      Keep Reading
                      <span className="text-sm font-normal">+</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OfficialUpdates;
