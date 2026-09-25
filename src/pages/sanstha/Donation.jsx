import React from 'react';
import Reveal from '../../components/ui/Reveal';
import Kicker from '../../components/ui/Kicker';
import AnimatedText from '../../components/ui/AnimatedText';

const Donation = () => {
  const handleOnlinePayment = () => {
    window.location.href = "upi://pay?pa=paytm.s2xzr9j@pty&pn=Aastha%20Sevabhavi%20Sanstha";
  };

  return (
    <div className="pt-24 bg-transparent min-h-screen pb-20">
      <header className="py-24 md:py-32 bg-transparent">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <Kicker><AnimatedText section="sansthaDonation" tKey="kicker" /></Kicker>
          <h1 className="text-4xl md:text-5xl font-serif text-[#a63c06] mb-4"><AnimatedText section="sansthaDonation" tKey="title" /></h1>
          <p className="text-[#c36f09] font-sans text-lg max-w-2xl mx-auto">
            <AnimatedText section="sansthaDonation" tKey="desc" />
          </p>
        </div>
      </header>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Bank Transfer Details */}
          <Reveal>
            <div className="bg-brand-lightgrey p-8 md:p-12 rounded-3xl h-full border border-gray-200">
              <h2 className="text-2xl font-serif text-[#a63c06] mb-6 border-b border-gray-300 pb-4"><AnimatedText section="sansthaDonation" tKey="bankTitle" /></h2>
              <div className="space-y-4 font-sans text-[#c36f09]">
                <div>
                  <span className="block text-sm text-[#c36f09] font-semibold mb-1 uppercase tracking-wider"><AnimatedText section="sansthaDonation" tKey="accName" /></span>
                  <p className="text-lg font-medium text-[#a63c06]">PRATIK DIVESH MISHRA</p>
                </div>
                <div>
                  <span className="block text-sm text-[#c36f09] font-semibold mb-1 uppercase tracking-wider"><AnimatedText section="sansthaDonation" tKey="accNum" /></span>
                  <p className="text-lg font-mono font-medium text-[#a63c06]">9748523529</p>
                </div>
                <div>
                  <span className="block text-sm text-[#c36f09] font-semibold mb-1 uppercase tracking-wider"><AnimatedText section="sansthaDonation" tKey="ifsc" /></span>
                  <p className="text-lg font-mono font-medium text-[#a63c06]">KKBK0000627</p>
                </div>
                <div>
                  <span className="block text-sm text-[#c36f09] font-semibold mb-1 uppercase tracking-wider"><AnimatedText section="sansthaDonation" tKey="bank" /></span>
                  <p className="text-lg font-medium text-[#a63c06]">Kotak Mahindra Bank</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* QR Code & Online Payment */}
          <Reveal delay={0.2}>
            <div className="bg-[#fbf5e6]/70 backdrop-blur-xl border border-[#a63c06]/10 p-8 md:p-12 rounded-3xl h-full shadow-xl flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-serif text-[#a63c06] mb-6"><AnimatedText section="sansthaDonation" tKey="upiTitle" /></h2>
              
              <a 
                href="upi://pay?pa=paytm.s2xzr9j@pty&pn=Aastha%20Sevabhavi%20Sanstha"
                className="w-48 h-48 rounded-xl mb-8 flex items-center justify-center overflow-hidden shadow-sm bg-white p-2 hover:shadow-md transition-shadow cursor-pointer block"
              >
                <img 
                  src="/assets/pages/sanstha/donation/scanner.webp" 
                  alt="Donation QR Code" 
                  className="w-full h-full object-contain" 
                />
              </a>
              
              <div className="w-full">
                <div className="relative flex py-5 items-center">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink-0 mx-4 text-[#c36f09] font-sans text-sm uppercase tracking-widest"><AnimatedText section="sansthaDonation" tKey="or" /></span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button 
                  onClick={handleOnlinePayment}
                  className="bg-[#00baf2] text-white px-6 py-3 font-sans font-medium w-full shadow-[0_4px_14px_0_rgba(0,186,242,0.39)] hover:bg-[#002970] hover:shadow-[0_6px_20px_rgba(0,41,112,0.23)] hover:-translate-y-1 transition-all rounded-lg"
                >
                  <AnimatedText section="sansthaDonation" tKey="payBtn" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Donation;
