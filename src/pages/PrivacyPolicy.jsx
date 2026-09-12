import React from 'react';
import Reveal from '../components/ui/Reveal';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-serif text-brand-charcoal mb-8">Privacy Policy</h1>
          <div className="prose prose-lg text-gray-600 font-sans">
            <p className="mb-4">Last updated: [Date]</p>
            
            <h2 className="text-2xl font-serif text-brand-charcoal mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us.</p>
            
            <h2 className="text-2xl font-serif text-brand-charcoal mt-8 mb-4">2. How We Use Information</h2>
            <p className="mb-4">We may use the information we collect to provide, maintain, and improve our services, including to process transactions, send notices, and respond to your questions.</p>
            
            <h2 className="text-2xl font-serif text-brand-charcoal mt-8 mb-4">3. Sharing of Information</h2>
            <p className="mb-4">We do not share your personal information with third parties except as described in this privacy policy.</p>
            
            <p className="mt-8 italic text-sm">Note: This is a placeholder privacy policy. Please replace with legally vetted content.</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
