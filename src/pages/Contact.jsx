import React, { useState } from 'react';
import Reveal from '../components/ui/Reveal';
import Kicker from '../components/ui/Kicker';

// IMPORTANT: Replace this with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygXHrn3y_43wJkLFNls4gnkxCOJAfV6ivKkmt8pC9tDd9LDXkNRkCXHB-LNOPiA9fysQ/exec';

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Contact Us</h1>
            <p className="text-gray-600 font-sans text-lg mb-6">We would love to hear from you. Please fill out the form below or contact us directly.</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-gray-700 font-sans mb-12">
              <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-brand-charcoal/10 px-6 py-3 rounded-full shadow-md text-brand-charcoal">
                <span className="font-bold">Email:</span> saadhviaasthaji@gmail.com
              </div>
              <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-brand-charcoal/10 px-6 py-3 rounded-full shadow-md text-brand-charcoal">
                <span className="font-bold">Phone:</span> 8591902050
              </div>
              <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-brand-charcoal/10 px-6 py-3 rounded-full shadow-md text-brand-charcoal">
                <span className="font-bold">Coordinator:</span> Pratik Mishra
              </div>
            </div>
          </div>
          
          <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-brand-charcoal/10 rounded-2xl shadow-xl p-8 md:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-transparent border-b-2 border-brand-charcoal/20 px-2 py-3 text-brand-charcoal focus:outline-none focus:border-brand-charcoal transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-transparent border-b-2 border-brand-charcoal/20 px-2 py-3 text-brand-charcoal focus:outline-none focus:border-brand-charcoal transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b-2 border-brand-charcoal/20 px-2 py-3 text-brand-charcoal focus:outline-none focus:border-brand-charcoal transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="\d{10}" maxLength="10" title="Please enter exactly 10 digits" className="w-full bg-transparent border-b-2 border-brand-charcoal/20 px-2 py-3 text-brand-charcoal focus:outline-none focus:border-brand-charcoal transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full bg-transparent border-2 border-brand-charcoal/20 px-4 py-3 text-brand-charcoal focus:outline-none focus:border-brand-charcoal transition-colors rounded-xl placeholder-brand-charcoal/40 resize-none font-medium" required></textarea>
              </div>

              {status === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg text-sm font-medium">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              <div className="pt-4 text-center">
                <button type="submit" disabled={status === 'submitting'} className={`btn-primary w-full md:w-auto px-12 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
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
