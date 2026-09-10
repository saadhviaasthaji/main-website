import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="hero-tagline">Spiritual Journey Rooted In Devotion</span>
          <h1 className="hero-title">Saadhvi Aastha Ji</h1>
          <p className="hero-description">
            A young spiritual preacher whose journey, education, devotion, and purpose inspire thousands towards a path of peace and bhakti.
          </p>
          <div className="hero-actions">
            <Link to="/booking" className="btn-primary">Invite for Katha</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section-bg-alt">
        <div className="container stats-container">
          <div className="stat-item">
            <h3>10+ Years</h3>
            <p>Of Social Service through Sanstha</p>
          </div>
          <div className="stat-item">
            <h3>Gurukul</h3>
            <p>Rooted in Vedic Education</p>
          </div>
          <div className="stat-item">
            <h3>Roti Bank</h3>
            <p>Feeding the needy daily</p>
          </div>
        </div>
      </section>

      {/* Empowering Cards Section */}
      <section className="section empowering-section">
        <div className="container">
          <div className="section-header">
            <h2>Empowering You, Your Life</h2>
            <p>A journey built through years of community work and devotion.</p>
          </div>
          
          <div className="cards-grid">
            <div className="feature-card">
              <div className="card-image bg-placeholder-1"></div>
              <div className="card-content">
                <h3>Spiritual Journey</h3>
                <p>A heartfelt spiritual dialogue that connects ancient wisdom with modern life, nurturing faith, clarity, and inner peace.</p>
                <Link to="/about" className="card-link">Know More</Link>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="card-image bg-placeholder-2"></div>
              <div className="card-content">
                <h3>Gurukul Education</h3>
                <p>Deeply rooted in traditional values, blending spiritual wisdom with active learning for a balanced life.</p>
                <Link to="/about" className="card-link">Know More</Link>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="card-image bg-placeholder-3"></div>
              <div className="card-content">
                <h3>Roti Bank Initiative</h3>
                <p>Aastha Sevabhavi Sanstha's core initiative to ensure no one goes to sleep hungry.</p>
                <Link to="/sanstha/roti-bank" className="card-link">Know More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Video Section */}
      <section className="section video-section section-bg-alt">
        <div className="container">
          <div className="section-header">
            <h2>Watch The Latest Video</h2>
            <Link to="/sanstha/works" className="view-all-link">Watch More</Link>
          </div>
          <div className="video-container">
            <div className="video-placeholder">
              <span>[Video Player Placeholder]</span>
            </div>
            <h3>Spiritual Discourses & Social Impact</h3>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Stories From Our Followers</h2>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">"Saadhvi Aastha Ji’s words have been an anchor for many. Her dedication to the Gurukul system and the Roti Bank initiative brings peace and tangible help to society."</p>
            <p className="testimonial-author">- Devotee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
