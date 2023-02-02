/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('../public/images/background-lime.jpg')"
    
      },
    },
  },
  plugins: [],
};
