/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-red': '#E63946',
        'pure-white': '#FFFFFF',
        'light-gray': '#F1F3F5',
        'dark-gray': '#6B7280',
        'black': '#1D1D1D',
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
        nav: {
          text: '#ffffff',
          hover: '#d1d5db',
          border: '#ffffff',
        },
        emerald: {
          100: 'rgb(204, 251, 225)',
          200: 'rgb(110, 231, 183)',
          900: 'rgb(6, 78, 59)',
        },
        amber: {
          300: 'rgb(253, 230, 138)',
          400: 'rgb(252, 211, 77)',
          500: 'rgb(251, 191, 36)',
          600: 'rgb(245, 158, 11)',
        },
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
        '3xs': '0.5rem',   // 8px
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
