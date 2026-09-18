import React from 'react';
import Reveal from '../ui/Reveal';

const DevotionalQuote = () => {
  const quotes = [
    {
      id: 1,
      name: "Saadhvi Aastha Ji",
      text: "वास्तव में इंसान ठाकुर जी के व्याकुल हो ऐसा नहीं हो सकता। ठाकुर जी व्याकुल होते है तब वह इंसान व्याकुल होता है अन्यथा इंसान में सामर्थ्य नहीं है।"
    },
    {
      id: 2,
      name: "Saadhvi Aastha Ji",
      text: "भजन प्रदर्शन का विषय नहीं है। प्रदर्शन में हरी का दर्शन संभव नहीं है, अगर हरि दर्शन करना हो तो भजन का प्रदर्शन न करे।"
    },
    {
      id: 3,
      name: "Saadhvi Aastha Ji",
      text: "क्षमा करने वाला सबसे बड़ा होता है। द्रौपदी ने अपने पाँच पुत्रों की हत्या करने वाले अश्वत्थामा को क्षमा कर दिया। क्षमा दान बहुत बड़ा दान है।"
    }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#a63c06]">
              Saadhvi Aastha Ji Quotes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote) => (
              <div 
                key={quote.id} 
                className="rounded-lg p-8 relative flex flex-col justify-between shadow-xl transform transition-transform hover:-translate-y-2 bg-no-repeat bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url(/assets/pages/home/quotes/quotes_bg.webp)',
                  borderRadius: '12px 12px 24px 12px' 
                }}
              >
                {/* Top Quote Icon */}
                <div className="absolute top-4 left-4 text-red-600 opacity-80 text-6xl font-serif leading-none">
                  “
                </div>
                
                <div className="mt-8 z-10 relative pb-10">
                  <h3 className="text-red-600 font-bold text-lg md:text-xl mb-4 font-sans border-b border-red-600 pb-2 inline-block">
                    {quote.name}
                  </h3>
                  <p className="text-[#a63c06] text-sm md:text-base leading-relaxed font-bold font-sans mt-2">
                    {quote.text}
                  </p>
                </div>
                
                {/* Bottom Quote Icon */}
                <div className="absolute bottom-2 right-4 text-red-600 opacity-60 text-8xl font-serif leading-none z-0">
                  ”
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default DevotionalQuote;
