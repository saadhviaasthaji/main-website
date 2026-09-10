import React from 'react';
import '../../styles/Page.css';

const Membership = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Become a Member</h1>
          <p className="page-subtitle">Join Aastha Sevabhavi Sanstha as a volunteer or official member.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          
          <div className="content-block" style={{textAlign: 'center', marginBottom: '2rem'}}>
            <h2>Join Our Mission</h2>
            <p>
              We are always looking for dedicated individuals to help us expand our reach. Fill out the form below, and our team will contact you to discuss how you can contribute to the Sanstha.
            </p>
          </div>

          <div className="form-container">
            <form>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="form-group" style={{display: 'flex', gap: '1rem'}}>
                <div style={{flex: 1}}>
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" required />
                </div>
                <div style={{flex: 1}}>
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Complete Address</label>
                <textarea className="form-control" style={{minHeight: '80px'}} required></textarea>
              </div>

              <div className="form-group" style={{display: 'flex', gap: '1rem'}}>
                <div style={{flex: 1}}>
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" required />
                </div>
                <div style={{flex: 1}}>
                  <label className="form-label">Occupation</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Reason for Joining</label>
                <textarea className="form-control" placeholder="Why do you want to join the Sanstha?" required></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Message / Skills (Optional)</label>
                <textarea className="form-control" style={{minHeight: '80px'}} placeholder="Any specific skills you can offer (e.g., medical, teaching, logistics)..."></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">Submit Application</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Membership;
