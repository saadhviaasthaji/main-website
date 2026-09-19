import React from 'react';
import Kicker from '../../components/ui/Kicker';
import LeadershipGrid from '../../components/sanstha/LeadershipGrid';
import Reveal from '../../components/ui/Reveal';
import MembershipModal from '../../components/sanstha/MembershipModal';

const Members = () => {
  const [isMembershipModalOpen, setIsMembershipModalOpen] = React.useState(false);
  return (
    <div className="pt-24 bg-transparent min-h-screen pb-20">
      <header className="py-24 md:py-32 bg-transparent">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <Kicker>Our Family</Kicker>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#a63c06] mb-4 tracking-tight">Meet the Members</h1>
          <p className="text-[#c36f09] font-sans text-lg max-w-2xl mx-auto font-light leading-relaxed">
            The dedicated individuals guiding our mission with devotion, experience, and a commitment to serving humanity.
          </p>
        </div>
      </header>

      <section className="bg-transparent relative pb-24">
        <LeadershipGrid />
      </section>

      {/* Membership Button Section */}
      <section id="join-section" className="py-24 bg-transparent text-center scroll-mt-24">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-serif text-[#a63c06] mb-6">Become a Part of Our Family</h2>
          <p className="text-[#c36f09] font-sans text-lg max-w-2xl mx-auto mb-10">
            Join our mission to serve humanity. We are always looking for passionate volunteers to help us make a difference.
          </p>
          <button 
            onClick={() => setIsMembershipModalOpen(true)}
            className="inline-block bg-[#a63c06] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#a63c06]/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Join The Sanstha
          </button>
        </Reveal>
      </section>

      <MembershipModal 
        isOpen={isMembershipModalOpen} 
        onClose={() => setIsMembershipModalOpen(false)} 
      />
    </div>
  );
};

export default Members;
