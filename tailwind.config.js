/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00529D",
        "secondary": "#F37022",
      }
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      padding: {
        DEFAULT: '3rem',
        sm: '1rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
