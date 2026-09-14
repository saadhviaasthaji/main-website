import React from 'react';

import SansthaHeroSlider from '../../components/sanstha/home/SansthaHeroSlider';
import SansthaIntroSection from '../../components/sanstha/home/SansthaIntroSection';
import SansthaImpactSection from '../../components/sanstha/home/SansthaImpactSection';
import SansthaVideo from '../../components/sanstha/home/SansthaVideo';
import SansthaTestimonials from '../../components/sanstha/home/SansthaTestimonials';


import DevotionalQuote from '../../components/home/DevotionalQuote';
import SocialMediaBar from '../../components/home/SocialMediaBar';
import BookingBanner from '../../components/home/BookingBanner';
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


      <hr className="border-gray-200" />

      {/* Leadership Section inserted here for Sanstha context */}
      <section className="py-20 bg-transparent">
        <div className="w-full mx-auto px-4 text-center mb-16">
          <Reveal>
            <span className="text-sm uppercase tracking-widest text-[#000000] font-bold mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-4">Meet the Visionaries</h2>
            <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
              Guiding our mission with devotion, experience, and a commitment to serving humanity.
            </p>
          </Reveal>
        </div>
        <LeadershipGrid />
      </section>

      {/* Existing Shared Bottom Sections */}
      <div className="mt-20">
        <DevotionalQuote />
        <SocialMediaBar />
        <BookingBanner />
      </div>

    </div>
  );
};

export default SansthaHome;
