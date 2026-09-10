import React from 'react';
import AlternatingContentBlock from '../../components/ui/AlternatingContentBlock';
import Reveal from '../../components/ui/Reveal';
import { Link } from 'react-router-dom';

import LeadershipGrid from '../../components/sanstha/LeadershipGrid';

const SansthaHome = () => {
  return (
    <div className="pt-24 bg-white min-h-screen pb-20">
      
      {/* Hero Section */}
      <header className="relative bg-brand-charcoal text-white py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Reveal>
            <span className="text-sm uppercase tracking-widest text-brand-blue font-bold mb-4 block">Welcome to</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Aastha Sevabhavi Sanstha</h1>
            <p className="text-xl md:text-2xl font-sans font-light text-gray-200 mb-10">
              Where devotion transforms into service.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/sanstha/donation" className="btn-primary">Donate Now</Link>
              <Link to="/sanstha/about" className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-brand-charcoal">Learn More</Link>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Intro Block */}
      <AlternatingContentBlock
        kicker="Our Mission"
        title="Service to Humanity is Service to God"
        content="Founded by Saadhvi Aastha Ji, our Sanstha operates on the core principle that true spirituality must reflect in our actions towards those in need. We run various initiatives aimed at eradicating hunger, providing education, and supporting the underprivileged."
        imageRight={false}
      />

      {/* Featured Initiative */}
      <AlternatingContentBlock
        kicker="Featured Initiative"
        title="The Roti Bank"
        content="Our flagship initiative, the Roti Bank, ensures that no individual in our community goes to sleep hungry. Through a massive network of volunteers and generous donors, we collect and distribute fresh, nutritious meals daily."
        bullets={[
          "Feeding thousands daily",
          "Freshly prepared, hygienic meals",
          "Powered by community volunteers"
        ]}
        imageRight={true}
      />

      {/* Leadership Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <Reveal>
            <span className="text-sm uppercase tracking-widest text-[#4FA8D8] font-bold mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-4">Meet the Visionaries</h2>
            <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
              Guiding our mission with devotion, experience, and a commitment to serving humanity.
            </p>
          </Reveal>
        </div>
        <LeadershipGrid />
      </section>

      {/* Gallery Preview */}
      <AlternatingContentBlock
        kicker="Glimpses"
        title="Photo Gallery"
        content="Explore our extensive collection of photos capturing the essence of our kathas, events, and seva initiatives. Witness the smiles and the impact we create together on a daily basis."
        bullets={[
          "Food Distribution Drives",
          "Educational Support Events",
          "Spiritual Discourses"
        ]}
        imageRight={false}
      />

      {/* Quick Links */}
      <section className="py-20 bg-brand-lightgrey">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl font-serif text-brand-charcoal mb-12">Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/sanstha/membership" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
                <h3 className="text-2xl font-serif text-brand-charcoal mb-4 group-hover:text-brand-blue transition-colors">Become a Member</h3>
                <p className="text-gray-600 font-sans">Join our dedicated family of volunteers and actively participate in our noble causes.</p>
              </Link>
              <Link to="/sanstha/donation" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
                <h3 className="text-2xl font-serif text-brand-charcoal mb-4 group-hover:text-brand-blue transition-colors">Make a Donation</h3>
                <p className="text-gray-600 font-sans">Your financial support directly fuels our Roti Bank and educational programs.</p>
              </Link>
              <Link to="/sanstha/our-works" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
                <h3 className="text-2xl font-serif text-brand-charcoal mb-4 group-hover:text-brand-blue transition-colors">View Our Works</h3>
                <p className="text-gray-600 font-sans">Explore the impact we have created together across various communities.</p>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default SansthaHome;
