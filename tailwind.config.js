/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core color scheme for the project (unchanged)
        'primary-red': '#E63946',
        'pure-white': '#FFFFFF',
        'light-gray': '#F1F3F5',
        'dark-gray': '#6B7280',
        'black': '#1D1D1D',
        // Legacy colors (unchanged)
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
        neutral: {
          800: '#1A1A1A',
          100: '#FFFFFF',
        },
        crimson: '#E63946',
        dark: '#1D1D1D',
        grayDark: '#2D2D2D',
        grayLight: '#D3D3D3',
        // Navigation colors (unchanged)
        nav: {
          text: '#ffffff',
          hover: '#d1d5db',
          border: '#ffffff',
        },
        // High-concentration emerald colors
        emerald: {
          100: 'rgb(204, 251, 225)', // Vibrant, light green for placeholders, card content
          200: 'rgb(110, 231, 183)', // Rich, saturated green for rectangle, tab hover
          900: 'rgb(6, 78, 59)',     // Deep green for borders, text
        },
        // High-concentration amber colors
        amber: {
          300: 'rgb(253, 230, 138)', // Soft amber for borders
          400: 'rgb(252, 211, 77)',  // Bright for headings (if needed)
          500: 'rgb(251, 191, 36)',  // Vivid for buttons, active tabs
          600: 'rgb(245, 158, 11)',  // Deeper for button hover
        },
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