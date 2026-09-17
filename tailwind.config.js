/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#000000',
          darkblue: '#e6e6e9',
          white: '#FFFFFF',
          lightgrey: '#f4f4f6',
          charcoal: '#000000',
          textlight: '#e6e6e9'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        scriptalt: ['"Dancing Script"', 'cursive'],
        ephesis: ['"Ephesis"', 'cursive'],
        kalam: ['"Kalam"', 'cursive']
      },
      animation: {
        'spin-slow': 'spin-slow 80s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 80s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-slow-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
