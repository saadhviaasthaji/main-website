import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Page.css';

const SansthaWorks = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Our Works</h1>
          <p className="page-subtitle">Discover the social initiatives undertaken by the Sanstha.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <div className="cards-grid">
            <div className="feature-card type-a">
              <div className="card-image" style={{backgroundColor: '#E9C46A'}}></div>
              <div className="card-content">
                <h3>Roti Bank</h3>
                <p>Our flagship initiative aimed at eradicating hunger. We collect and distribute fresh, nutritious meals to the needy every single day.</p>
                <Link to="/sanstha/roti-bank" className="btn-primary">View Initiative</Link>
              </div>
            </div>

            <div className="feature-card type-a">
              <div className="card-image" style={{backgroundColor: '#F4A261'}}></div>
              <div className="card-content">
                <h3>Community Service</h3>
                <p>Organizing medical camps, distribution of winter clothes, and providing basic necessities to marginalized communities.</p>
                <Link to="/sanstha/gallery" className="btn-outline">View Gallery</Link>
              </div>
            </div>

            <div className="feature-card type-a">
              <div className="card-image" style={{backgroundColor: '#2A9D8F'}}></div>
              <div className="card-content">
                <h3>Education Support</h3>
                <p>Providing books, stationery, and financial aid to underprivileged children to ensure they have access to basic education.</p>
                <Link to="/sanstha/gallery" className="btn-outline">View Gallery</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SansthaWorks;
