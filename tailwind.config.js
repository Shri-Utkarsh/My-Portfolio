/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        '900px': '900px', // New custom breakpoint
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        'custom-gradient': 'linear-gradient(166deg, rgba(25, 187, 201, 1) 0%, rgba(0, 122, 123, 0.93) 35%, rgba(0, 122, 123, 1) 85%)',
        'intro-custom-gradient': 'linear-gradient(to left, #19BBC9, #007A7B)',
        // 'custom-gradient2': 'linear-gradient(to left, #9883be, #7d7ff7)',
        circularLight: "repeating-radial-gradient(white 2px, #000319 5px, #000319 100px)",
      },
     
    },
  },
  plugins: [],
};

