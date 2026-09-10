import React from 'react';
import '../styles/Page.css';

const About = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Meet Saadhvi Aastha</h1>
          <p className="page-subtitle">A spiritual journey rooted in devotion and a mission to serve humanity.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          
          <div className="profile-header">
            <div className="profile-image">
              {/* Client to provide high-quality photo */}
            </div>
            <div className="profile-info">
              <span className="label-text blue">BIOGRAPHY</span>
              <h2>A Life of Devotion</h2>
              <p>
                Saadhvi Aastha is a renowned spiritual orator, author, motivational speaker, and devotional artist.
                From a very young age, she demonstrated an extraordinary inclination towards spirituality, ancient scriptures, and values.
              </p>
              <p>
                Her journey is not just about preaching; it is about living a life deeply rooted in the Sanatan Dharma and sharing that wisdom with the modern world. Through her heartfelt kathavachans and inspirational messages, she simplifies complex spiritual truths into actionable life lessons.
              </p>
            </div>
          </div>

          <div className="content-block">
            <span className="label-text">EDUCATION</span>
            <h2>The Gurukul Journey</h2>
            <p>
              Embracing the traditional Vedic education system, Saadhvi Aastha spent her formative years in a Gurukul. 
              This rigorous and deeply spiritual environment shaped her understanding of the scriptures, Sanskrit literature, and the core philosophies of life.
            </p>
            <ul>
              <li>Immersed in Vedic Studies from an early age.</li>
              <li>Deep understanding of the Bhagavad Gita and Ramayana.</li>
              <li>Trained in classical bhajans and spiritual discourse.</li>
            </ul>
          </div>

          <div className="content-block">
            <span className="label-text">MISSION</span>
            <h2>Purpose and Mission</h2>
            <p>
              Her mission extends beyond the spiritual podium. Believing that true devotion reflects in service to mankind, she established the Aastha Sevabhavi Sanstha. Her motivation is to uplift the underprivileged, provide education, and ensure that basic human needs are met with dignity and compassion.
            </p>
            <p>
              "Devotion without compassion is incomplete. To serve the creation is to serve the Creator."
            </p>
          </div>

          <div className="content-block">
            <span className="label-text">MILESTONES</span>
            <h2>Achievements</h2>
            <ul>
              <li>Over 10,000+ live spiritual sessions delivered across the globe.</li>
              <li>A thriving community of 12M+ followers across social platforms.</li>
              <li>Founder of the Roti Bank initiative, feeding thousands daily.</li>
              <li>Recognized as a leading young spiritual voice in modern India.</li>
            </ul>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default About;
