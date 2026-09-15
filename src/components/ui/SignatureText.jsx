import React from "react";

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 260" role="img" aria-label="Handwritten signature for Radhe Radhe">
      <defs>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
          @keyframes sig-write { to { stroke-dashoffset: 0; } }
        </style>
      </defs>
      <rect width="800" height="260" fill="#ffffff" />
      
      <!-- राधे -->
      <text x="220" y="160" text-anchor="middle" font-size="110" font-family="'Kalam', cursive" font-weight="700" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="400" stroke-dashoffset="400" style="animation:sig-write 1s ease-out 0.00s forwards">रा</text>
      <text x="320" y="160" text-anchor="middle" font-size="110" font-family="'Kalam', cursive" font-weight="700" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="400" stroke-dashoffset="400" style="animation:sig-write 1s ease-out 0.30s forwards">धे</text>
      
      <!-- राधे -->
      <text x="480" y="160" text-anchor="middle" font-size="110" font-family="'Kalam', cursive" font-weight="700" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="400" stroke-dashoffset="400" style="animation:sig-write 1s ease-out 0.80s forwards">रा</text>
      <text x="580" y="160" text-anchor="middle" font-size="110" font-family="'Kalam', cursive" font-weight="700" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="400" stroke-dashoffset="400" style="animation:sig-write 1s ease-out 1.10s forwards">धे</text>
    </svg>`;

export default function SignatureText({ className = "", style, width = "100%" }) {
  return (
    <span
      className={className}
      style={{ display: "inline-block", lineHeight: 0, width, ...style }}
      dangerouslySetInnerHTML={{ __html: SVG }}
    />
  );
}
