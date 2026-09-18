import React from 'react';
import Reveal from '../components/ui/Reveal';
import Kicker from '../components/ui/Kicker';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, MapPin, Info, Phone, Mail, Globe } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import AnimatedText from '../components/ui/AnimatedText';

const Events = () => {
  const { language } = useLanguage();

  // Add a `registrationLink` to any event to display its "Register Now" button.
  // Leave it empty or remove the line to hide the button for that specific event.
  const eventsList = [
    {
      id: 1,
      title: "Sangitmay Ek Diwasi Krishna Katha",
      date: "October 1, 2026 (Thursday)",
      location: "Vrindavan, U.P.",
      occasion: "Saadhvi Aasthaji's Birthday",
      image: "/assets/pages/events/event1.webp",
      registrationLink: "/booking" // Shows button
    },
    {
      id: 2,
      title: "Shrimad Bhagwat Katha",
      date: "March 2027 (7 Days)",
      location: "Mathura, U.P.",
      occasion: "On the occasion of Holi (Exact dates TBA)",
      image: "/assets/pages/events/event2.webp",
      registrationLink: "/booking" // Shows button
    },
    {
      id: 3,
      title: "Shrimad Bhagwat Katha",
      date: "May 2027 (7 Days)",
      location: "Varanasi, U.P.",
      occasion: "",
      image: "/assets/pages/events/event3.webp",
      registrationLink: "" // Hides button
    },
    {
      id: 4,
      title: "Shrimad Bhagwat Katha",
      date: "June 2027 (7 Days)",
      location: "Jaunpur, U.P.",
      occasion: "",
      image: "/assets/pages/events/event4.webp",
      registrationLink: "" // Hides button
    },
    {
      id: 5,
      title: "Shrimad Bhagwat Katha",
      date: "August 2027 (7 Days)",
      location: "Nashik, Maharashtra",
      occasion: "Nashik Mahakumbh 2027",
      image: "/assets/pages/events/event5.webp",
      registrationLink: "" // Hides button
    },
    {
      id: 6,
      title: "Shrimad Bhagwat Katha",
      date: "December 2027 (7 Days)",
      location: "Kalyan, Mumbai",
      occasion: "Organised by Shree Sai Jan Kalyan Seva Sanstha",
      image: "/assets/pages/events/event6.webp",
      registrationLink: "" // Hides button
    }
  ];

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <Kicker className="mb-4">Upcoming Schedule</Kicker>
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-[#a63c06] mb-6">
              Events
            </h1>
            <p className="text-[#c36f09] max-w-2xl mx-auto text-lg font-sans">
              Join Saadhvi Aastha Ji in her upcoming spiritual discourses across the country.
            </p>
          </Reveal>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 items-stretch">
          {eventsList.map((event, index) => (
            <Reveal key={event.id} delay={index * 0.1} className="h-full">
              <div className="bg-[#fbf5e6] overflow-hidden shadow-lg border border-[#a63c06]/10 flex flex-col h-full group hover:shadow-xl transition-shadow duration-300">
                {/* 1:1 Image */}
                <div className="w-full aspect-square relative overflow-hidden bg-gray-200">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-[#a63c06] mb-4 line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="flex flex-col gap-3 mb-6 flex-grow">
                    <div className="flex items-start text-[#c36f09] font-medium text-sm">
                      <Calendar size={16} strokeWidth={2} className="mr-3 mt-0.5 shrink-0 text-[#a63c06]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start text-[#c36f09] font-medium text-sm">
                      <MapPin size={16} strokeWidth={2} className="mr-3 mt-0.5 shrink-0 text-[#a63c06]" />
                      <span>{event.location}</span>
                    </div>
                    {event.occasion && (
                      <div className="flex items-start text-[#c36f09] font-medium text-sm">
                        <Info size={16} strokeWidth={2} className="mr-3 mt-0.5 shrink-0 text-[#a63c06]" />
                        <span>{event.occasion}</span>
                      </div>
                    )}
                  </div>

                  {event.registrationLink && (
                    <a href={event.registrationLink} className="w-full bg-[#a63c06] text-[#fbf5e6] px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors text-center block mt-auto">
                      Register Now
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>



      </div>
    </div>
  );
};

export default Events;
