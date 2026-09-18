import React, { useState } from 'react';
import Reveal from '../components/ui/Reveal';
import Kicker from '../components/ui/Kicker';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    Organization: '',
    ContactName: '',
    Email: '',
    Phone: '',
    Date: '',
    Location: '',
    Details: ''
  });

  const [expandedSections, setExpandedSections] = useState({ events: false, reqs: false });
  
  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxW5ZWbgl2oLb0YLdg9FYygmJ-vypD-ItyT5fZ7LJsHWk8VD2mlm-qWr2xX9YUiqFCA/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        // mode: 'no-cors' is often required for Google Apps Script to prevent CORS errors on the frontend,
        // but it means we won't be able to read the JSON response.
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Since mode is 'no-cors', response is opaque. We just assume success if it didn't throw.
      setIsSuccess(true);
      setFormData({
        Organization: '',
        ContactName: '',
        Email: '',
        Phone: '',
        Date: '',
        Location: '',
        Details: ''
      });
    } catch (error) {
      console.error('Error submitting form', error);
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 bg-transparent min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Reveal>
          <div className="text-center mb-12">
            <Kicker>Booking</Kicker>
            <h1 className="text-4xl md:text-5xl font-serif text-[#a63c06] mb-4">Invite for Katha</h1>
            <p className="text-[#c36f09] font-sans text-lg max-w-2xl mx-auto">Please fill out this form to request Saadhvi Aastha Ji for a spiritual event, katha, or discourse.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-[#a63c06]/10 rounded-2xl shadow-xl p-6 lg:p-8">
                <div className="flex justify-between items-center cursor-pointer lg:cursor-default" onClick={() => toggleSection('events')}>
                  <h3 className="font-serif font-bold text-xl text-[#a63c06]">Types of Events Accepted</h3>
                  <div className="lg:hidden text-brand-charcoal/60">
                    {expandedSections.events ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                <div className={`mt-4 ${expandedSections.events ? 'block' : 'hidden lg:block'}`}>
                  <ul className="list-disc list-inside text-[#c36f09] font-medium text-sm space-y-3">
                    <li>Shreemad Bhagwat Katha</li>
                    <li>Shreemad Bhagwat Katha — personal/family gatherings</li>
                    <li>Radha Naam Concerts (Live Events)</li>
                    <li>Spiritual and devotional events</li>
                    <li>Religious programmes</li>
                    <li>Bhakti and devotional gatherings</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-[#a63c06]/10 rounded-2xl shadow-xl p-6 lg:p-8">
                <div className="flex justify-between items-center cursor-pointer lg:cursor-default" onClick={() => toggleSection('reqs')}>
                  <h3 className="font-serif font-bold text-xl text-[#a63c06]">Requirements for Organizers</h3>
                  <div className="lg:hidden text-brand-charcoal/60">
                    {expandedSections.reqs ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                <div className={`mt-4 ${expandedSections.reqs ? 'block' : 'hidden lg:block'}`}>
                  <ul className="list-disc list-inside text-[#c36f09] font-medium text-sm space-y-3">
                    <li>Travel and transportation arrangements/expenses for Saadhvi Aastha Ji and team.</li>
                    <li>Suitable hospitality and accommodation arrangements.</li>
                    <li>Stage, seating, sound and other appropriate event arrangements.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#fbf5e6]/70 backdrop-blur-xl border border-[#a63c06]/10 rounded-2xl shadow-xl p-8 md:p-12">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#a63c06] mb-4">Invitation request sent successfully!</h3>
                  <p className="text-[#c36f09] mb-8">Thank you for your interest. Our official coordinator will review your request and get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="btn-primary px-8"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {errorMessage && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm mb-6 border border-red-100">
                      {errorMessage}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#a63c06] mb-2">Organizer / Organization Name</label>
                      <input 
                        type="text" 
                        name="Organization"
                        value={formData.Organization}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-[#a63c06]/20 px-2 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#a63c06] mb-2">Contact Person Name</label>
                      <input 
                        type="text" 
                        name="ContactName"
                        value={formData.ContactName}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-[#a63c06]/20 px-2 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#a63c06] mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-[#a63c06]/20 px-2 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#a63c06] mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="Phone"
                        value={formData.Phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        title="Please enter exactly 10 digits"
                        className="w-full bg-transparent border-b-2 border-[#a63c06]/20 px-2 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#a63c06] mb-2">Proposed Event Date</label>
                      <input 
                        type="date" 
                        name="Date"
                        value={formData.Date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-transparent border-b-2 border-[#a63c06]/20 px-2 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#a63c06] mb-2">Event Location (City, Country)</label>
                      <input 
                        type="text" 
                        name="Location"
                        value={formData.Location}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-[#a63c06]/20 px-2 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-none placeholder-brand-charcoal/40 font-medium" 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#a63c06] mb-2">Event Details & Expectations</label>
                    <textarea 
                      rows="5" 
                      name="Details"
                      value={formData.Details}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#a63c06]/20 px-4 py-3 text-[#a63c06] focus:outline-none focus:border-[#a63c06] transition-colors rounded-xl placeholder-brand-charcoal/40 resize-none font-medium" 
                      placeholder="Provide a brief overview of the event..." 
                      required
                    ></textarea>
                  </div>

                  <div className="pt-4 text-center">
                    <p className="text-xs text-gray-500 mb-4">Requests are reviewed by Pratik Mishra, Official Coordinator. Submission does not constitute automatic confirmation.</p>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`btn-primary w-full md:w-auto px-12 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Booking;
