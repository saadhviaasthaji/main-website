import React from 'react';
import AlternatingContentBlock from '../../components/ui/AlternatingContentBlock';
import Reveal from '../../components/ui/Reveal';
import { useLanguage } from '../../context/LanguageContext';
import AnimatedText from '../../components/ui/AnimatedText';
import { PhoneCall, Mail, User } from 'lucide-react';

const RotiBank = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-transparent min-h-screen">
      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 bg-transparent">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-serif text-[#a63c06] mb-6"><AnimatedText section="rotiBankPage" tKey="heroTitle" /></h1>
            <p className="text-[#c36f09] font-sans text-xl max-w-2xl mx-auto">
              <AnimatedText section="rotiBankPage" tKey="heroDesc" />
            </p>
          </Reveal>
        </div>
      </header>

 {/*{/* 1. What is Roti Bank? */}
      <AlternatingContentBlock
        kicker="Initiative"
        title={<AnimatedText section="sanstha" tKey="rotiBankTitle" />}
        content={<>
          <p className="mb-4">{<AnimatedText section="sanstha" tKey="rotiBankDesc1" />}</p>
          <p>{<AnimatedText section="sanstha" tKey="rotiBankDesc2" />}</p>
        </>}
        imageRight={false}
        imageSrc="\assets\pages\sanstha\rotibank\rotibank.webp"
        imageAlt="Community Food Initiative"
        stats={[
          { label: <AnimatedText section="rotiBankPage" tKey="stat1" />, value: "3+" },
          { label: <AnimatedText section="rotiBankPage" tKey="stat2" />, value: "1,500+" }
        ]}
        floatingBadge={{ title: <AnimatedText section="rotiBankPage" tKey="badge1Title" />, subtitle: <AnimatedText section="rotiBankPage" tKey="badge1Sub" /> }}
      />
      
      {/* NEW CONTACT BLOCK */}
      <section className="py-20 bg-brand-sand/30 border-y border-brand-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-[#a63c06]/10 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <h3 className="text-3xl font-serif text-[#a63c06] mb-4"><AnimatedText section="rotiBankPage" tKey="contactTitle" /></h3>
                <p className="text-[#c36f09] font-sans mb-8">
                  <AnimatedText section="rotiBankPage" tKey="contactDesc" />
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#a63c06]">
                    <div className="w-10 h-10 rounded-full bg-brand-sand/50 flex items-center justify-center shrink-0">
                      <User size={20} className="text-brand-blue" />
                    </div>
                    <span className="font-semibold font-sans text-lg"><AnimatedText section="rotiBankPage" tKey="contactName" /></span>
                  </div>
                  <div className="flex items-center gap-4 text-[#a63c06]">
                    <div className="w-10 h-10 rounded-full bg-brand-sand/50 flex items-center justify-center shrink-0">
                      <PhoneCall size={20} className="text-brand-blue" />
                    </div>
                    <span className="font-semibold font-sans text-lg">8591902050</span>
                  </div>
                  <div className="flex items-center gap-4 text-[#a63c06]">
                    <div className="w-10 h-10 rounded-full bg-brand-sand/50 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-brand-blue" />
                    </div>
                    <span className="font-semibold font-sans text-lg break-all">aasthasevabhavi.org@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-[#6b3112]/90 backdrop-blur-md p-10 md:p-16 flex flex-col justify-center items-center text-center">
                <h4 className="text-2xl font-serif text-white mb-6"><AnimatedText section="rotiBankPage" tKey="contactCtaTitle" /></h4>
                <a 
                  href="tel:8591902050" 
                  className="w-full btn-primary bg-white text-orange-900 hover:bg-gray-100 flex items-center justify-center gap-2 mb-4 py-4 shadow-md"
                >
                  <PhoneCall size={20} /> <AnimatedText section="rotiBankPage" tKey="contactCta1" />
                </a>
                <a 
                  href="mailto:aasthasevabhavi.org@gmail.com" 
                  className="w-full btn-primary bg-transparent border border-white text-white hover:bg-white/10 flex items-center justify-center gap-2 py-4 shadow-md"
                >
                  <Mail size={20} /> <AnimatedText section="rotiBankPage" tKey="contactCta2" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* 6. Impact */}
      <AlternatingContentBlock
        kicker={<AnimatedText section="rotiBankPage" tKey="kicker6" />}
        title={<AnimatedText section="rotiBankPage" tKey="title6" />}
        content={<AnimatedText section="rotiBankPage" tKey="content6" />}
        imageRight={false}
        imageSrc="/assets/pages/sanstha/home/initiative/rotibank.webp"
        imageAlt="Making an impact"
      />
    </div>
  );
};

export default RotiBank;
