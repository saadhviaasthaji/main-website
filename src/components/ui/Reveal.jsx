import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, width = '100%', className = '', direction = 'up' }) => {
  const getVariants = () => {
    switch(direction) {
      case 'left':
        return { hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } };
      case 'right':
        return { hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } };
      case 'up':
      default:
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <div style={{ position: 'relative', width }} className={className}>
      <motion.div
        className={className.includes('h-full') ? 'h-full' : ''}
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
