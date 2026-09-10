import React from 'react';
import AlternatingContentBlock from '../../components/ui/AlternatingContentBlock';
import Reveal from '../../components/ui/Reveal';

const RotiBank = () => {
  return (
    <div className="pt-24 bg-white min-h-screen pb-20">
      <header className="py-20 text-center bg-brand-lightgrey mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">The Roti Bank</h1>
          <p className="text-gray-600 font-sans text-lg">Eradicating hunger, one meal at a time.</p>
        </div>
      </header>

      {/* 1. Introduction */}
      <AlternatingContentBlock
        kicker="Introduction"
        title="Nourishing the Soul by Feeding the Body"
        content="The Roti Bank is Aastha Sevabhavi Sanstha's flagship initiative. We believe that spiritual growth is deeply connected to physical well-being, and it begins with ensuring that basic human needs, like food, are met with dignity and compassion."
        imageRight={false}
      />

      {/* 2. The Problem */}
      <AlternatingContentBlock
        kicker="The Problem"
        title="The Hunger Crisis"
        content="Despite significant economic growth, thousands of people in our city go to bed hungry every night. Food waste in urban areas stands in stark contrast to the acute malnourishment faced by street dwellers and slum children."
        imageRight={true}
      />

      {/* 3. Our Initiative */}
      <AlternatingContentBlock
        kicker="Initiative"
        title="Bridging the Gap"
        content="The Roti Bank acts as a bridge. We actively collect surplus, freshly cooked food from households, weddings, and restaurants, while also operating our own central kitchens to prepare fresh, nutritious meals daily."
        imageRight={false}
      />

      {/* 4. How We Help */}
      <AlternatingContentBlock
        kicker="Action"
        title="How the Bank Operates"
        content="Our massive network of dedicated volunteers and logistics team swing into action every afternoon and evening."
        bullets={[
          "Collection vans gather surplus food",
          "Central kitchens cook fresh supplemental meals",
          "Volunteers distribute meals across 15+ fixed locations"
        ]}
        imageRight={true}
      />

      {/* 5. Images from Our Work */}
      <section className="py-20 bg-brand-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-sm uppercase tracking-[2px] font-bold text-[#4FA8D8] mb-2 block">Gallery</span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal">Images from Our Work</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="https://images.unsplash.com/photo-1593113563332-f144d2843bb3?q=80&w=400&auto=format&fit=crop" loading="lazy" alt="Work" className="w-full h-48 object-cover rounded-xl shadow hover:shadow-lg transition-all hover:scale-105" />
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop" loading="lazy" alt="Work" className="w-full h-48 object-cover rounded-xl shadow hover:shadow-lg transition-all hover:scale-105" />
              <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=400&auto=format&fit=crop" loading="lazy" alt="Work" className="w-full h-48 object-cover rounded-xl shadow hover:shadow-lg transition-all hover:scale-105" />
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop" loading="lazy" alt="Work" className="w-full h-48 object-cover rounded-xl shadow hover:shadow-lg transition-all hover:scale-105" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Impact */}
      <AlternatingContentBlock
        kicker="Results"
        title="Our Impact"
        content="What started as a small effort has blossomed into a movement. We are proud of the tangible impact we have made, but the work is far from over."
        bullets={[
          "5,000+ meals distributed daily",
          "Zero food waste policy implemented",
          "500+ active registered volunteers"
        ]}
        imageRight={false}
      />

      {/* 7. Video Showcase */}
      <section className="py-20 bg-brand-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif mb-8">Watch Us in Action</h2>
            <div className="aspect-video bg-black rounded-2xl relative flex items-center justify-center overflow-hidden shadow-2xl border-4 border-gray-800 cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=1200&auto=format&fit=crop" alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative z-10 w-20 h-20 bg-[#4FA8D8] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(79,168,216,0.6)] group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default RotiBank;
