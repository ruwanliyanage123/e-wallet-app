
module.exports = {
  content: [
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "my": "green",
      },
      dropShadow: {
        "header-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        "product-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }
    },
  },
  plugins: [],
}
