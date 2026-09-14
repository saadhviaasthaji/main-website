import React from 'react';
import AlternatingContentBlock from '../../components/ui/AlternatingContentBlock';
import { Link } from 'react-router-dom';
import Reveal from '../../components/ui/Reveal';

const SansthaWorks = () => {
  return (
    <div className="pt-24 bg-transparent min-h-screen pb-20">
      <header className="py-20 text-center bg-brand-lightgrey mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Our Works</h1>
          <p className="text-gray-600 font-sans text-lg">Impacting lives through dedicated service and compassion.</p>
        </div>
      </header>

      {/* Overview */}
      <AlternatingContentBlock
        kicker="Overview"
        title="Social Service Activities"
        content="Aastha Sevabhavi Sanstha conducts a wide array of social service activities. From education to healthcare, our initiatives are designed to provide holistic support to marginalized communities. Our volunteers work tirelessly on the ground to ensure resources reach those who truly need them."
        imageRight={false}
      />

      {/* Roti Bank Spotlight Block */}
      <section className="py-20 bg-brand-lightgrey">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gray-200 rounded-xl relative flex items-center justify-center mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 w-16 h-16 bg-[#000000] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop" alt="Food Prep" className="w-full h-32 object-cover rounded-lg" />
                  <img src="https://images.unsplash.com/photo-1593113563332-f144d2843bb3?q=80&w=400&auto=format&fit=crop" alt="Distribution" className="w-full h-32 object-cover rounded-lg" />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <span className="text-sm uppercase tracking-[2px] font-bold text-[#000000] mb-4 block">Spotlight Initiative</span>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-6">The Roti Bank</h2>
                <p className="text-gray-600 font-sans mb-4">
                  Our flagship initiative objective is simple: Eradicate hunger. We collect surplus freshly-cooked food and prepare fresh meals in our central kitchens to feed over 5,000 individuals daily.
                </p>
                <ul className="list-disc pl-5 mb-8 text-gray-600 font-sans space-y-2">
                  <li><strong>Who Benefits:</strong> Street dwellers, daily wage laborers, and children in slums.</li>
                  <li><strong>How it Works:</strong> A massive network of volunteers and collection vans run daily routes.</li>
                  <li><strong>Social Impact:</strong> Reducing malnourishment and food waste simultaneously.</li>
                </ul>
                <Link to="/sanstha/roti-bank" className="btn-primary inline-block">
                  See the Full Roti Bank Story &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Educational Support */}
      <AlternatingContentBlock
        kicker="Initiative"
        title="Educational Support"
        content="Education is the ultimate tool for empowerment. The Sanstha provides scholarships, free books, and runs evening classes for children from marginalized communities to ensure they have the opportunity to build a better future."
        imageRight={true}
      />

      {/* Healthcare Camps */}
      <AlternatingContentBlock
        kicker="Initiative"
        title="Healthcare Camps"
        content="We regularly organize free medical check-up camps, blood donation drives, and awareness programs in rural areas to promote health and well-being among the underserved."
        imageRight={false}
      />
    </div>
  );
};

export default SansthaWorks;
