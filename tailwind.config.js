module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["SFProDisplay", "Helvetica"],
      },
      // fontWeight: {
      //   light: "lighter",
      // },
      colors: {
        indigo: {
          light: "#F1F1FF",
          DEFAULT: "#605BFF",
        },
      },
      stroke: {
        current: "#605BFF",
        hover: "#FFFFFF",
      },
      boxShadow: {
        indigo: "0 0 15px 0 #605BFF",
        indigo_sm: "0 0 5px 0 #605BFF",
      },
      backgroundImage: {
        "no-cover":
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23605BFFFF' stroke-width='1' stroke-dasharray='20%2c 20' stroke-dashoffset='22' stroke-linecap='square'/%3e%3c/svg%3e\")",
      },
      minWidth: {
        "10/12": "91.666667%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
