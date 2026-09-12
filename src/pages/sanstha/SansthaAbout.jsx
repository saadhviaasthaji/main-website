import React from 'react';
import AlternatingContentBlock from '../../components/ui/AlternatingContentBlock';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../data/translations';

const SansthaAbout = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-24 bg-transparent min-h-screen pb-20">
      <header className="py-20 text-center bg-brand-lightgrey mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Aastha Sevabhavi Sanstha</h1>
          <p className="text-gray-600 font-sans text-lg">Understanding our roots, vision, and the driving force behind our initiatives.</p>
        </div>
      </header>

      {/* 1. Introduction */}
      <AlternatingContentBlock
        kicker="Introduction"
        title="Who We Are"
        content={<>
          <p className="mb-4">{getTranslation(language, 'sanstha', 'aboutIntro')}</p>
          <p className="mb-4">{getTranslation(language, 'sanstha', 'aboutText1')}</p>
          <p>{getTranslation(language, 'sanstha', 'aboutText2')}</p>
        </>}
        imageRight={false}
      />

      {/* 2. Registration information */}
      <AlternatingContentBlock
        kicker="Legal"
        title="Registration Information"
        content="We operate with full transparency and are legally registered under the relevant authorities to accept and distribute donations."
        bullets={[
          "Establishment: September 2017",
          "Registration Number: F/40324/Thane/Mumbai",
          "Entity Type: Society Registration Certificate under the Societies Registration Act, 1860"
        ]}
        imageRight={true}
      />

      {/* 3. Mission */}
      <AlternatingContentBlock
        kicker="Mission"
        title={getTranslation(language, 'sanstha', 'missionTitle')}
        content={getTranslation(language, 'sanstha', 'missionText')}
        imageRight={false}
      />

      {/* 4. Vision */}
      <AlternatingContentBlock
        kicker="Vision"
        title={getTranslation(language, 'sanstha', 'visionTitle')}
        content={getTranslation(language, 'sanstha', 'visionText')}
        imageRight={true}
      />

      {/* 5. Core values */}
      <AlternatingContentBlock
        kicker="Principles"
        title="Core Values"
        content="Everything we do is guided by our fundamental beliefs in compassion, integrity, and selfless action."
        bullets={[
          "Humanity & Compassion — Serving people with empathy and care.",
          "Service as Dharma — Believing that serving humanity is a fundamental responsibility.",
          "Dignity & Respect — Treating every individual with dignity.",
          "Care for the Elderly — Giving special attention to elderly and vulnerable mothers.",
          "Support for the Needy — Reaching essential resources to people who need them most.",
          "Commitment to Seva — Continuing service with dedication and sincerity."
        ]}
        imageRight={false}
      />

      {/* 6. Social objectives */}
      <AlternatingContentBlock
        kicker="Objectives"
        title="Social Objectives"
        content="The Sanstha works towards providing holistic support to vulnerable sections of society."
        bullets={[
          "Providing food and essential necessities to people facing hardship.",
          "Supporting elderly and vulnerable mothers.",
          "Providing assistance to orphanages and children in need.",
          "Distributing clothing, ration, school kits and other essential materials.",
          "Promoting responsible distribution of surplus food through the Roti Bank.",
          "Establishing Anath Ashram, Vriddha Ashram and Gaushala in Kashi, Ayodhya, and Mathura."
        ]}
        imageRight={true}
      />

      {/* 7. Journey of the organization */}
      <AlternatingContentBlock
        kicker="History"
        title={getTranslation(language, 'sanstha', 'journeyTitle')}
        content={<>
          <p className="mb-4">{getTranslation(language, 'sanstha', 'journeyText1')}</p>
          <p className="mb-4">{getTranslation(language, 'sanstha', 'journeyText2')}</p>
          <p className="mb-4">{getTranslation(language, 'sanstha', 'journeyText3')}</p>
          <p className="mb-4">{getTranslation(language, 'sanstha', 'journeyText4')}</p>
          <p className="mb-4">{getTranslation(language, 'sanstha', 'journeyText5')}</p>
          <p className="font-semibold">{getTranslation(language, 'sanstha', 'journeyText6')}</p>
        </>}
        imageRight={false}
      />

      {/* 8. Major achievements */}
      <AlternatingContentBlock
        kicker="Milestones"
        title="Major Achievements"
        content="Our continuous efforts have led to significant milestones in our journey of serving humanity."
        bullets={[
          "15+ years of the Founder’s social-service journey.",
          "Formal organizational registration and establishment of the Sanstha.",
          "Development of the Roti Bank initiative to address food insecurity.",
          "Continued food, ration and clothing distribution activities.",
          "Regular service visits to orphanages and other needy communities.",
          "Extension of assistance towards persons with disabilities."
        ]}
        imageRight={true}
      />
    </div>
  );
};

export default SansthaAbout;
