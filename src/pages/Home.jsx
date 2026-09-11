import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import BioSection from '../components/home/BioSection';
import EmpoweringSection from '../components/home/EmpoweringSection';
import LatestVideo from '../components/home/LatestVideo';
import Testimonials from '../components/home/Testimonials';
import OfficialUpdates from '../components/home/OfficialUpdates';

import AlternatingContentBlock from '../components/ui/AlternatingContentBlock';
import DevotionalQuote from '../components/home/DevotionalQuote';
import SocialMediaBar from '../components/home/SocialMediaBar';
import BookingBanner from '../components/home/BookingBanner';
import SansthaPreviewCard from '../components/home/SansthaPreviewCard';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <HeroSlider />
      
      {/* 2. Introduction */}
      <BioSection />

      {/* 3. Empowering You, Your Life */}
      <EmpoweringSection />

      {/* 4. Watch The Latest Video */}
      <LatestVideo />

      {/* 5. Stories From Our Followers */}
      <Testimonials />

      {/* 6. Official Updates / Press Room */}
      <OfficialUpdates />

      <hr className="border-gray-200" />

      {/* Legacy/Existing Sections (Kept at the bottom as per plan, can be moved to about page later) */}
      <div className="mt-20">
        <AlternatingContentBlock
          kicker="About"
          title="Who is Saadhvi Aastha?"
          content="[Saadhvi Aastha's personal introduction goes here. She is a devoted spiritual guide...]"
          imageRight={true}
        />

        <AlternatingContentBlock
          kicker="Journey"
          title="Spiritual Journey"
          content="The spiritual journey began at a young age, guided by deep devotion and an innate desire to understand the divine. This path has been marked by several significant milestones:"
          bullets={[
            "[Placeholder: How her spiritual path began]",
            "[Placeholder: Key turning point in her life]",
            "[Placeholder: Milestone 3]",
          ]}
          imageRight={false}
        />

        <AlternatingContentBlock
          kicker="Education"
          title="Gurukul Education"
          content="Saadhvi Aastha has been undergoing rigorous spiritual and Vedic education at a prestigious Gurukul to deepen her knowledge of the scriptures."
          bullets={[
            "Institution: [Placeholder Institution Name]",
            "Location: [Placeholder Location]",
            "Since: [Placeholder Year]"
          ]}
          imageRight={true}
        />

        <AlternatingContentBlock
          kicker="Mission"
          title="Motivation & Purpose"
          content="[Content covering what motivated her spiritual path and her mission/purpose statement goes here.]"
          imageRight={false}
        />

        <DevotionalQuote />
        <SocialMediaBar />
        <BookingBanner />
        <SansthaPreviewCard />
      </div>

    </div>
  );
};

export default Home;
