import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Page.css';

const SansthaHome = () => {
  return (
    <div className="page fade-in">
      <header className="page-header" style={{backgroundColor: '#F0F2F5'}}>
        <div className="container">
          <span className="label-text blue">AASTHA SEVABHAVI SANSTHA</span>
          <h1 className="page-title" style={{fontSize: '3rem'}}>10 Years of Social Service</h1>
          <p className="page-subtitle">A social service journey built through years of community work.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <div className="content-block" style={{textAlign: 'center'}}>
            <h2>Our Purpose</h2>
            <p>
              Aastha Sevabhavi Sanstha is a registered social organization dedicated to uplifting the underprivileged, providing education, and ensuring that basic human needs are met with dignity. Founded by the family of Saadhvi Aastha Ji, our mission is to turn spiritual devotion into tangible action for society.
            </p>
            <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center'}}>
               <Link to="/sanstha/about" className="btn-outline">About Us</Link>
               <Link to="/sanstha/roti-bank" className="btn-primary">View Roti Bank Initiative</Link>
            </div>
          </div>

          <div className="snapshot-stats" style={{justifyContent: 'center', margin: '4rem 0'}}>
              <div className="stat" style={{textAlign: 'center', padding: '0 2rem'}}>
                <h4 style={{fontSize: '3.5rem', color: 'var(--color-accent)'}}>10+</h4>
                <h5>Years of Service</h5>
              </div>
              <div className="stat" style={{textAlign: 'center', padding: '0 2rem'}}>
                <h4 style={{fontSize: '3.5rem', color: 'var(--color-accent)'}}>Thousands</h4>
                <h5>Fed Daily</h5>
              </div>
              <div className="stat" style={{textAlign: 'center', padding: '0 2rem'}}>
                <h4 style={{fontSize: '3.5rem', color: 'var(--color-accent)'}}>Countless</h4>
                <h5>Lives Touched</h5>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SansthaHome;
