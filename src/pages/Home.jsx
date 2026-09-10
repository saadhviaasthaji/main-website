import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tagline: "SPIRITUAL JOURNEY ROOTED IN DEVOTION",
      title: "A VOICE THAT INSPIRES<br/>MILLIONS",
      description: "She carries an extraordinary passion for inspiring people. Through her insightful teachings on values and virtues, she shares what she believes are the true foundations of a meaningful life.",
      imageClass: "hero-bg-1"
    },
    {
      id: 2,
      tagline: "KATHA BY SAADHVI AASTHA",
      title: "GUIDING SOULS THROUGH<br/>SACRED NARRATIVES",
      description: "A soulful storyteller and spiritual orator, she weaves ancient wisdom into captivating narratives that touch the heart. Through her kathavachan, she simplifies deep truths.",
      imageClass: "hero-bg-2"
    },
    {
      id: 3,
      tagline: "ROTI BANK INITIATIVE",
      title: "ENSURING NO ONE GOES<br/>TO SLEEP HUNGRY",
      description: "Aastha Sevabhavi Sanstha's core initiative dedicated to serving humanity. Join hands to support the mission of providing daily meals to the needy.",
      imageClass: "hero-bg-3"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="home-page fade-in">
      {/* Hero Section Auto-Slider */}
      <section className={`hero-section ${slides[currentSlide].imageClass}`}>
        <div className="hero-slider-btn left" onClick={prevSlide}>{'<'}</div>
        <div className="container hero-container">
          <div className="hero-image-placeholder">
            {/* Person Image */}
          </div>
          <div className="hero-content fade-in" key={currentSlide}>
            <span className="label-text blue">{slides[currentSlide].tagline}</span>
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}></h1>
            <p className="hero-description">{slides[currentSlide].description}</p>
          </div>
        </div>
        <div className="hero-slider-btn right" onClick={nextSlide}>{'>'}</div>
      </section>

      {/* Bio & Snapshot Section */}
      <section className="section bio-section section-bg-alt">
        <div className="container bio-container">
          <div className="bio-content">
            <span className="label-text">BIO</span>
            <h2>Meet Saadhvi Aastha</h2>
            <p>
              Saadhvi Aastha is a renowned spiritual orator, author, motivational speaker, and devotional artist known for her heartfelt kathavachans and inspirational messages. With her graceful narration and deep understanding of values, she connects with audiences of all ages, guiding them toward clarity, compassion, and inner peace.
            </p>
            <Link to="/about" className="btn-primary">Read More</Link>
            
            <div className="snapshot-header">
              <h3>Snapshot</h3>
              <div className="snapshot-arrows">
                <span>&larr;</span> <span>&rarr;</span>
              </div>
            </div>
            
            <div className="snapshot-stats">
              <div className="stat">
                <h4>10K+</h4>
                <h5>Sessions</h5>
                <p>Over 10,000+ live spiritual sessions delivered across the globe, touching millions of hearts with wisdom, faith, and transformative guidance.</p>
              </div>
              <div className="stat">
                <h4>12M+</h4>
                <h5>Followers</h5>
                <p>A thriving community of 12M+ followers, inspired daily by her words of faith, positivity, and purpose.</p>
              </div>
            </div>
          </div>
          <div className="bio-image-wrapper">
            <div className="bio-image-placeholder">
               <div className="bio-image-overlay-text">
                  <p>&bull; 10 years of service to mankind.</p>
                  <p>&bull; A motivational guide who inspires people to embrace peace, values, and meaningful living.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Cards Section */}
      <section className="section empowering-section">
        <div className="container">
          <div className="section-header">
            <span className="label-text">SAADHVI AASTHA</span>
            <h2>Empowering You, Your Life</h2>
          </div>
          
          <div className="cards-grid">
            {/* Card 1 (Image Top, Text Bottom) */}
            <div className="feature-card type-a">
              <div className="card-image bg-placeholder-1"></div>
              <div className="card-content">
                <h3>Spiritual Journey</h3>
                <p>A heartfelt spiritual dialogue that connects ancient wisdom with modern life, nurturing faith, clarity, and inner peace.</p>
                <Link to="/about" className="btn-primary">Know More</Link>
              </div>
            </div>
            
            {/* Card 2 (Text Top, Image Bottom) */}
            <div className="feature-card type-b">
              <div className="card-content">
                <h3>Gurukul Education</h3>
                <p>Deeply rooted in traditional values, blending spiritual wisdom with active learning for a balanced life.</p>
                <Link to="/about" className="btn-primary">Know More</Link>
              </div>
              <div className="card-image bg-placeholder-2"></div>
            </div>
            
            {/* Card 3 (Image Top, Text Bottom) */}
            <div className="feature-card type-a">
              <div className="card-image bg-placeholder-3"></div>
              <div className="card-content">
                <h3>Roti Bank Initiative</h3>
                <p>Aastha Sevabhavi Sanstha's core initiative to ensure no one goes to sleep hungry.</p>
                <Link to="/sanstha/roti-bank" className="btn-primary">Know More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
