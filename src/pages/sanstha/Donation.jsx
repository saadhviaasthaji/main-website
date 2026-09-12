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
    <div className="pt-24 bg-transparent min-h-screen pb-20">
      <header className="py-20 text-center bg-brand-lightgrey mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <Kicker>Support Us</Kicker>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">Make a Donation</h1>
          <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
            Donations to Aastha Sevabhavi Sanstha help support and strengthen its ongoing social-service initiatives. Contributions may be utilised towards providing food, ration, clothing, school kits and other essential support to elderly mothers, orphanages, persons with disabilities and other needy and underprivileged sections of society.
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
                  <p className="text-lg font-medium text-brand-charcoal">PRATIK DIVESH MISHRA</p>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Account Number</span>
                  <p className="text-lg font-mono font-medium text-brand-charcoal">9748523529</p>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">IFSC Code</span>
                  <p className="text-lg font-mono font-medium text-brand-charcoal">KKBK0000627</p>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Bank & Branch</span>
                  <p className="text-lg font-medium text-brand-charcoal">Kotak Mahindra Bank</p>
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
                  className="btn-primary w-full shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-1 transition-all"
                >
                  Pay via Cashfree
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Acknowledgment Message */}
        {showAck && (
          <div className="mt-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center font-sans animate-pulse">
            <h3 className="font-bold text-lg mb-2">Thank You for Your Support</h3>
            <p>Thank you for your generous contribution to Aastha Sevabhavi Sanstha. Your support strengthens our efforts towards serving humanity and reaching essential resources to those in need. Every contribution becomes a part of our journey of "Maanav Seva Hi Dharm Hai."</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
