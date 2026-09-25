import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadershipData } from '../../data/leadership';
import { X } from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import AnimatedText from '../ui/AnimatedText';

const LeadershipCard = ({ person, onClick, bgColor }) => {
  return (
    <motion.div
      layoutId={`card-${person.id}`}
      onClick={onClick}
      className={`cursor-pointer group relative overflow-hidden w-full aspect-[3/4] md:aspect-square border border-[#a63c06]/20 hover:border-[#a63c06]/50 rounded-3xl transition-shadow duration-500 shadow-lg hover:shadow-xl`}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 w-full h-full">
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, transparent 60%, ${bgColor}ee 100%)`
        }}
      />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-8 text-left z-20">
        <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-200 mb-1 md:mb-2 block drop-shadow-sm">
          {person.designation}
        </span>
        <h3 className="font-serif text-[13px] sm:text-base md:text-4xl text-white leading-tight tracking-tight drop-shadow-md">{person.name}</h3>
      </div>
    </motion.div>
  );
};

const ExpandedProfile = ({ person, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 cursor-pointer"
      />
      
      {/* Expanded Modal Content */}
      <motion.div
        layoutId={`card-${person.id}`}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-[#fbf5e6] w-full max-w-6xl max-h-[90vh] md:max-h-full overflow-hidden rounded-[2rem] border border-[#a63c06]/20 shadow-2xl flex flex-col md:flex-row z-10"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-3 md:p-4 bg-white/90 shadow-md rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={20} className="text-[#a63c06]" />
        </button>

        <motion.div className="w-full md:w-2/5 h-[250px] md:h-auto relative shrink-0 overflow-hidden bg-[#fbf5e6]">
          <img
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover"
          />
          {/* Blend Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-[#fbf5e6] pointer-events-none" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="p-6 md:p-16 w-full flex flex-col justify-start overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <span className="text-sm uppercase tracking-widest font-bold text-[#c36f09] mb-4 block">
            {person.designation}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#a63c06] mb-8 tracking-tight leading-none">{person.name}</h2>
          
          {person.socialLinks && (
            <div className="flex gap-4 mb-10">
              {person.socialLinks.instagram && (
                <a href={person.socialLinks.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#a63c06]/20 flex items-center justify-center text-[#a63c06] hover:bg-[#a63c06] hover:text-white transition-all duration-300 shadow-sm">
                  <FaInstagram size={18} />
                </a>
              )}
              {person.socialLinks.facebook && (
                <a href={person.socialLinks.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#a63c06]/20 flex items-center justify-center text-[#a63c06] hover:bg-[#a63c06] hover:text-white transition-all duration-300 shadow-sm">
                  <FaFacebookF size={18} />
                </a>
              )}
            </div>
          )}
          
          <div className="prose prose-lg font-sans text-[#c36f09] mb-12 max-w-none font-light leading-[1.8]">
            <p className="font-normal text-[#a63c06] text-xl mb-6 leading-relaxed">{person.intro}</p>
            <p className="mb-6">{person.background}</p>
            <p className="mb-6"><strong className="text-[#a63c06] font-medium">Role:</strong> {person.role}</p>
            <p className="mb-6"><strong className="text-[#a63c06] font-medium">Journey:</strong> {person.journey}</p>
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
};

const LeadershipGrid = ({ showCoreTeam = true }) => {
  const [selectedId, setSelectedId] = useState(null);

  const bgHexColors = ['#4a2e1b', '#8b6508', '#3e2723', '#6b3112', '#5c4033'];

  const leaders = [
    {
      ...leadershipData.founder,
      name: <AnimatedText section="sansthaHome" tKey="fndName" />,
      designation: <AnimatedText section="sansthaHome" tKey="fndDesig" />,
      intro: <AnimatedText section="sansthaHome" tKey="fndIntro" />,
      background: <AnimatedText section="sansthaHome" tKey="fndBg" />,
      role: <AnimatedText section="sansthaHome" tKey="fndRole" />,
      journey: <AnimatedText section="sansthaHome" tKey="fndJourney" />
    },
    {
      ...leadershipData.president,
      name: <AnimatedText section="sansthaHome" tKey="presName" />,
      designation: <AnimatedText section="sansthaHome" tKey="presDesig" />,
      intro: <AnimatedText section="sansthaHome" tKey="presIntro" />,
      background: <AnimatedText section="sansthaHome" tKey="presBg" />,
      role: <AnimatedText section="sansthaHome" tKey="presRole" />,
      journey: <AnimatedText section="sansthaHome" tKey="presJourney" />
    }
  ];
  const selectedPerson = leaders.find(l => l.id === selectedId);

  // Focus trap handler (simplified)
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedId) setSelectedId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:gap-16 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 mb-12">
        {leaders.map((person, idx) => (
          <LeadershipCard 
            key={person.id} 
            person={person}
            bgColor={bgHexColors[idx % bgHexColors.length]}
            onClick={() => setSelectedId(person.id)} 
          />
        ))}
      </div>

      {showCoreTeam && leadershipData.members && leadershipData.members.length > 0 && (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 mt-24">
          <div className="flex items-end justify-between mb-16 border-b border-gray-200 pb-6">
            <h3 className="text-3xl md:text-5xl font-serif text-[#a63c06] tracking-tight"><AnimatedText section="sansthaHome" tKey="memTitle" /></h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {leadershipData.members.map((member, idx) => {
              const hexColor = bgHexColors[(idx + 2) % bgHexColors.length];
              return (
                <div key={idx} className="group relative aspect-[3/4] overflow-hidden backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 hover:border-white/50 cursor-default">
                  
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full z-0">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" />
                  </div>
                  
                  {/* Gradient Fade Overlay */}
                  <div 
                    className="absolute inset-0 z-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom, transparent 0%, transparent 65%, ${hexColor}ee 100%)`
                    }}
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                    <span className="text-[10px] md:text-xs font-bold text-gray-200 uppercase tracking-widest drop-shadow-sm mb-1 block">
                      <AnimatedText section="sansthaHome" tKey={`mem${idx + 1}Desig`} />
                    </span>
                    <h4 className="font-serif text-lg md:text-xl text-white drop-shadow-md">
                      <AnimatedText section="sansthaHome" tKey={`mem${idx + 1}Name`} />
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <AnimatePresence>
        {selectedId && (
          <ExpandedProfile 
            person={selectedPerson} 
            onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadershipGrid;
