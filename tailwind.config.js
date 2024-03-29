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
        'modal-2xl': '1144px',
        'modal-xl': '1024px',
        'modal-lg': '820px',
      },
      colors: {
        'primary': '#4A85F6',
        'gray': '#757575',
        'light-gray': '#C2C2C2',
        'dark-gray': '#404040',
        'light-blue': '#8F9BB3',
        'dark-blue': '#18203A',
        'cyan': '#0095FF',
        'bg': '#F5F5F5',
        'accent': '#EFF4FA'
      },
    },
  },
  plugins: [],
};
