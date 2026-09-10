import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo signature-logo">
            Saadhvi Aastha
          </Link>
        </div>
        
        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>Bio</Link>
          
          <div className="dropdown">
            <button className="nav-link dropdown-toggle">Sanstha</button>
            <div className="dropdown-menu">
              <Link to="/sanstha" onClick={() => setIsOpen(false)}>Sanstha Home</Link>
              <Link to="/sanstha/about" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/sanstha/works" onClick={() => setIsOpen(false)}>Our Works</Link>
              <Link to="/sanstha/founder" onClick={() => setIsOpen(false)}>Founder</Link>
              <Link to="/sanstha/president" onClick={() => setIsOpen(false)}>President</Link>
              <Link to="/sanstha/donation" onClick={() => setIsOpen(false)}>Donation</Link>
              <Link to="/sanstha/membership" onClick={() => setIsOpen(false)}>Membership</Link>
            </div>
          </div>
          
          <Link to="/query" className="nav-link" onClick={() => setIsOpen(false)}>Query</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>

        <div className="navbar-right">
          <Link to="/booking" className="btn-primary" onClick={() => setIsOpen(false)}>Bookings</Link>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
