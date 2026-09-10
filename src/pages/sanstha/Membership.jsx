import React, { useState } from 'react';
import Reveal from '../../components/ui/Reveal';
import Kicker from '../../components/ui/Kicker';

const Membership = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    occupation: '',
    reason: '',
    message: ''
  });
  
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (!formData.fullName || !formData.phone || !formData.reason) {
      setStatus({ type: 'error', message: 'Please fill out all required fields.' });
      return;
    }
    
    // Simulate submission
    setStatus({ type: 'success', message: 'Your membership application has been submitted successfully.' });
    setFormData({
      fullName: '', email: '', phone: '', address: '', city: '', occupation: '', reason: '', message: ''
    });
  };

  return (
    <div className="pt-24 bg-white min-h-screen pb-20">
      <header className="py-20 text-center bg-brand-lightgrey mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <Kicker>Join Us</Kicker>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Become a Member</h1>
          <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
            We welcome passionate individuals who wish to dedicate their time, skills, and energy to selfless service. Join our family of volunteers and actively participate in our noble causes.
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            
            {status && (
              <div className={`mb-6 p-4 rounded-lg font-sans text-sm ${status.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-brand-charcoal mb-2">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-charcoal mb-2">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-brand-charcoal mb-2">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" required />
                </div>
                <div>
                  <label htmlFor="occupation" className="block text-sm font-semibold text-brand-charcoal mb-2">Occupation</label>
                  <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-semibold text-brand-charcoal mb-2">Full Address</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-brand-charcoal mb-2">City</label>
                  <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-semibold text-brand-charcoal mb-2">Reason for Joining *</label>
                <select id="reason" name="reason" value={formData.reason} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-white" required>
                  <option value="" disabled>Select an option</option>
                  <option value="volunteer_roti_bank">Volunteer for Roti Bank</option>
                  <option value="teach_children">Teach Underprivileged Children</option>
                  <option value="medical_camps">Help in Medical Camps</option>
                  <option value="administrative">Administrative Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brand-charcoal mb-2">Additional Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none"></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="btn-primary w-full py-4 text-lg">
                  Submit Application
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Note: Applications are reviewed manually by our team unless an automated approval workflow is enabled later.
                </p>
              </div>

            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Membership;
