import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ED2E7A',
        secondary: '#289C96',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
  },
}
