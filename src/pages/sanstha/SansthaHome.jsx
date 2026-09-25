import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from '../../components/ui/AnimatedText';

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
      <section className="py-16 bg-transparent relative">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-left mb-12">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-[#c36f09] font-bold mb-6 block"><AnimatedText section="sansthaHome" tKey="ldrKicker" /></span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#a63c06] mb-8 tracking-tight leading-none"><AnimatedText section="sansthaHome" tKey="ldrTitle1" /><br /><span className="italic text-[#c36f09]"><AnimatedText section="sansthaHome" tKey="ldrTitle2" /></span></h2>
            <p className="text-xl text-[#6b3112] max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
              <AnimatedText section="sansthaHome" tKey="ldrDesc" />
            </p>
          </Reveal>
        </div>
        <LeadershipGrid showCoreTeam={false} />
        
        <Reveal delay={0.2} className="flex justify-center mt-16">
          <Link to="/sanstha/members" className="group inline-flex items-center gap-2 border border-[#a63c06] text-[#a63c06] rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#a63c06] hover:text-white transition-all duration-300">
            <AnimatedText section="sansthaHome" tKey="ldrBtn" />
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </Reveal>
      </section>
      <div className="mt-12">
        <SocialMediaBar />
        <SansthaDonationBanner />
      </div>
    </div>
  );
};

export default SansthaHome;
