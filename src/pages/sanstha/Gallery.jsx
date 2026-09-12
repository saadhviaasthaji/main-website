import React, { useState } from 'react';
import Reveal from '../../components/ui/Reveal';
import Kicker from '../../components/ui/Kicker';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Roti Bank activities',
    'Community service',
    'Distribution drives',
    'Events',
    'Social initiatives',
    'Anniversary milestones'
  ];

  // Dummy placeholder data for the gallery
  const photos = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    url: `https://images.unsplash.com/photo-${1590000000000 + i}?q=80&w=600&auto=format&fit=crop`,
    category: categories[(i % (categories.length - 1)) + 1]
  }));

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 bg-transparent min-h-screen pb-20">
      <header className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Kicker>Visuals</Kicker>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Social Work Gallery</h1>
          <p className="text-gray-600 font-sans text-lg">Glimpses of our initiatives, events, and the smiles we share.</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? 'bg-brand-blue text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-brand-charcoal shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <Reveal key={photo.id}>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group cursor-pointer bg-white">
                <img 
                  src={photo.url} 
                  loading="lazy"
                  alt={photo.category} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-sans text-sm font-medium">{photo.category}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-sans">
            No photos found for this category.
          </div>
        )}

      </div>
    </div>
  );
};

export default Gallery;
