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
        "disabled": "#DEE3EC",
        'primary-30': '#6CBAF8',
        'primary-text': '#171A1C',
        'secondary-text': '#73808C',
        "neutral-20": "#F9FAFB",
      },
      height: {
        '720px': '45rem',
        '384px': '384px',
        '451px': '451px',
        '552px': '552px',
        '644px': '644px',
      },
      width: {
        '271': '271px',
        '364': '364px'
      },
      backgroundImage: {
        'banner': "url('../public/img/banner.png')",
        'banner-mobile': "url('../public/img/banner-mobile.png')",
      },
      backgroundPosition: {
        'top-4': 'right 57% bottom 100%',
      },
      fontSize: {
        '40': '40px',
      },
      padding: {
        '18': '68px',
        '34': '142px'
      },
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
  plugins: [require("daisyui")],
}
