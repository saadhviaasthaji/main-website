import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../data/translations';

const AnimatedText = ({ section, tKey, uppercase = false, className = "" }) => {
  const { language } = useLanguage();
  let text = getTranslation(language, section, tKey);
  
  if (uppercase && typeof text === 'string') {
    text = text.toUpperCase();
  }

  return (
    <span className={`inline-flex relative overflow-hidden align-bottom ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={language + text}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default AnimatedText;
