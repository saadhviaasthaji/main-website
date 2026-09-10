import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import BioSection from '../components/home/BioSection';
import AlternatingContentBlock from '../components/ui/AlternatingContentBlock';
import DevotionalQuote from '../components/home/DevotionalQuote';
import SocialMediaBar from '../components/home/SocialMediaBar';
import BookingBanner from '../components/home/BookingBanner';
import SansthaPreviewCard from '../components/home/SansthaPreviewCard';
import FloatingBooking from '../components/ui/FloatingBooking';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <HeroSlider />
      
      {/* 2. Introduction */}
      <BioSection />

      {/* 3. Who is Saadhvi Aastha? */}
      <AlternatingContentBlock
        kicker="About"
        title="Who is Saadhvi Aastha?"
        content="[Saadhvi Aastha's personal introduction goes here. She is a devoted spiritual guide...]"
        imageRight={true}
      />

      {/* 4. Spiritual Journey */}
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

      {/* 5. Gurukul Education */}
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

      {/* 6. Motivation & Purpose */}
      <AlternatingContentBlock
        kicker="Mission"
        title="Motivation & Purpose"
        content="[Content covering what motivated her spiritual path and her mission/purpose statement goes here.]"
        imageRight={false}
      />

      {/* 7. Bhakti & Spiritual Identity */}
      <DevotionalQuote />

      {/* 8. Social Media */}
      <SocialMediaBar />

      {/* 9. Booking / Invite for Katha */}
      <BookingBanner />

      {/* 10. About Sanstha Entry Point */}
      <SansthaPreviewCard />

      {/* Note: Contact/Query footer details are handled inside the standard Footer/Contact pages per SRS */}
    </div>
  );
};

export default Home;
