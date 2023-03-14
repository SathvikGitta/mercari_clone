/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "border-thin": "1px",
      },
      borderColor: {
        "borderGrey": "#b2b2b2",
      },
      colors: {
        "colorBlue": "#204cd9",
        "colorBorder": "#1e1e1e",
      },
      backgroundImage: {
        landingPage: "url('assets/images/imagebanner.jpg')",
        footerBanner: "url('assets/images/LoginBanner.webp')"
      }
    },
  },
  plugins: [],
}
