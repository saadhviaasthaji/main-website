import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';

const SocialMediaBar = () => {
  const socials = [
    { icon: <FaInstagram size={28} />, name: 'Instagram', link: '#' },
    { icon: <FaYoutube size={28} />, name: 'YouTube', link: '#' },
    { icon: <FaFacebookF size={28} />, name: 'Facebook', link: '#' },
    { icon: <FaXTwitter size={28} />, name: 'X', link: '#' },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Reveal>
          <Kicker>Connect</Kicker>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#a63c06] mb-10">
            Join Our Digital Community
          </h2>
          
          <div className="flex flex-nowrap justify-center gap-3 sm:gap-6 md:gap-10">
            {socials.map((social, idx) => (
              <a 
                key={idx} 
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-2 sm:gap-3"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fbf5e6] border border-[#a63c06]/10 rounded-full flex items-center justify-center text-[#a63c06] shadow-sm group-hover:bg-[#a63c06] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="scale-75 sm:scale-100">
                    {social.icon}
                  </div>
                </div>
                <span className="font-sans font-medium text-xs sm:text-base text-[#c36f09] group-hover:text-[#a63c06] transition-colors">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SocialMediaBar;
