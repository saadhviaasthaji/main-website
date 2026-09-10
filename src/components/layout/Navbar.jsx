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
        <Link to="/" className="navbar-logo">
          Saadhvi Aastha Ji
        </Link>
        
        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          
          <div className="dropdown">
            <button className="nav-link dropdown-toggle">Sanstha</button>
            <div className="dropdown-menu">
              <Link to="/sanstha" onClick={() => setIsOpen(false)}>Sanstha Home</Link>
              <Link to="/sanstha/about" onClick={() => setIsOpen(false)}>About Sanstha</Link>
              <Link to="/sanstha/works" onClick={() => setIsOpen(false)}>Our Works</Link>
              <Link to="/sanstha/donate" onClick={() => setIsOpen(false)}>Donation</Link>
            </div>
          </div>
          
          <Link to="/query" className="nav-link" onClick={() => setIsOpen(false)}>Query</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/booking" className="nav-link btn-primary" onClick={() => setIsOpen(false)}>Bookings</Link>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
