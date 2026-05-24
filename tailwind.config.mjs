/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f7f7f6',
          100: '#eeeeed',
          200: '#d8d8d6',
          300: '#b6b6b3',
          400: '#8c8c89',
          500: '#6c6c69',
          600: '#555553',
          700: '#454544',
          800: '#2c2c2b',
          900: '#1a1a19',
        },
        accent: {
          50: '#ecfbf6',
          100: '#d0f4e7',
          200: '#a4e7d2',
          300: '#6dd3b6',
          400: '#3bb695',
          500: '#1f9979',
          600: '#0e7c66',
          700: '#0b6453',
          800: '#0a5044',
          900: '#08403a',
        },
      },
    },
  },
  plugins: [],
};
