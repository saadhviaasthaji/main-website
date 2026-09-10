import React from 'react';
import AlternatingContentBlock from '../../components/ui/AlternatingContentBlock';

const SansthaAbout = () => {
  return (
    <div className="pt-24 bg-white min-h-screen pb-20">
      <header className="py-20 text-center bg-brand-lightgrey mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">About Aastha Sevabhavi Sanstha</h1>
          <p className="text-gray-600 font-sans text-lg">Understanding our roots, vision, and the driving force behind our initiatives.</p>
        </div>
      </header>

      {/* 1. Introduction */}
      <AlternatingContentBlock
        kicker="Introduction"
        title="Who We Are"
        content="Aastha Sevabhavi Sanstha is a registered non-profit organization committed to bringing tangible, positive change to society. We operate at the intersection of spiritual wisdom and active social service."
        imageRight={false}
      />

      {/* 2. Establishment details */}
      <AlternatingContentBlock
        kicker="Establishment"
        title="Our Genesis"
        content="The Sanstha was born from a simple yet profound realization during one of Saadhvi Aastha Ji's kathas: that while spiritual nourishment is essential, physical nourishment and basic human dignity must come first. We started small, feeding a few individuals outside temples, and rapidly grew."
        imageRight={true}
      />

      {/* 3. Registration information */}
      <AlternatingContentBlock
        kicker="Legal"
        title="Registration Information"
        content="We operate with full transparency and are legally registered under the relevant authorities to accept and distribute donations."
        bullets={[
          "Registration Number: [Placeholder Reg No.]",
          "Tax Exemption: Registered under 80G",
          "FCRA Status: [Placeholder Status]"
        ]}
        imageRight={false}
      />

      {/* 4. Mission */}
      <AlternatingContentBlock
        kicker="Mission"
        title="Our Mission"
        content="To operate sustainable initiatives like the Roti Bank, establish free educational centers for underprivileged children, and create a strong community of volunteers dedicated to selfless service (Seva)."
        imageRight={true}
      />

      {/* 5. Vision */}
      <AlternatingContentBlock
        kicker="Vision"
        title="Our Vision"
        content="A society where basic necessities like food and education are accessible to all, irrespective of cast, creed, or economic background."
        imageRight={false}
      />

      {/* 6. Core values */}
      <AlternatingContentBlock
        kicker="Principles"
        title="Core Values"
        content="Everything we do is guided by our fundamental beliefs in compassion, integrity, and selfless action."
        bullets={[
          "Seva (Selfless Service)",
          "Karuna (Compassion)",
          "Dharma (Righteousness)"
        ]}
        imageRight={true}
      />

      {/* 7. Social objectives */}
      <AlternatingContentBlock
        kicker="Objectives"
        title="Social Objectives"
        content="Our primary focus areas are eradicating hunger through the Roti Bank, empowering the youth through free education, and providing necessary healthcare to remote rural areas."
        imageRight={false}
      />

      {/* 8. Journey of the organization */}
      <AlternatingContentBlock
        kicker="History"
        title="Our Journey"
        content="From distributing 50 meals a day from a single location to establishing a city-wide network of volunteers distributing over 5,000 meals daily, our journey has been fueled by the incredible generosity of our community."
        imageRight={true}
      />

      {/* 9. Major achievements */}
      <AlternatingContentBlock
        kicker="Milestones"
        title="Major Achievements"
        content="We measure our success not in numbers, but in the smiles of the individuals we serve. However, some key milestones define our growth:"
        bullets={[
          "Over 1 Million Meals Served",
          "10 Free Educational Centers Opened",
          "Awarded Best NGO by [Placeholder]"
        ]}
        imageRight={false}
      />
    </div>
  );
};

export default SansthaAbout;
