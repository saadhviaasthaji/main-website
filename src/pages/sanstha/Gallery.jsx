import React from 'react';
import Reveal from '../../components/ui/Reveal';
import Kicker from '../../components/ui/Kicker';
import AnimatedText from '../../components/ui/AnimatedText';

const Gallery = () => {
  return (
    <div className="pt-24 bg-transparent min-h-screen pb-20">
      <header className="py-24 md:py-32 bg-transparent">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <Kicker><AnimatedText section="sansthaGallery" tKey="kicker" /></Kicker>
          <h1 className="text-4xl md:text-5xl font-serif text-[#a63c06] mb-4"><AnimatedText section="sansthaGallery" tKey="title" /></h1>
          <p className="text-[#c36f09] font-sans text-lg"><AnimatedText section="sansthaGallery" tKey="desc" /></p>
        </div>
      </header>

      <div className="w-full px-4 md:px-8 lg:px-12 pb-12">
        <Reveal>
          <div className="w-full h-[85vh] overflow-hidden rounded-3xl shadow-2xl border border-[#a63c06]/10 bg-white relative">
            <iframe
              src="https://www.playbook.com/s/aasthasevabhavisanstha/aastha-sevabhavi-sanstha"
              title="Aastha Sevabhavi Sanstha Gallery"
              className="w-full h-full border-none"
              allowFullScreen
            ></iframe>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Gallery;
