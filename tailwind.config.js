/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'bar': '254px',
      },
      colors: {
        'primary': '#4A85F6',
        'gray': '#757575',
        'light-gray': '#C2C2C2',
        'dark-gray': '#404040',
        'light-blue': '#8F9BB3',
        'cyan': '#0095FF',
      },
    },
  },
  plugins: [],
};
