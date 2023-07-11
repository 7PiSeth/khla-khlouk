/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { keyframes: {
      wave: {
        '0%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateY(-9px)' },
        '35%': { transform: 'translateY(-9px) rotate(17deg)' },
        '55%': { transform: 'translateY(-9px) rotate(-17deg)' },
        '65%': { transform: 'translateY(-9px) rotate(17deg)' },
        '75%': { transform: 'translateY(-9px) rotate(-17deg)' },
        '100%': { transform: 'translateY(0) rotate(0)' },
      },
    },
    animation: {
      'shake-items': 'wave 0.83s linear',
    },
  },
  fontFamily: {
    'moul': ['Moul', 'sans-serif'],
    'content': ['Content', 'serif'] // Ensure fonts with spaces have " " surrounding it.
  },
},
  plugins: [],
  darkMode: 'class',
}