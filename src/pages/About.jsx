import React from 'react';
import Reveal from '../components/ui/Reveal';
import SocialMediaBar from '../components/home/SocialMediaBar';
import { useLanguage } from '../context/LanguageContext';
import AnimatedText from '../components/ui/AnimatedText';

const About = () => {

  return (
    <div className="page fade-in pt-24 md:pt-28 bg-transparent min-h-screen">
      <div className="w-full px-4 md:px-8 lg:px-12 mx-auto mb-20">
        
        {/* Section 1: Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <Reveal>
            <div className="pt-4">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                BIO
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#a63c06] mb-8">
                {<AnimatedText section="home" tKey="heroTitle" />}
              </h1>
              
              <div className="prose prose-lg font-sans text-[#c36f09] leading-relaxed">
                <p className="mb-6">{<AnimatedText section="about" tKey="bioText1" />}</p>
                <p className="mb-6">{<AnimatedText section="about" tKey="bioText2" />}</p>
                <p>{<AnimatedText section="about" tKey="bioText3" />}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="right">
            <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
              <div className="col-span-1 pt-8 flex flex-col gap-4">
                <div className="flex-grow rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="/assets/pages/about/about_s1_l1.webp" alt="Saadhvi Aastha Ji" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
              <div className="col-span-1 pb-8 flex flex-col gap-4">
                <div className="h-1/2 rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="/assets/pages/about/about_s1_r1.webp" alt="Spirituality" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="h-1/2 rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="/assets/pages/home/empowering/katha.webp" alt="Devotion" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section 2: Purpose, Vision & Recognition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-20 items-start">
          
          {/* Purpose & Vision Text (Mobile: 1, Desktop: Right Col, Top) */}
          <Reveal delay={0.1} className="order-1 lg:col-start-2 lg:row-start-1 pt-4 lg:pt-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#a63c06] mb-6">
              <AnimatedText section="about" tKey="purposeTitle" />
            </h2>
            <div className="prose prose-lg font-sans text-[#c36f09] leading-relaxed">
              <p className="mb-6">{<AnimatedText section="about" tKey="missionText" />}</p>
              <p className="mb-6">{<AnimatedText section="about" tKey="bioText4" />}</p>
              <p>{<AnimatedText section="about" tKey="bioText5" />}</p>
            </div>
          </Reveal>

          {/* Section 2 Images (Mobile: 2, Desktop: Left Col, Spanning both rows) */}
          <Reveal delay={0.2} direction="left" className="order-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-32">
            <div className="grid grid-cols-2 gap-4 h-[500px] lg:h-[650px]">
              <div className="col-span-1 pb-12 flex flex-col gap-4">
                <div className="h-2/5 rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="/assets/pages/home/bio/bio-4.webp" alt="Teaching" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="flex-grow rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="/assets/pages/about/about_s2_r1.webp" alt="Community" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
              <div className="col-span-1 pt-12 flex flex-col gap-4">
                <div className="flex-grow rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="/assets/pages/about/about_s2_l1.webp" alt="Guidance" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Recognition & Honours Text (Mobile: 3, Desktop: Right Col, Bottom) */}
          <Reveal delay={0.3} className="order-3 lg:col-start-2 lg:row-start-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#a63c06] mb-6">
              <AnimatedText section="about" tKey="recognitionTitle" />
            </h2>
            <div className="prose prose-lg font-sans text-[#c36f09] leading-relaxed">
              <p className="mb-6">{<AnimatedText section="about" tKey="motivationText" />}</p>
              <p className="mb-6">{<AnimatedText section="about" tKey="bioText6" />}</p>
              <p>{<AnimatedText section="about" tKey="bioText7" />}</p>
            </div>
          </Reveal>
          
        </div>

        {/* Section 3: Gurukul Education */}
        <div id="education" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-24">
          <Reveal>
            <div className="pt-4 lg:pt-10">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                EDUCATION
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#a63c06] mb-6">
                {<AnimatedText section="about" tKey="gurukulTitle" />}
              </h2>
              
              <div className="prose prose-lg font-sans text-[#c36f09] leading-relaxed">
                <p className="mb-6">{<AnimatedText section="about" tKey="gurukulText1" />}</p>
                <p className="mb-6">{<AnimatedText section="about" tKey="gurukulText2" />}</p>
                <p>{<AnimatedText section="about" tKey="gurukulText3" />}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="right" className="lg:sticky lg:top-32">
            <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
              <div className="col-span-1 pt-8 flex flex-col gap-4">
                <div className="flex-grow rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="/assets/pages/about/about_s3_l1.webp" alt="Gurukul Tradition" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
              <div className="col-span-1 pb-8 flex flex-col gap-4">
                <div className="h-1/2 rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="/assets/pages/home/empowering/gurukul.webp" alt="Vedic Knowledge" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="h-1/2 rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <img src="/assets/pages/home/bio/bio-3.webp" alt="Scriptures" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>

      <SocialMediaBar />
    </div>
  );
};

export default About;
