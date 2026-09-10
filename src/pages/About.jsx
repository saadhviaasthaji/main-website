import React from 'react';
import AlternatingContentBlock from '../components/ui/AlternatingContentBlock';
import SocialMediaBar from '../components/home/SocialMediaBar';

const About = () => {
  return (
    <div className="page fade-in pt-24 bg-white">
      <header className="py-20 text-center bg-brand-lightgrey mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">About Saadhvi Aastha Ji</h1>
          <p className="text-gray-600 font-sans text-lg">A life dedicated to spiritual awakening, devotion, and selfless service.</p>
        </div>
      </header>

      <AlternatingContentBlock
        kicker="Biography"
        title="A Life of Devotion"
        content={<>
          <p className="mb-4">
            Saadhvi Aastha is a renowned spiritual orator, author, motivational speaker, and devotional artist.
            From a very young age, she demonstrated an extraordinary inclination towards spirituality, ancient scriptures, and values.
          </p>
          <p>
            Her journey is not just about preaching; it is about living a life deeply rooted in the Sanatan Dharma and sharing that wisdom with the modern world. Through her heartfelt kathavachans and inspirational messages, she simplifies complex spiritual truths into actionable life lessons.
          </p>
        </>}
        imageRight={false}
      />

      <AlternatingContentBlock
        kicker="Education"
        title="The Gurukul Journey"
        content="Embracing the traditional Vedic education system, Saadhvi Aastha spent her formative years in a Gurukul. This rigorous and deeply spiritual environment shaped her understanding of the scriptures, Sanskrit literature, and the core philosophies of life."
        bullets={[
          "Immersed in Vedic Studies from an early age.",
          "Deep understanding of the Bhagavad Gita and Ramayana.",
          "Trained in classical bhajans and spiritual discourse."
        ]}
        imageRight={true}
      />

      <AlternatingContentBlock
        kicker="Mission"
        title="Purpose and Mission"
        content={<>
          <p className="mb-4">
            Her mission extends beyond the spiritual podium. Believing that true devotion reflects in service to mankind, she established the Aastha Sevabhavi Sanstha. Her motivation is to uplift the underprivileged, provide education, and ensure that basic human needs are met with dignity and compassion.
          </p>
          <p className="italic font-serif text-brand-blue">
            "Devotion without compassion is incomplete. To serve the creation is to serve the Creator."
          </p>
        </>}
        imageRight={false}
      />

      <SocialMediaBar />
    </div>
  );
};

export default About;
