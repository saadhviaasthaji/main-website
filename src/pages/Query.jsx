import React from 'react';
import '../styles/Page.css';

const Query = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Ask a Query</h1>
          <p className="page-subtitle">Submit your general queries, spiritual questions, or event-related doubts.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <div className="form-container">
            <p style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-light)'}}>
              Your query will be reviewed by our authorized team, and we will respond as soon as possible.
            </p>
            
            <form>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>

              <div className="form-group" style={{display: 'flex', gap: '1rem'}}>
                <div style={{flex: 1}}>
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="Email" required />
                </div>
                <div style={{flex: 1}}>
                  <label className="form-label">Phone Number (Optional)</label>
                  <input type="tel" className="form-control" placeholder="Phone" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Query Type</label>
                <select className="form-control" required>
                  <option value="">Select Type</option>
                  <option value="general">General Query</option>
                  <option value="spiritual">Spiritual Question</option>
                  <option value="event">Event-related Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea className="form-control" placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">Submit Query</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Query;
