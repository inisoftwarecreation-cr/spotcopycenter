/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C8102E',
          dark: '#9b0b21',
          light: '#f5e6e8',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulseDot 1.4s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.65)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #9b0b21 0%, #C8102E 60%, #e8345a 100%)',
        'red-gradient': 'linear-gradient(135deg, #9b0b21, #C8102E)',
      },
    },
  },
  plugins: [],
}
