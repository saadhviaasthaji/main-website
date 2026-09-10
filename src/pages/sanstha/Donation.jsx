import React from 'react';
import '../../styles/Page.css';

const Donation = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Support Our Cause</h1>
          <p className="page-subtitle">Your contribution helps us feed the hungry and educate the underprivileged.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          
          <div className="content-block" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2>Why Donate?</h2>
            <p>
              Every donation goes directly towards funding the Roti Bank, our community medical camps, and educational drives. 
              Together, we can create a society where no one suffers from a lack of basic human needs.
            </p>
          </div>

          <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
            
            {/* Bank Transfer Details */}
            <div className="content-block" style={{flex: '1 1 400px', backgroundColor: '#F8F9FA', padding: '2rem', border: '1px solid #eee', borderRadius: '8px'}}>
              <h3>Bank Transfer (NEFT/RTGS/IMPS)</h3>
              <div style={{marginTop: '1.5rem'}}>
                <p style={{marginBottom: '0.5rem'}}><strong>Account Name:</strong> Aastha Sevabhavi Sanstha</p>
                <p style={{marginBottom: '0.5rem'}}><strong>Bank Name:</strong> [Bank Name]</p>
                <p style={{marginBottom: '0.5rem'}}><strong>Account Number:</strong> [Account Number]</p>
                <p style={{marginBottom: '0.5rem'}}><strong>IFSC Code:</strong> [IFSC Code]</p>
                <p style={{marginBottom: '0.5rem'}}><strong>Branch:</strong> [Branch Name]</p>
              </div>
            </div>

            {/* UPI / QR Code Details */}
            <div className="content-block" style={{flex: '1 1 400px', backgroundColor: '#F8F9FA', padding: '2rem', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center'}}>
              <h3>Scan & Pay via UPI</h3>
              <div className="grid-image-placeholder" style={{width: '200px', height: '200px', margin: '1.5rem auto', backgroundColor: '#fff', border: '1px solid #ccc'}}>
                [QR Code Placeholder]
              </div>
              <p><strong>UPI ID:</strong> aasthasanstha@upi</p>
            </div>

          </div>

          <div className="content-block" style={{textAlign: 'center', marginTop: '4rem'}}>
            <h3>Tax Exemption Details</h3>
            <p style={{fontSize: '0.9rem', color: 'var(--color-text-light)'}}>
              Donations to Aastha Sevabhavi Sanstha are eligible for tax exemption under Section 80G of the Income Tax Act (Subject to final legal confirmation by client).
              <br/>
              Please email your transaction details and PAN number to <strong>donations@saadhviaasthaji.in</strong> to receive your tax receipt.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Donation;
