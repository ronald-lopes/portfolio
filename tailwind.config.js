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
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      cursive: ['Yellowtail', 'cursive'],
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
