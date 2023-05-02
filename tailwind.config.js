const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  theme: {
    colors: {
      orange: colors.orange,
      white: colors.white
    }
  },
  variants: {},
  darkMode: "class"
};
