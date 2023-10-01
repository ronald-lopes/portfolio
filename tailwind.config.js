import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        photo: "url('/images/photo.png')",
      },
      keyframes: {
        rocket: {
          '0%': { transform: 'translateY(0)' },
          '80%': { opacity: '0' },
          '90%': { transform: 'translate(24px, -32px)' },
          '100%': { opacity: '0', display: 'none' },
        },
      },
      animation: {
        rocket: 'rocket 1s ease-in-out forwards',
      },
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      cursive: ['Yellowtail', 'cursive'],
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
