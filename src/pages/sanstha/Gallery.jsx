import React from 'react';
import '../../styles/Page.css';

const Gallery = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Social Work Gallery</h1>
          <p className="page-subtitle">A visual journey of our community service and distribution drives.</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          
          <div className="image-grid">
            {/* Generating 9 placeholder images for the gallery */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="grid-image-placeholder">
                [Gallery Image {item}]
              </div>
            ))}
          </div>
          
          <p style={{textAlign: 'center', marginTop: '3rem', color: 'var(--color-text-light)'}}>
            *Images should be optimized for web performance while preserving quality. (Client Content Required)
          </p>

        </div>
      </section>
    </div>
  );
};

export default Gallery;
