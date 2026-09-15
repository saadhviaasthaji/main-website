import React from 'react';
import AlternatingContentBlock from '../../components/ui/AlternatingContentBlock';
import Reveal from '../../components/ui/Reveal';
import { useLanguage } from '../../context/LanguageContext';
import AnimatedText from '../../components/ui/AnimatedText';
import { PhoneCall, Mail, User } from 'lucide-react';

const RotiBank = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal mb-6">The Roti Bank</h1>
            <p className="text-gray-600 font-sans text-xl max-w-2xl mx-auto">
              Eradicating hunger, one meal at a time.
            </p>
          </Reveal>
        </div>
      </header>

      {/* 1. What is Roti Bank? */}
      <AlternatingContentBlock
        kicker="Initiative"
        title={<AnimatedText section="sanstha" tKey="rotiBankTitle" />}
        content={<>
          <p className="mb-4">{<AnimatedText section="sanstha" tKey="rotiBankDesc1" />}</p>
          <p>{<AnimatedText section="sanstha" tKey="rotiBankDesc2" />}</p>
        </>}
        imageRight={false}
        imageSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
        imageAlt="Community Food Initiative"
        stats={[
          { label: "Active Years", value: "3+" },
          { label: "Meals Daily", value: "1,500+" }
        ]}
        floatingBadge={{ title: "0%", subtitle: "Food Waste Goal" }}
      />

      {/* 2. Objective */}
      <AlternatingContentBlock
        kicker="The Goal"
        title={<AnimatedText section="sanstha" tKey="rotiBankObjTitle" />}
        content={<>
          <p className="mb-4">{<AnimatedText section="sanstha" tKey="rotiBankObj1" />}</p>
          <p>{<AnimatedText section="sanstha" tKey="rotiBankObj2" />}</p>
        </>}
        imageRight={true}
        imageSrc="https://images.unsplash.com/photo-1593113563332-f144d2843bb3?q=80&w=800&auto=format&fit=crop"
        imageAlt="Providing food to the needy"
        cta={{ text: "Join the Initiative", link: "/contact" }}
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
        imageSrc="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop"
        imageAlt="Food distribution process"
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
        imageSrc="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=800&auto=format&fit=crop"
        imageAlt="Helping those in need"
        floatingBadge={{ title: "100%", subtitle: "Compassion" }}
      />

      {/* NEW CONTACT BLOCK */}
      <section className="py-20 bg-brand-sand/30 border-y border-brand-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <h3 className="text-3xl font-serif text-brand-charcoal mb-4">Immediate Response Needed?</h3>
                <p className="text-gray-600 font-sans mb-8">
                  If you have surplus food from an event, or if you know a community in urgent need, please reach out to our Roti Bank coordinator immediately.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-brand-charcoal">
                    <div className="w-10 h-10 rounded-full bg-brand-sand/50 flex items-center justify-center shrink-0">
                      <User size={20} className="text-brand-blue" />
                    </div>
                    <span className="font-semibold font-sans text-lg">Pratik Mishra</span>
                  </div>
                  <div className="flex items-center gap-4 text-brand-charcoal">
                    <div className="w-10 h-10 rounded-full bg-brand-sand/50 flex items-center justify-center shrink-0">
                      <PhoneCall size={20} className="text-brand-blue" />
                    </div>
                    <span className="font-semibold font-sans text-lg">8591902050</span>
                  </div>
                  <div className="flex items-center gap-4 text-brand-charcoal">
                    <div className="w-10 h-10 rounded-full bg-brand-sand/50 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-brand-blue" />
                    </div>
                    <span className="font-semibold font-sans text-lg break-all">saadhviaasthaji@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-brand-charcoal p-10 md:p-16 flex flex-col justify-center items-center text-center">
                <h4 className="text-2xl font-serif text-white mb-6">Contact Us Now</h4>
                <a 
                  href="tel:8591902050" 
                  className="w-full btn-primary bg-white text-brand-charcoal hover:bg-brand-sand hover:text-brand-charcoal flex items-center justify-center gap-2 mb-4 py-4"
                >
                  <PhoneCall size={20} /> Call Directly
                </a>
                <a 
                  href="mailto:saadhviaasthaji@gmail.com" 
                  className="w-full btn-primary border border-white/30 hover:bg-white/10 flex items-center justify-center gap-2 py-4"
                >
                  <Mail size={20} /> Email Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Images from Our Work */}
      <section className="py-20 bg-brand-lightgrey">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
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
        imageSrc="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop"
        imageAlt="Making an impact"
      />
    </div>
  );
};

export default RotiBank;
