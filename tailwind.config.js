/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core color scheme for the project
        'primary-red': '#E63946', // Vibrant red for accents, buttons, links
        'pure-white': '#FFFFFF', // Clean white for backgrounds, text
        'light-gray': '#F1F3F5', // Soft neutral for secondary backgrounds
        'dark-gray': '#6B7280', // Subtle contrast for secondary text, borders
        'black': '#1D1D1D', // Strong base for dark backgrounds, primary text

        // Legacy colors (optional, keep if needed for other pages)
        primary: {
          100: '#FFF3E0',
          200: '#FFE0B2',
          500: '#FF6F00',
          600: '#EF6C00',
        },
        secondary: {
          500: '#00695C',
          600: '#004D40',
        },
        accent: {
          500: '#FFD700',
          600: '#E6C200',
        },
        // Remove or phase out redundant neutral shades
        neutral: {
          800: '#1A1A1A', // Consider replacing with 'black' (#1D1D1D)
          100: '#FFFFFF', // Consider replacing with 'pure-white'
        },
        // Crimson Ice additions (consolidated)
        crimson: '#E63946', // Duplicate of primary-red, can be removed
        dark: '#1D1D1D', // Duplicate of black, can be removed
        grayDark: '#2D2D2D', // Optional, not used in core scheme
        grayLight: '#D3D3D3', // Optional, not used in core scheme
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'scale-up': 'scaleUp 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  plugins: [],
};