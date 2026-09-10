import React from 'react';
import '../../styles/Page.css';

const RotiBank = () => {
  return (
    <div className="page fade-in">
      <header className="page-header" style={{backgroundColor: '#FAF5ED'}}>
        <div className="container">
          <span className="label-text">FLAGSHIP INITIATIVE</span>
          <h1 className="page-title">Roti Bank</h1>
          <p className="page-subtitle">Ensuring no one goes to sleep hungry.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <div className="content-block">
            <h2>The Problem</h2>
            <p>
              Despite rapid economic growth, millions of people still struggle to afford a single square meal a day. 
              Hunger remains one of the most pressing issues in our society, affecting the most vulnerable—children and the elderly.
            </p>
          </div>

          <div className="content-block">
            <h2>Our Initiative</h2>
            <p>
              The <strong>Roti Bank</strong> is Aastha Sevabhavi Sanstha’s direct response to this crisis. 
              It is a sustained, daily effort to collect, prepare, and distribute fresh, hygienic, and nutritious meals to those living on the streets, outside hospitals, and in slum areas.
            </p>
          </div>

          <div className="content-block">
            <h2>How We Help</h2>
            <ul>
              <li><strong>Daily Drives:</strong> Our volunteers operate mobile distribution vans every evening.</li>
              <li><strong>Quality Check:</strong> All food is freshly prepared in our community kitchens under strict hygiene standards.</li>
              <li><strong>Community Network:</strong> We identify high-need areas (hospitals, railway stations) to ensure food reaches the right people.</li>
            </ul>
          </div>

          <div className="content-block">
            <h2>Impact & Statistics</h2>
            <div className="snapshot-stats" style={{marginTop: '2rem'}}>
              <div className="stat">
                <h4 style={{color: 'var(--color-primary)'}}>[XX,XXX]+</h4>
                <h5>Meals Served</h5>
              </div>
              <div className="stat">
                <h4 style={{color: 'var(--color-primary)'}}>[XXX]+</h4>
                <h5>Active Volunteers</h5>
              </div>
            </div>
          </div>
          
          <div className="content-block">
            <h2>Video Showcase</h2>
            <div className="grid-image-placeholder" style={{aspectRatio: '16/9'}}>
              [Client to provide Roti Bank Documentary/Video]
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default RotiBank;
