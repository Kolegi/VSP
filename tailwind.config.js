// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["e-Ukraine", "Montserrat"],
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["15px", "24px"],
      base: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "28px"],
      "2xl": ["24px", "32px"],
      "3xl": ["30px", "36px"],
      "4xl": ["36px", "40px"],
      "5xl": ["48px", "48px"],
      "6xl": ["60px", "60px"],
      "7xl": ["72px", "72px"],
      "8xl": ["96px", "96px"],
      "9xl": ["128px", "128px"],
    },
    extend: {
      custom: ["e-Ukraine", "sans-serif"],
      colors: {
        main: "#079F5D",
        "grey-02": "#242424",
        "grey-03": "#363635",
        "grey-04": "#545454",
        "grey-05": "#6C6C6C",
        "white-08": "#E2E2E2",
        "white-09": "#F8F8F8",
        "bg-03": "#F6F5F2",
      },
    },
    plugins: [],
  },
};
