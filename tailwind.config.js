const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  screens: {},
  theme: {
    container: {
      center: true,
      screens: {
        // sm: "800px",
        // md: "900px",
        // lg: "984px",
        // xl: "1240px",
        // "2xl": "1430px",
      },
      // padding: "15px",
    },
    extend: {
      colors: {
        bgDesc: "#E6E9F2",
        txtHeading: "#3A4562",
        txtPrimary: "#878D9D",
        bgLight: "rgba(255, 207, 0)",
        txtLight: "#988B49",
      },
      boxShadow: {
        "my-shadow":
          "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("not-last", "&:not(:last-child)");
    }),
  ],
};
