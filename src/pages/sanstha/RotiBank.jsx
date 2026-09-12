import React from 'react';
import AlternatingContentBlock from '../../components/ui/AlternatingContentBlock';
import Reveal from '../../components/ui/Reveal';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../data/translations';

const RotiBank = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-24 bg-transparent min-h-screen pb-20">
      <header className="py-20 text-center bg-brand-lightgrey mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">The Roti Bank</h1>
          <p className="text-gray-600 font-sans text-lg">Eradicating hunger, one meal at a time.</p>
        </div>
      </header>

      {/* 1. What is Roti Bank? */}
      <AlternatingContentBlock
        kicker="Initiative"
        title={getTranslation(language, 'sanstha', 'rotiBankTitle')}
        content={<>
          <p className="mb-4">{getTranslation(language, 'sanstha', 'rotiBankDesc1')}</p>
          <p>{getTranslation(language, 'sanstha', 'rotiBankDesc2')}</p>
        </>}
        imageRight={false}
      />

      {/* 2. Objective */}
      <AlternatingContentBlock
        kicker="The Goal"
        title={getTranslation(language, 'sanstha', 'rotiBankObjTitle')}
        content={<>
          <p className="mb-4">{getTranslation(language, 'sanstha', 'rotiBankObj1')}</p>
          <p>{getTranslation(language, 'sanstha', 'rotiBankObj2')}</p>
        </>}
        imageRight={true}
      />

      {/* 3. How We Help */}
      <AlternatingContentBlock
        kicker="Action"
        title="How the Initiative Works"
        content="Collection → Responsible Handling → Distribution → Service"
        bullets={[
          "Surplus or leftover food from events and other suitable sources is identified.",
          "The available food is collected for distribution.",
          "The food is taken to identified areas and people who are in need.",
          "Distribution is carried out as a direct service activity.",
          "The initiative focuses on ensuring that available food reaches people rather than going to waste."
        ]}
        imageRight={false}
      />

      {/* 4. Who Benefits */}
      <AlternatingContentBlock
        kicker="Beneficiaries"
        title="Who Benefits"
        content="Roti Bank primarily serves people who are facing hunger and difficult living conditions. The Sanstha also carries out service visits to orphanages and other places where support is required."
        bullets={[
          "Homeless and underprivileged individuals",
          "Elderly and vulnerable mothers",
          "People living without adequate food support",
          "Children and families in need",
          "Other vulnerable sections of society"
        ]}
        imageRight={true}
      />

      {/* 5. Images from Our Work */}
      <section className="py-20 bg-brand-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-sm uppercase tracking-[2px] font-bold text-[#000000] mb-2 block">Gallery</span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal">Images from Our Work</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="https://images.unsplash.com/photo-1593113563332-f144d2843bb3?q=80&w=400&auto=format&fit=crop" loading="lazy" alt="Work" className="w-full h-48 object-cover rounded-xl shadow hover:shadow-lg transition-all hover:scale-105" />
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop" loading="lazy" alt="Work" className="w-full h-48 object-cover rounded-xl shadow hover:shadow-lg transition-all hover:scale-105" />
              <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=400&auto=format&fit=crop" loading="lazy" alt="Work" className="w-full h-48 object-cover rounded-xl shadow hover:shadow-lg transition-all hover:scale-105" />
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop" loading="lazy" alt="Work" className="w-full h-48 object-cover rounded-xl shadow hover:shadow-lg transition-all hover:scale-105" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Impact */}
      <AlternatingContentBlock
        kicker="Results"
        title="Our Impact"
        content="Roti Bank represents a simple yet meaningful approach to community service — reducing food wastage while taking available food to people who need it. For Aastha Sevabhavi Sanstha, the initiative is not merely about food distribution; it reflects the organization's larger belief that basic necessities should reach people with dignity and compassion."
        imageRight={false}
      />
    </div>
  );
};

export default RotiBank;
