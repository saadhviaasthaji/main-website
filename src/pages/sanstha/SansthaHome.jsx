import React from 'react';
import { Link } from 'react-router-dom';

import SansthaHeroSlider from '../../components/sanstha/home/SansthaHeroSlider';
import SansthaIntroSection from '../../components/sanstha/home/SansthaIntroSection';
import SansthaImpactSection from '../../components/sanstha/home/SansthaImpactSection';
import SansthaVideo from '../../components/sanstha/home/SansthaVideo';
import SansthaTestimonials from '../../components/sanstha/home/SansthaTestimonials';


import SocialMediaBar from '../../components/home/SocialMediaBar';
import SansthaDonationBanner from '../../components/sanstha/home/SansthaDonationBanner';
import LeadershipGrid from '../../components/sanstha/LeadershipGrid';
import Reveal from '../../components/ui/Reveal';

const SansthaHome = () => {
  return (
    <div className="bg-transparent min-h-screen">
      {/* 1. Hero Section */}
      <SansthaHeroSlider />
      
      {/* 2. Introduction */}
      <SansthaIntroSection />

      {/* 3. Empowering / Impact */}
      <SansthaImpactSection />

      {/* 4. Watch The Latest Video */}
      <SansthaVideo />

      {/* 5. Stories From Our Followers / Beneficiaries */}
      <SansthaTestimonials />

      <div className="w-full mx-auto border-t border-gray-100 my-24"></div>

      {/* Leadership Section inserted here for Sanstha context */}
      <section className="py-16 bg-white relative">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-left mb-12">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-6 block">Leadership</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black mb-8 tracking-tight leading-none">Meet the <br /><span className="italic text-gray-400">Visionaries</span></h2>
            <p className="text-gray-500 font-sans text-xl font-light leading-[1.8] max-w-2xl">
              Guiding our mission with devotion, experience, and a commitment to serving humanity.
            </p>
          </Reveal>
        </div>
        <LeadershipGrid showCoreTeam={false} />
        
        <div className="text-center mt-12">
          <Link to="/sanstha/members" className="inline-flex items-center gap-2 text-black border border-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            View All Members
          </Link>
        </div>
      </section>
      <div className="mt-12">
        <SocialMediaBar />
        <SansthaDonationBanner />
      </div>
    </div>
  );
};

export default SansthaHome;
