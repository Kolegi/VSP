// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["e-Ukraine", "Montserrat"],
    },
    fontSize: {
      xs: ["12px", "16px"],
      s: ["13px", "18px"],
      sm: ["15px", "24px"],
      base: ["16px", "24px"],
      lg: ["18px", "28px"],
      "p-lg": ["18px", "32px"],
      xl: ["20px", "28px"],
      "2xl": ["24px", "32px"],
      "3xl": ["28px", "32px"],
      "4xl": ["30px", "36px"],
      "5xl": ["38px", "40px"],
      "6xl": ["56px", "60px"],
      "7xl": ["72px", "72px"],
      "8xl": ["96px", "96px"],
      "9xl": ["128px", "128px"],
    },
    extend: {
      keyframes: {
        scrollpage: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        scrollpage: "scrollpage 1s ease-in-out",
      },
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
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          ".scroll-ani": {
            animation: "appear linear",
            "animation-timeline": "view()",
            "animation-range": "entry 0% cover 40%",
          },
        };
        addUtilities(newUtilities, ["responsive", "hover"]);
      },
    ],
    future: {
      all: true,
    },
  },
};
