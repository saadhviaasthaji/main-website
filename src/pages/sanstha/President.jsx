import React from 'react';
import '../../styles/Page.css';

const President = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="container">
          <span className="label-text blue">LEADERSHIP</span>
          <h1 className="page-title">President</h1>
          <p className="page-subtitle">Leading the operational initiatives of Aastha Sevabhavi Sanstha.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          
          <div className="profile-header">
            <div className="profile-image">
              {/* Client to provide high-quality photo */}
            </div>
            <div className="profile-info">
              <h2>[President Name]</h2>
              <span className="label-text">PRESIDENT</span>
              
              <div style={{marginTop: '2rem'}}>
                <h3>Background & Expertise</h3>
                <p>
                  [Client Content Required] Detailed biography of the President, highlighting their professional or social background and their dedication to community service.
                </p>
                
                <h3>Role and Responsibilities</h3>
                <p>
                  The President oversees the daily operations, volunteer management, and strategic execution of Sanstha's programs, including the Roti Bank and educational drives.
                </p>
                
                <h3>Vision for the Future</h3>
                <p>
                  "Our goal is to expand our reach so that no individual in our state sleeps hungry, and every child receives the education they deserve."
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default President;
