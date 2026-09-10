import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import Reveal from '../ui/Reveal';
import Kicker from '../ui/Kicker';

const SocialMediaBar = () => {
  const socials = [
    { icon: <FaInstagram size={28} />, name: 'Instagram', link: '#' },
    { icon: <FaYoutube size={28} />, name: 'YouTube', link: '#' },
    { icon: <FaFacebookF size={28} />, name: 'Facebook', link: '#' },
    { icon: <FaTwitter size={28} />, name: 'Twitter', link: '#' },
  ];

  return (
    <section className="py-20 bg-brand-lightgrey">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Reveal>
          <Kicker>Connect</Kicker>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-10">
            Join Our Digital Community
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {socials.map((social, idx) => (
              <a 
                key={idx} 
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-charcoal shadow-md group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                  {social.icon}
                </div>
                <span className="font-sans font-medium text-gray-600 group-hover:text-brand-blue transition-colors">
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
