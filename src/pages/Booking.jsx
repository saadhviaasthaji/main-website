import React from 'react';
import '../styles/Page.css';

const Booking = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Invite for Katha</h1>
          <p className="page-subtitle">Request Saadhvi Aastha Ji's presence for religious or spiritual events.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <div className="form-container">
            <p style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-light)'}}>
              Please fill out the form below. A booking submission is treated as a request. Final confirmation will be handled manually by our authorized team.
            </p>
            
            <form>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <label className="form-label">Organization Name (if any)</label>
                <input type="text" className="form-control" placeholder="Organization" />
              </div>

              <div className="form-group" style={{display: 'flex', gap: '1rem'}}>
                <div style={{flex: 1}}>
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" placeholder="Phone" required />
                </div>
                <div style={{flex: 1}}>
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="Email" required />
                </div>
              </div>

              <div className="form-group" style={{display: 'flex', gap: '1rem'}}>
                <div style={{flex: 1}}>
                  <label className="form-label">Event Type</label>
                  <select className="form-control" required>
                    <option value="">Select Event Type</option>
                    <option value="katha">Katha</option>
                    <option value="spiritual">Spiritual Event</option>
                    <option value="religious">Religious Program</option>
                    <option value="other">Other Special Invitation</option>
                  </select>
                </div>
                <div style={{flex: 1}}>
                  <label className="form-label">Event Date</label>
                  <input type="date" className="form-control" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Event Location (Venue)</label>
                <input type="text" className="form-control" placeholder="Venue details" required />
              </div>

              <div className="form-group" style={{display: 'flex', gap: '1rem'}}>
                <div style={{flex: 1}}>
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" placeholder="City" required />
                </div>
                <div style={{flex: 1}}>
                  <label className="form-label">State</label>
                  <input type="text" className="form-control" placeholder="State" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Expected Audience Size</label>
                <input type="number" className="form-control" placeholder="e.g. 500" required />
              </div>

              <div className="form-group">
                <label className="form-label">Additional Details</label>
                <textarea className="form-control" placeholder="Any specific requirements or notes about the event..." required></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
