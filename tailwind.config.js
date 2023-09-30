/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ikyellow: {
          50: '#ffffe5',
          100: '#fcffc7',
          200: '#f7ff95',
          300: '#eaff40',
          400: '#ddf625',
          500: '#bedd05',
          600: '#94b100',
          700: '#6f8605',
          800: '#58690b',
          900: '#49590e',
          950: '#273201',
        },
        ikpurple: {
          50: '#eeefff',
          100: '#e0e2ff',
          200: '#c7c9fe',
          300: '#a6a6fb',
          400: '#8a82f7',
          500: '#7864f0',
          600: '#603be2',
          700: '#5c39c9',
          800: '#4b31a2',
          900: '#3f2f80',
          950: '#261b4b',
        },
        ikblue: {
          50: '#f3f3ff',
          100: '#eae9fe',
          200: '#d8d6fe',
          300: '#bab4fe',
          400: '#978afb',
          500: '#755af8',
          600: '#6438ef',
          700: '#5526db',
          800: '#471fb8',
          900: '#3c1c96',
          950: '#2b1380',
        },
      }
    },
  },
  plugins: [],
}
