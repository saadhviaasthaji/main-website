import React from 'react';
import '../styles/Page.css';

const Contact = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with the official team for Saadhvi Aastha Ji.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <div className="content-block" style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2>Official Channels</h2>
            <p><strong>Email:</strong> contact@saadhviaasthaji.in</p>
            <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
            <p style={{marginTop: '1rem', color: 'var(--color-text-light)'}}>Our team is available Monday to Saturday, 10:00 AM to 6:00 PM (IST).</p>
          </div>

          <div className="form-container">
            <h3 style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem'}}>Send a Message</h3>
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
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" placeholder="Phone" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Subject of your message" required />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-control" placeholder="Your message..." required></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
