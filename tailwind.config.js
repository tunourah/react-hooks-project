/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9C62C',   
        secondary: '#80EED3',  
        custom : '#F4EBA7', 
      },
    },
  },
  plugins: [],
}
