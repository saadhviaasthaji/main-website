import React from 'react';
import '../../styles/Page.css';

const Founder = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="container">
          <span className="label-text blue">LEADERSHIP</span>
          <h1 className="page-title">Founder</h1>
          <p className="page-subtitle">The visionary behind Aastha Sevabhavi Sanstha.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          
          <div className="profile-header">
            <div className="profile-image">
              {/* Client to provide high-quality photo */}
            </div>
            <div className="profile-info">
              <h2>[Founder Name]</h2>
              <span className="label-text">FOUNDER & CHIEF PATRON</span>
              
              <div style={{marginTop: '2rem'}}>
                <h3>Background & Journey</h3>
                <p>
                  [Client Content Required] Detailed biography of the founder, their educational background, and their motivation for establishing the organization.
                </p>
                
                <h3>Role in the Sanstha</h3>
                <p>
                  As the Founder, they provide the guiding vision and spiritual framework for all the charitable activities. Their leadership ensures that every initiative stays true to the core values of compassion and selflessness.
                </p>
                
                <h3>Achievements</h3>
                <ul>
                  <li>Established the Roti Bank initiative.</li>
                  <li>Guided the expansion of community service across multiple districts.</li>
                  <li>[Client to add specific achievements]</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Founder;
