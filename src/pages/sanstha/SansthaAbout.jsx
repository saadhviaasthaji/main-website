import React from 'react';
import '../../styles/Page.css';

const SansthaAbout = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">About the Sanstha</h1>
          <p className="page-subtitle">Understanding our history, mission, and core values.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <div className="content-block">
            <span className="label-text blue">OUR MISSION</span>
            <h2>Vision & Mission</h2>
            <p>
              <strong>Mission:</strong> To serve humanity by providing fundamental needs—food, education, and spiritual guidance—to those who are marginalized by society.
            </p>
            <p>
              <strong>Vision:</strong> A world where no individual goes to sleep hungry, and where traditional wisdom and education empower the next generation to live meaningful lives.
            </p>
          </div>

          <div className="content-block">
            <span className="label-text">ESTABLISHMENT</span>
            <h2>Our Journey</h2>
            <p>
              Established over a decade ago, Aastha Sevabhavi Sanstha was born from a simple yet profound thought: devotion must manifest as service. What began as small community food distribution drives has now grown into a registered organization running multiple sustained initiatives like the Roti Bank.
            </p>
          </div>

          <div className="content-block">
            <span className="label-text">CORE VALUES</span>
            <h2>What Drives Us</h2>
            <ul>
              <li><strong>Compassion:</strong> Acting with empathy towards all living beings.</li>
              <li><strong>Integrity:</strong> Transparency in all our operations and donations.</li>
              <li><strong>Selflessness (Seva):</strong> Serving without the expectation of reward.</li>
              <li><strong>Equality:</strong> Aid distributed irrespective of caste, creed, or religion.</li>
            </ul>
          </div>
          
          <div className="content-block" style={{backgroundColor: 'var(--color-bg)', padding: '2rem', borderRadius: '8px'}}>
            <h3>Registration Details</h3>
            <p style={{marginBottom: 0}}><strong>Registration Number:</strong> [Client Content Required]</p>
            <p style={{marginBottom: 0}}><strong>Establishment Date:</strong> [Client Content Required]</p>
            <p style={{marginBottom: 0}}>All legal and registration information is verified and maintained by our administrative board.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SansthaAbout;
