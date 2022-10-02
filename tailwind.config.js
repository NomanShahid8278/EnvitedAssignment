/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "4xl": { max: "1920px" },
      "3xl": { max: "1735px" },
      "2xl": { max: "1535px" },
      xl: { max: "1200px" },
      lg: { max: "992px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "575px" },
      xxs: { max: "420px" },
    },
    extend: {
      backgroundColor: {
        transparent: "transparent",
        primary: {
          dark: "#240D57",
        },
        purple: {
          Shade1: "#8456EC",
          Shade2: "#E87BF8",
        },
        Grey: {
          Shade1: "#4F4F4F",
        },
      },
      colors: {
        transparent: "transparent",
        primary: {
          dark: "#240D57",
        },
        purple: {
          Shade1: "#8456EC",
          Shade2: "#E87BF8",
        },
        Grey: {
          Shade1: "#4F4F4F",
        },
      },
      borderRadius: {
        0: "0px",
        4: "4px",
        10: "10px",
        16: "16px",
        35: "35px",
      },
      boxShadow: {
        Shadow1: "0px 0px 46.8696px rgba(0, 0, 0, 0.05)",
        Shadow2: "0px 0px 5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    function ({ addBase, config }) {
      addBase({
        body: {
          padding: "0",
          margin: "0",
          fontFamily: "Helvetica-Light",
        },
        html: {
          padding: "0",
          margin: "0",
          fontFamily: "Helvetica-Light",
        },
        "*": {
          boxSizing: "inherit",
          fontFamily: "Helvetica-Light",
        },
        li: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        ul: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        a: {
          display: "inline",
          textDecoration: "none",
          transition: ".3s",
          "&:hover": {
            textDecoration: "none",
          },
        },
        p: {
          margin: "0",
          padding: "0",
        },
        h1: {
          margin: "0",
          padding: "0",
        },
        h2: {
          margin: "0",
          padding: "0",
        },
        h3: {
          margin: "0",
          padding: "0",
        },
        h4: {
          margin: "0",
          padding: "0",
        },
        h5: {
          margin: "0",
          padding: "0",
        },
        h6: {
          margin: "0",
          padding: "0",
        },
      });
    },
    function ({ addUtilities }) {
      const dropdownHome = {
        ".theme-btn": {
          padding: "16px 70px",
          borderRadius: "10px",
          fontSize: "20px",
          lineHeight: "24px",
          color: "white",
          fontFamily: "Helvetica-Bold",
          cursor: "pointer",
        },
      };
      addUtilities(dropdownHome, ["responsive", "hover"]);
    },
  ],
};
