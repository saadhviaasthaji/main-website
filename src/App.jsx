import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import './App.css'; 

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date('2026-10-01T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="content">
        <div className="text-section">
          <div className="subtitle">
            <span className="line"></span> SHRIMAD BHAGAVAD KATHA
          </div>
          <h1 className="title">
            TIMELESS WISDOM <br />
            <span>FOR A BRIGHTER TOMORROW.</span>
          </h1>
          <p className="description">
            Through the eternal teachings of the Bhagavad Gita, <br />
            Saadhvi Aastha Ji inspires a deeper understanding of life, <br />
            dharma and inner peace.
          </p>
          
          <div className="big-coming-soon">
             Something big is coming...
          </div>

          <div className="coming-soon">
            <h2>COMING SOON</h2>
            <div className="timer">
              {timeLeft.days !== undefined ? (
                <>
                  <div className="time-box">
                    <span className="time-value">{timeLeft.days}</span>
                    <span className="time-label">Days</span>
                  </div>
                  <span className="colon">:</span>
                  <div className="time-box">
                    <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="time-label">Hours</span>
                  </div>
                  <span className="colon">:</span>
                  <div className="time-box">
                    <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="time-label">Minutes</span>
                  </div>
                  <span className="colon">:</span>
                  <div className="time-box">
                    <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="time-label">Seconds</span>
                  </div>
                </>
              ) : (
                <span>Event Started!</span>
              )}
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://www.instagram.com/saadhviaasthaji" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/people/Saadhvi-Aastha-Ji/61594264110372" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} />
            </a>
            <a href="https://youtube.com/@saadhviaasthaji" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
            <a href="https://x.com/saadhviaasthaji" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
