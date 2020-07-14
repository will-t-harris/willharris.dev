module.exports = {
  purge: [],
  theme: {
    extend: {
      backgroundColor: {
        lightModeBody: "#f4f9fc",
        lightModeBlue: "#323d79",
        darkModeBody: "#272525",
      },
      borderColor: {
        lightModeText: "#323d79",
      },
      textColor: {
        lightModeText: "#323d79",
        darkModeText: "#f4f9fc",
      },
      spacing: {
        900: "56.25rem",
        600: "37.5rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "even", "odd", "hover", "focus"],
  },
  plugins: [],
}
