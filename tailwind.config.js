/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-greeting": "url(/src/assets/bg-home.jpg)",
      },
      colors: {
        "primary-color": "#0d253f",
        "secondary-color": "#01B4E4",
        "tertiary-color": "#90CEA1",
        "scroller-grey": "#DBDBDB",
        "light-grey": "#E3E3E3",
        "darker-grey": "#C8C8C8",
        "vibrant-dark-blue": "#062541",
        "vibrant-light-blue": "#0076F1",
        "tmdb-dark-blue": "#032541",
        "tmdb-lighter-green": "#C0FECF",
        "tmdb-light-green": "#1ED5A9",
        "tmdb-logo-orange": "#FDC170",
        "tmdb-logo-red": "#D93B63",
        "account-silver": "#959595",
        "account-pink": "#EA148C",
        "account-purple": "#805BE7",
        "account-green": "#01D277",
        "account-teal": "#01C6AC",
        "account-light-blue": "#01B4E4",
        "account-blue": "#0177D2",
        "account-orange": "#D27701",
        "account-yellow": "#D29001",
        "account-red": "#D40242",
        "color-add-one": "rgba(31.5, 31.5, 52.5, 1)",
        "color-add-two": "rgba(31.5, 31.5, 52.5, 0.84)",
        "color-certification-rated": "rgba(0, 0, 0, .6)",
      },
      fontSize: {
        h2: ["2.2rem", "1rem"],
      },
    },
  },
  plugins: [],
};
