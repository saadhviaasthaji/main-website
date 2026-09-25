import React from 'react';
import Reveal from '../components/ui/Reveal';

const Terms = () => {
  return (
    <div className="pt-32 pb-20 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-serif text-[#a63c06] mb-8">Terms of Service</h1>
          <div className="prose prose-lg text-[#c36f09] font-sans">
            <p className="mb-4">Last updated: [Date]</p>
            
            <h2 className="text-2xl font-serif text-[#a63c06] mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2 className="text-2xl font-serif text-[#a63c06] mt-8 mb-4">2. Use License</h2>
            <p className="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Saadhvi Aastha Ji's website for personal, non-commercial transitory viewing only.</p>
            
            <h2 className="text-2xl font-serif text-[#a63c06] mt-8 mb-4">3. Disclaimer</h2>
            <p className="mb-4">The materials on this website are provided on an 'as is' basis. Saadhvi Aastha Ji makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
            
            <p className="mt-8 italic text-sm">Note: This is a placeholder terms of service. Please replace with legally vetted content.</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Terms;
