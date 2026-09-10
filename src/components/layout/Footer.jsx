import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-bg-alt">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">Saadhvi Aastha Ji</h2>
          <p className="footer-tagline">A young spiritual journey rooted in devotion.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/saadhviaasthaji" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/people/Saadhvi-Aastha-Ji/61594264110372" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://youtube.com/@saadhviaasthaji" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://x.com/saadhviaasthaji" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Journey</Link>
          <Link to="/booking">Invite for Katha</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </div>

        <div className="footer-links">
          <h3>Aastha Sevabhavi Sanstha</h3>
          <Link to="/sanstha">Sanstha Home</Link>
          <Link to="/sanstha/works">Our Works</Link>
          <Link to="/sanstha/roti-bank">Roti Bank</Link>
          <Link to="/sanstha/donate">Donate</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Saadhvi Aastha Ji. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
