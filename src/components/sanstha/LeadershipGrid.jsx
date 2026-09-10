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
      className="cursor-pointer group relative bg-brand-lightgrey rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 w-full"
      whileHover={{ scale: 1.06, y: -5 }}
      whileTap={{ scale: 0.98 }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <motion.img
          layoutId={`image-${person.id}`}
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover"
        />
        {/* Hover Peek Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white font-sans text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 line-clamp-3">
            {person.intro}
          </p>
        </div>
      </div>
      
      <motion.div layoutId={`details-${person.id}`} className="p-6 bg-white text-center">
        <h3 className="font-serif text-2xl text-brand-charcoal mb-1">{person.name}</h3>
        <span className="text-xs uppercase tracking-[2px] font-bold text-[#4FA8D8]">
          {person.designation}
        </span>
      </motion.div>
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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />
      
      {/* Expanded Modal Content */}
      <motion.div
        layoutId={`card-${person.id}`}
        className="relative bg-white w-full max-w-5xl max-h-full overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row z-10"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <X size={24} className="text-brand-charcoal" />
        </button>

        <motion.div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
          <motion.img
            layoutId={`image-${person.id}`}
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div layoutId={`details-${person.id}`} className="p-8 md:p-12 w-full flex flex-col">
          <span className="text-sm uppercase tracking-[2px] font-bold text-[#4FA8D8] mb-2 block">
            {person.designation}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6">{person.name}</h2>
          
          <div className="prose prose-lg font-sans text-gray-600 mb-8 max-w-none">
            <p className="font-semibold text-brand-charcoal mb-4">{person.intro}</p>
            <p className="mb-4">{person.background}</p>
            <p className="mb-4"><strong className="text-brand-charcoal">Role:</strong> {person.role}</p>
            <p className="mb-4"><strong className="text-brand-charcoal">Journey:</strong> {person.journey}</p>
          </div>

          <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
            <Link 
              to={`/sanstha/${person.id}`} 
              className="text-[#4FA8D8] font-bold hover:text-brand-charcoal transition-colors flex items-center gap-2"
              onClick={onClose}
            >
              View Full Page &rarr;
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const LeadershipGrid = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto px-4">
        {leaders.map(person => (
          <LeadershipCard 
            key={person.id} 
            person={person} 
            onClick={() => setSelectedId(person.id)} 
          />
        ))}
      </div>

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
