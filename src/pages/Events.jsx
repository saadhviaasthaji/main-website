import React from 'react';
import Reveal from '../components/ui/Reveal';
import Kicker from '../components/ui/Kicker';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';
import { Calendar, MapPin } from 'lucide-react';

const Events = () => {
  const { language } = useLanguage();

  const upcomingEvent = {
    title: getTranslation(language, 'events', 'event1Title'),
    date: "1 Oct 2026",
    location: "Mathura, UP",
    image: "https://images.unsplash.com/photo-1604085572501-0498ebdd0d50?q=80&w=800&auto=format&fit=crop",
    description: getTranslation(language, 'events', 'event1Desc'),
  };

  const pastEvents = [
    {
      id: 1,
      title: getTranslation(language, 'events', 'event2Title'),
      date: "15 Aug 2025",
      location: "Vrindavan, UP",
      image: "https://images.unsplash.com/photo-1593113563332-f144d2843bb3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: getTranslation(language, 'events', 'event3Title'),
      date: "10 Mar 2025",
      location: "Rishikesh, UK",
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <Kicker className="mb-4">{getTranslation(language, 'events', 'scheduleKicker')}</Kicker>
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-brand-charcoal mb-6">
              {getTranslation(language, 'events', 'title')}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {getTranslation(language, 'events', 'subtitle')}
            </p>
          </Reveal>
        </div>

        {/* Upcoming Event */}
        <Reveal delay={0.1}>
          <div className="mb-24">
            <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-8 border-l-4 border-black pl-4">
              {getTranslation(language, 'events', 'upcomingTitle')}
            </h2>
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/50 group">
              <Reveal direction="left" className="md:w-1/2">
                <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto h-full">
                  <img 
                    src={upcomingEvent.image} 
                    alt={upcomingEvent.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black text-white px-4 py-1 text-sm font-bold uppercase tracking-wider rounded-full">
                    {getTranslation(language, 'events', 'upcomingTag')}
                  </div>
                </div>
              </Reveal>
              <Reveal direction="right" className="md:w-1/2">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full">
                  <h3 className="text-4xl font-serif font-bold text-brand-charcoal mb-4">
                    {upcomingEvent.title}
                  </h3>
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center text-gray-700 font-medium">
                      <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-black">
                        <Calendar size={16} strokeWidth={2} />
                      </span>
                      {upcomingEvent.date}
                    </div>
                    <div className="flex items-center text-gray-700 font-medium">
                      <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-black">
                        <MapPin size={16} strokeWidth={2} />
                      </span>
                      {upcomingEvent.location}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {upcomingEvent.description}
                  </p>
                  <button className="self-start bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
                    {getTranslation(language, 'common', 'registerNow')}
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>

        {/* Past Events */}
        <Reveal delay={0.2}>
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-8 border-l-4 border-gray-400 pl-4 text-gray-700">
              {getTranslation(language, 'events', 'pastTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/30 group flex flex-col sm:flex-row">
                  <Reveal direction="left" className="sm:w-2/5 aspect-video sm:aspect-square relative overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    />
                  </Reveal>
                  <Reveal direction="right" className="sm:w-3/5 p-6 flex flex-col justify-center h-full">
                    <h4 className="text-xl font-serif font-bold text-brand-charcoal mb-2">
                      {event.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Calendar size={14} className="mr-2 text-black" strokeWidth={2} /> {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin size={14} className="mr-2 text-black" strokeWidth={2} /> {event.location}
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default Events;
