import React from 'react';

const Kicker = ({ children, className = '' }) => {
  return (
    <span className={`text-xs uppercase tracking-[2px] font-bold text-[#000000] mb-4 block ${className}`}>
      {children}
    </span>
  );
};

export default Kicker;
