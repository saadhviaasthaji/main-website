import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, width = '100%', className = '' }) => {
  return (
    <div style={{ position: 'relative', width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
