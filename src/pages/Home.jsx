import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="hero-tagline">Spiritual Journey</span>
          <h1 className="hero-title">Saadhvi Aastha Ji</h1>
          <p className="hero-description">
            A young spiritual preacher whose journey, education, devotion, and purpose inspire thousands towards a path of peace and bhakti.
          </p>
          <div className="hero-actions">
            <a href="/about" className="btn-primary">Explore Journey</a>
            <a href="/booking" className="btn-outline">Invite for Katha</a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section intro-section section-bg-alt">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image-placeholder">
              {/* Image will go here */}
              <span>[High Quality Image Placeholder]</span>
            </div>
            <div className="intro-text">
              <h2>Who is Saadhvi Aastha Ji?</h2>
              <p>
                Rooted in deep spiritual traditions, Saadhvi Aastha Ji has dedicated her life to the study of Vedic scriptures, Gurukul education, and spreading the message of devotion and peace.
              </p>
              <p>
                Her journey is not just about personal spiritual growth, but also about uplifting society through Aastha Sevabhavi Sanstha, blending spiritual wisdom with active social service.
              </p>
              <a href="/about" className="btn-outline" style={{marginTop: '1rem'}}>Read Full Biography</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
