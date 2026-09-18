import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarHeart } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingBooking = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link to="/booking">
        <motion.div
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0 0 0 0 rgba(79, 168, 216, 0.4)",
              "0 0 0 15px rgba(79, 168, 216, 0)",
              "0 0 0 0 rgba(79, 168, 216, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="bg-brand-blue text-white p-4 rounded-full shadow-2xl hover:bg-[#a63c06] transition-colors flex items-center justify-center group"
        >
          <CalendarHeart size={28} />
          <span className="absolute right-full mr-4 bg-white text-[#a63c06] px-4 py-2 rounded shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Invite for Katha
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default FloatingBooking;
