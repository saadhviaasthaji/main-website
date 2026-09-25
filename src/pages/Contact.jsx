import React, { useState } from 'react';
import Reveal from '../components/ui/Reveal';
import Kicker from '../components/ui/Kicker';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from '../components/ui/AnimatedText';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

// IMPORTANT: Replace this with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygXHrn3y_43wJkLFNls4gnkxCOJAfV6ivKkmt8pC9tDd9LDXkNRkCXHB-LNOPiA9fysQ/exec';

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setStatus('error');
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const submitData = new FormData();
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('message', formData.message);
      
      // Use mode: 'no-cors' for Google Apps Script to prevent CORS/redirect errors.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: submitData,
      });
      
      // Since no-cors hides the response, we assume the POST succeeded
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Network error. Please make sure you have added the Google Script URL in Contact.jsx.');
    }
    
    // Clear status after some time
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  return (
    <div className="pt-24 bg-transparent min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Reveal>
          <div className="text-center mb-12">
            <Kicker>Get in Touch</Kicker>
            <h1 className="text-4xl md:text-5xl font-serif text-[#a63c06] mb-4"><AnimatedText section="contact" tKey="title" /></h1>
            <p className="text-[#c36f09] font-sans text-lg mb-6"><AnimatedText section="contact" tKey="subtitle" /></p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-[#c36f09] font-sans mb-12">
              <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-[#a63c06]/10 px-6 py-3 rounded-full shadow-md text-[#a63c06]">
                <span className="font-bold">Email:</span> saadhviaasthaji@gmail.com
              </div>
              <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-[#a63c06]/10 px-6 py-3 rounded-full shadow-md text-[#a63c06]">
                <span className="font-bold">Phone:</span> 8591902050
              </div>
              <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-[#a63c06]/10 px-6 py-3 rounded-full shadow-md text-[#a63c06]">
                <span className="font-bold">Coordinator:</span> Pratik Mishra
              </div>
            </div>
          </div>
          
          <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-[#a63c06]/10 rounded-2xl shadow-xl p-8 md:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#a63c06] mb-2">{getTranslation(language, 'contact', 'formFirst')}</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-transparent border-b-2 border-[#a63c06]/20 px-2 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#a63c06] mb-2">{getTranslation(language, 'contact', 'formLast')}</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-transparent border-b-2 border-[#a63c06]/20 px-2 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#a63c06] mb-2">{getTranslation(language, 'contact', 'formEmail')}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b-2 border-[#a63c06]/20 px-2 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#a63c06] mb-2">{getTranslation(language, 'contact', 'formPhone')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="\d{10}" maxLength="10" title="Please enter exactly 10 digits" className="w-full bg-transparent border-b-2 border-[#a63c06]/20 px-2 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#a63c06] mb-2">{getTranslation(language, 'contact', 'formMsg')}</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full bg-transparent border-2 border-[#a63c06]/20 px-4 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-xl placeholder-brand-charcoal/40 resize-none font-medium" required></textarea>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-green-50/80 backdrop-blur-sm border border-green-200 text-green-800 p-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span className="text-lg">✓</span> <AnimatedText section="contact" tKey="successMsg" />
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-800 p-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span className="text-lg">⚠</span> {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-4 text-center">
                <button type="submit" disabled={status === 'submitting'} className={`w-full md:w-auto px-12 py-4 bg-[#a63c06] text-white font-bold uppercase tracking-widest text-sm rounded-full shadow-lg hover:shadow-xl hover:bg-[#c36f09] hover:scale-105 transition-all ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {status === 'submitting' ? getTranslation(language, 'contact', 'sendingBtn') : getTranslation(language, 'contact', 'submitBtn')}
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
