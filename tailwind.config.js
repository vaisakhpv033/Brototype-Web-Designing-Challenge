

/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Core
        background: '#FEFEFE',         // white  
        foreground: '#171717',         // almost-black 
        // Brand accents
        primary: {
          DEFAULT: '#9333EA',          // violet luxury 
          dark: '#6B21A8',
          light: '#C084FC'
        },
        danger: {
          DEFAULT: '#DC2626',          // urgent red  
          light: '#F87171'
        },
        success: {
          DEFAULT: '#10B981',          // hopeful green  
          light: '#6EE7B7'
        },
        muted: '#F3F4F6',              // gentle gray  
        border: '#E5E7EB',             // light neutral  
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],  // elegant, modern :contentReference[oaicite:1]{index=1}
      },
      boxShadow: {
        premium: '0 10px 30px -5px rgba(0,0,0,0.1)', // soft yet deep  
      },
      borderRadius: {
        xl: '1rem',                   // more generous rounding  
        '2xl': '1.5rem'
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      transitionDuration: {
        premium: '300ms'
      }
    }
  },
  plugins: []
}
