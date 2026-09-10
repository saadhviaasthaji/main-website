import React from 'react';
import Reveal from '../components/ui/Reveal';
import Kicker from '../components/ui/Kicker';

const Booking = () => {
  return (
    <div className="pt-24 bg-brand-lightgrey min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Reveal>
          <div className="text-center mb-12">
            <Kicker>Booking</Kicker>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Invite for Katha</h1>
            <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">Please fill out this form to request Saadhvi Aastha Ji for a spiritual event, katha, or discourse.</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Organizer / Organization Name</label>
                  <input type="text" className="w-full bg-brand-lightgrey border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Contact Person Name</label>
                  <input type="text" className="w-full bg-brand-lightgrey border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Email Address</label>
                  <input type="email" className="w-full bg-brand-lightgrey border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-brand-lightgrey border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Proposed Event Date</label>
                  <input type="date" className="w-full bg-brand-lightgrey border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Event Location (City, Country)</label>
                  <input type="text" className="w-full bg-brand-lightgrey border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">Event Details & Expectations</label>
                <textarea rows="5" className="w-full bg-brand-lightgrey border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none" placeholder="Provide a brief overview of the event..." required></textarea>
              </div>

              <div className="pt-4 text-center">
                <button type="submit" className="btn-primary w-full md:w-auto px-12">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Booking;
