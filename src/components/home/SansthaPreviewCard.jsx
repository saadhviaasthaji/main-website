import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';

const SansthaPreviewCard = () => {
  return (
    <section className="py-20 bg-brand-lightgrey">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Image Placeholder */}
            <div className="md:w-5/12 bg-gray-200 relative min-h-[300px] md:min-h-full">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-sans">
                [Sanstha Image Placeholder]
              </div>
            </div>

            {/* Content */}
            <div className="md:w-7/12 p-10 md:p-14 flex flex-col justify-center">
              <Kicker>Aastha Sevabhavi Sanstha</Kicker>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-4">
                Service to Humanity
              </h2>
              <div className="mb-6 font-sans text-sm text-brand-blue font-semibold tracking-wide">
                Registration No: [Placeholder]
              </div>
              <p className="text-gray-600 font-sans leading-relaxed mb-8 text-lg">
                Established with the vision that devotion must manifest as service. Aastha Sevabhavi Sanstha runs multiple sustained initiatives, including the Roti Bank, to ensure no individual goes to sleep hungry and to empower the next generation.
              </p>
              <div>
                <Link to="/sanstha" className="btn-outline">
                  Know More About Our Sanstha &rarr;
                </Link>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SansthaPreviewCard;
