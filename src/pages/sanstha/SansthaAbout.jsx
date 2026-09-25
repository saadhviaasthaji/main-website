import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import AnimatedText from '../../components/ui/AnimatedText';

// New Components
import SansthaAboutHero from '../../components/sanstha/about/SansthaAboutHero';
import SansthaAboutStats from '../../components/sanstha/about/SansthaAboutStats';
import SansthaAboutBento from '../../components/sanstha/about/SansthaAboutBento';
import SansthaAboutTimeline from '../../components/sanstha/about/SansthaAboutTimeline';
import SansthaAboutLegal from '../../components/sanstha/about/SansthaAboutLegal';
import SansthaAboutCore from '../../components/sanstha/about/SansthaAboutCore';

const SansthaAbout = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-transparent min-h-screen">
      {/* 1. Cinematic Hero */}
      <SansthaAboutHero />

      {/* 2. Stats Banner */}
      <SansthaAboutStats />

      <SansthaAboutCore />

      {/* 4. Bento Grid for Social Objectives & Core Values */}
      <SansthaAboutBento />

      {/* 5. Interactive Timeline for History */}
      <SansthaAboutTimeline />

      {/* 6. Legal & Registration (Dark Footer-style section) */}
      <SansthaAboutLegal />

    </div>
  );
};

export default SansthaAbout;
