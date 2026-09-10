const fs = require('fs');
const path = require('path');

const pages = [
  'src/pages/About.jsx',
  'src/pages/Booking.jsx',
  'src/pages/Contact.jsx',
  'src/pages/Query.jsx',
  'src/pages/PrivacyPolicy.jsx',
  'src/pages/Terms.jsx',
  'src/pages/sanstha/SansthaHome.jsx',
  'src/pages/sanstha/SansthaAbout.jsx',
  'src/pages/sanstha/SansthaWorks.jsx',
  'src/pages/sanstha/RotiBank.jsx',
  'src/pages/sanstha/Gallery.jsx',
  'src/pages/sanstha/Founder.jsx',
  'src/pages/sanstha/President.jsx',
  'src/pages/sanstha/Donation.jsx',
  'src/pages/sanstha/Membership.jsx'
];

pages.forEach(pagePath => {
  const fullPath = path.join(__dirname, pagePath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const name = path.basename(pagePath, '.jsx');
  
  if (!fs.existsSync(fullPath)) {
    const content = `import React from 'react';

const ${name} = () => {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4">${name}</h1>
        </div>
      </header>
    </div>
  );
};

export default ${name};
`;
    fs.writeFileSync(fullPath, content);
  }
});
console.log('Pages generated!');
