import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadershipData } from '../../data/leadership';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const LeadershipCard = ({ person, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${person.id}`}
      onClick={onClick}
      className="cursor-pointer group relative overflow-hidden w-full bg-white border border-transparent hover:border-gray-200 rounded-3xl transition-shadow duration-500"
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
      <motion.div layoutId={`image-container-${person.id}`} className="aspect-square relative overflow-hidden rounded-t-3xl md:rounded-3xl m-2 bg-gray-100">
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover filter grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
        />
        {/* Hover Peek Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <p className="text-white font-sans text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 line-clamp-3 font-light">
            {person.intro}
          </p>
        </div>
      </motion.div>
      
      <div className="p-8 text-left bg-white">
        <span className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block">
          {person.designation}
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-black leading-tight tracking-tight">{person.name}</h3>
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
        className="absolute inset-0 bg-white/90 backdrop-blur-md cursor-pointer"
      />
      
      {/* Expanded Modal Content */}
      <motion.div
        layoutId={`card-${person.id}`}
        className="relative bg-white w-full max-w-6xl max-h-full overflow-hidden rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_rgb(0,0,0,0.08)] flex flex-col md:flex-row z-10"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-4 bg-gray-100/80 backdrop-blur-lg rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <X size={20} className="text-black" />
        </button>

        <motion.div layoutId={`image-container-${person.id}`} className="w-full md:w-2/5 h-[300px] md:h-auto relative shrink-0 overflow-hidden bg-gray-100">
          <img
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover filter grayscale-[20%]"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="p-8 md:p-16 w-full flex flex-col justify-center overflow-y-auto"
        >
          <span className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-4 block">
            {person.designation}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-black mb-10 tracking-tight leading-none">{person.name}</h2>
          
          <div className="prose prose-lg font-sans text-gray-500 mb-12 max-w-none font-light leading-[1.8]">
            <p className="font-normal text-black text-xl mb-6 leading-relaxed">{person.intro}</p>
            <p className="mb-6">{person.background}</p>
            <p className="mb-6"><strong className="text-black font-medium">Role:</strong> {person.role}</p>
            <p className="mb-6"><strong className="text-black font-medium">Journey:</strong> {person.journey}</p>
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
};

const LeadershipGrid = ({ showCoreTeam = true }) => {
  const [selectedId, setSelectedId] = useState(null);

  const leaders = [leadershipData.founder, leadershipData.president];
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 mb-12">
        {leaders.map(person => (
          <LeadershipCard 
            key={person.id} 
            person={person} 
            onClick={() => setSelectedId(person.id)} 
          />
        ))}
      </div>

      {showCoreTeam && leadershipData.members && leadershipData.members.length > 0 && (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 mt-24">
          <div className="flex items-end justify-between mb-16 border-b border-gray-200 pb-6">
            <h3 className="text-3xl md:text-5xl font-serif text-black tracking-tight">Our Core Team</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipData.members.map((member, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-xl text-black mb-2">{member.name}</h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{member.designation}</p>
                </div>
              </div>
            ))}
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
