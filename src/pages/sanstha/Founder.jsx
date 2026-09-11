import React from 'react';
import Reveal from '../../components/ui/Reveal';
import Kicker from '../../components/ui/Kicker';
import { leadershipData } from '../../data/leadership';
import { Link } from 'react-router-dom';

const Founder = () => {
  const person = leadershipData.founder;

  return (
    <div className="pt-24 bg-white min-h-screen pb-20">
      <header className="py-20 text-center bg-brand-lightgrey mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <Kicker>Leadership</Kicker>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Meet the {person.designation}</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-96 md:h-auto shrink-0 relative">
            <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12 w-full flex flex-col">
            <Reveal>
              <span className="text-sm uppercase tracking-[2px] font-bold text-[#000000] mb-2 block">
                {person.designation}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6">{person.name}</h2>
              
              <div className="prose prose-lg font-sans text-gray-600 mb-8 max-w-none">
                <p className="font-semibold text-brand-charcoal mb-4">{person.intro}</p>
                <p className="mb-4">{person.background}</p>
                
                <h3 className="font-serif text-2xl text-brand-charcoal mt-8 mb-4">Details</h3>
                <ul className="space-y-3 list-none p-0 m-0">
                  <li><strong className="text-brand-charcoal font-semibold block">Occupation:</strong> {person.occupation}</li>
                  <li><strong className="text-brand-charcoal font-semibold block">Education:</strong> {person.education}</li>
                  <li><strong className="text-brand-charcoal font-semibold block">Role in Sanstha:</strong> {person.role}</li>
                  <li><strong className="text-brand-charcoal font-semibold block">Journey:</strong> {person.journey}</li>
                </ul>

                <h3 className="font-serif text-2xl text-brand-charcoal mt-8 mb-4">Key Achievements</h3>
                <ul className="list-disc pl-5">
                  {person.achievements.map((item, idx) => (
                    <li key={idx} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-8 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-4">
                  {Object.entries(person.socialLinks).map(([platform, link]) => (
                    <a key={platform} href={link} className="text-[#000000] hover:text-brand-charcoal transition-colors font-medium capitalize">
                      {platform}
                    </a>
                  ))}
                </div>
                <a href={`mailto:${person.contact}`} className="btn-primary">
                  Contact
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
