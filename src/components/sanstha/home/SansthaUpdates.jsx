import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../ui/Reveal';
import Kicker from '../../ui/Kicker';

const SansthaUpdates = () => {
  const articles = [
    {
      id: 1,
      date: "August 15, 2026",
      title: "Roti Bank Expands Reach: Now Serving Over 5,000 Meals Daily Across The City",
      excerpt: "The Sanstha's flagship initiative, Roti Bank, reached a new milestone today by successfully distributing over 5,000 fresh meals to those in need...",
    },
    {
      id: 2,
      date: "July 10, 2026",
      title: "New Education Center Inaugurated For Underprivileged Children",
      excerpt: "Continuing its mission to provide basic necessities and education, Aastha Sevabhavi Sanstha inaugurated its newest free educational center...",
    },
    {
      id: 3,
      date: "May 25, 2026",
      title: "Sanstha Volunteers Recognized For Exemplary Community Service During Recent Relief Drives",
      excerpt: "In a special ceremony, over 50 core volunteers of the Sanstha were honored for their tireless dedication and selfless service (Seva)...",
    }
  ];

  return (
    <section className="py-24 bg-[#e6e6e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <Reveal>
            <Kicker className="mb-2">NEWS & UPDATES</Kicker>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal">
              Official Updates
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <Link to="/sanstha/our-works" className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs font-bold hover:bg-gray-800 transition-colors">
              View All Works
              <span className="text-lg font-normal">+</span>
            </Link>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Reveal key={article.id} delay={0.1 * (index + 1)} direction={index === 0 ? 'left' : index === 1 ? 'up' : 'right'}>
              <div className="flex flex-col h-full group cursor-pointer">
                {/* Image */}
                <div className="w-full aspect-[16/9] bg-gray-300 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                    <img src={`https://images.unsplash.com/photo-${index === 0 ? '1488521787991-ed7bbaae773c' : index === 1 ? '1532629345422-7515f3d16bb0' : '1593113563332-f144d2843bb3'}?q=80&w=600&auto=format&fit=crop`} alt="Update" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <span className="text-gray-500 text-xs mb-3 block">{article.date}</span>
                  <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-4 leading-snug group-hover:text-gray-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-sans text-xs leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto pt-2">
                    <Link to={`/sanstha/our-works`} className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 text-[10px] uppercase font-bold hover:bg-gray-800 transition-colors">
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

export default SansthaUpdates;
