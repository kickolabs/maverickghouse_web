/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B11217',
        navy: '#081B29',
        light: '#F8F9FA',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      spacing: {
        section: '5rem',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(8,27,41,0.75))',
      },
    },
  },
  plugins: [],
}
