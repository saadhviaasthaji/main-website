import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import BioSection from '../components/home/BioSection';
import EmpoweringSection from '../components/home/EmpoweringSection';

import Testimonials from '../components/home/Testimonials';


import AlternatingContentBlock from '../components/ui/AlternatingContentBlock';
import DevotionalQuote from '../components/home/DevotionalQuote';
import SocialMediaBar from '../components/home/SocialMediaBar';
import BookingBanner from '../components/home/BookingBanner';
import SansthaPreviewCard from '../components/home/SansthaPreviewCard';

const Home = () => {
  return (
    <div className="bg-transparent min-h-screen">
      {/* 1. Hero Section */}
      <HeroSlider />
      
      {/* 2. Introduction */}
      <BioSection />

      {/* 3. Empowering You, Your Life */}
      <EmpoweringSection />


      {/* 5. Stories From Our Followers */}
      <Testimonials />


      <hr className="border-gray-200" />

      {/* Existing Sections */}
      <div className="mt-20">
        <DevotionalQuote />
        <SocialMediaBar />
        <BookingBanner />
        <SansthaPreviewCard />
      </div>

    </div>
  );
};

export default Home;
