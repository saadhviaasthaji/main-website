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
    <span className={`inline-flex relative overflow-hidden align-bottom pb-3 -mb-3 pt-3 -mt-3 px-1 -mx-1 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={language + text}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`inline-block ${language === 'hi' ? 'text-[1.1em] leading-relaxed' : ''}`}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default AnimatedText;
