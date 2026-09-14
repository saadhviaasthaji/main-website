import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MembershipModal = ({ isOpen, onClose }) => {
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
    if (!formData.fullName || !formData.phone || !formData.reason) {
      setStatus({ type: 'error', message: 'Please fill out all required fields.' });
      return;
    }
    
    setStatus({ type: 'success', message: 'Your membership application has been submitted successfully.' });
    setFormData({
      fullName: '', email: '', phone: '', address: '', city: '', occupation: '', reason: '', message: ''
    });
    
    // Optional: Auto close after success
    // setTimeout(() => { onClose(); setStatus(null); }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-4xl max-h-full overflow-y-auto rounded-[2rem] shadow-2xl z-10 p-8 md:p-12"
            role="dialog"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X size={24} className="text-black" />
            </button>

            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-4 block">Join Us</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Become a Member</h2>
              <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
                We welcome passionate individuals who wish to dedicate their time, skills, and energy to selfless service. Join our family of volunteers today.
              </p>
            </div>

            {status && (
              <div className={`mb-8 p-4 rounded-xl font-sans text-sm ${status.type === 'error' ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-brand-charcoal mb-2">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-charcoal mb-2">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-brand-charcoal mb-2">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" required />
                </div>
                <div>
                  <label htmlFor="occupation" className="block text-sm font-semibold text-brand-charcoal mb-2">Occupation</label>
                  <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-semibold text-brand-charcoal mb-2">Full Address</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-brand-charcoal mb-2">City</label>
                  <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-semibold text-brand-charcoal mb-2">Reason for Joining *</label>
                <select id="reason" name="reason" value={formData.reason} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" required>
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
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none"></textarea>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg">
                  Submit Application
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Note: Applications are reviewed manually by our team.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MembershipModal;
