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
          blue: '#4FA8D8',
          darkblue: '#2c739c',
          white: '#FFFFFF',
          lightgrey: '#F4F6F8',
          charcoal: '#2D3748',
          textlight: '#4A5568'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        scriptalt: ['"Dancing Script"', 'cursive']
      },
    },
  },
  plugins: [],
}
