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
          <Link to="/booking" className="nav-link" onClick={() => setIsOpen(false)}>Invite</Link>
          <Link to="/sanstha" className="nav-link nav-link-highlight" onClick={() => setIsOpen(false)}>Sanstha</Link>
          <Link to="/contact" className="nav-link btn-outline" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
