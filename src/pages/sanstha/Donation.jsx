import React, { useState } from 'react';
import Reveal from '../../components/ui/Reveal';
import Kicker from '../../components/ui/Kicker';

const Donation = () => {
  const [showAck, setShowAck] = useState(false);

  const handleOnlinePayment = () => {
    // Simulate gateway redirect/success
    setShowAck(true);
    setTimeout(() => {
      setShowAck(false);
    }, 5000);
  };

  return (
    <div className="pt-24 bg-white min-h-screen pb-20">
      <header className="py-20 text-center bg-brand-lightgrey mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <Kicker>Support Us</Kicker>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Make a Donation</h1>
          <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
            Your financial support directly fuels our Roti Bank, educational programs, and healthcare initiatives. Every contribution, big or small, helps us bring a smile to someone in need.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Bank Transfer Details */}
          <Reveal>
            <div className="bg-brand-lightgrey p-8 md:p-12 rounded-3xl h-full border border-gray-200">
              <h2 className="text-2xl font-serif text-brand-charcoal mb-6 border-b border-gray-300 pb-4">Bank Transfer</h2>
              <div className="space-y-4 font-sans text-gray-700">
                <div>
                  <span className="block text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Account Name</span>
                  <p className="text-lg font-medium text-brand-charcoal">Aastha Sevabhavi Sanstha</p>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Account Number</span>
                  <p className="text-lg font-mono font-medium text-brand-charcoal">1234 5678 9012 3456</p>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">IFSC Code</span>
                  <p className="text-lg font-mono font-medium text-brand-charcoal">HDFC0001234</p>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Bank & Branch</span>
                  <p className="text-lg font-medium text-brand-charcoal">HDFC Bank, [Branch Name]</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* QR Code & Online Payment */}
          <Reveal delay={0.2}>
            <div className="bg-white p-8 md:p-12 rounded-3xl h-full border border-gray-200 shadow-xl flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-serif text-brand-charcoal mb-6">UPI / Scan to Pay</h2>
              
              <div className="w-48 h-48 bg-gray-100 rounded-xl mb-8 flex items-center justify-center p-4 border-2 border-dashed border-gray-300">
                {/* Placeholder for actual QR code */}
                <div className="text-gray-400 font-sans text-sm">
                  [Place QR Image Here]
                </div>
              </div>
              
              <div className="w-full">
                <div className="relative flex py-5 items-center">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink-0 mx-4 text-gray-400 font-sans text-sm uppercase tracking-widest">Or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button 
                  onClick={handleOnlinePayment}
                  className="btn-primary w-full shadow-[0_4px_14px_0_rgba(79,168,216,0.39)] hover:shadow-[0_6px_20px_rgba(79,168,216,0.23)] hover:-translate-y-1 transition-all"
                >
                  Pay via Online Gateway
                </button>
                <p className="text-xs text-gray-400 font-sans mt-3">Secure payment gateway integration pending.</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Acknowledgment Message */}
        {showAck && (
          <div className="mt-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center font-sans animate-pulse">
            Thank you for your attempted donation! Your support means the world to us. (This is a placeholder success message).
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
