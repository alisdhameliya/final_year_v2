module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" }
    },
    extend: {
      colors: {
        amber: { 500: "#fbbc05" },
        black: { 900: "#010101" },
        blue: {
          a200: "#4196fa",
          a200_01: "#4285f4"
        },
        gray: {
          50: "#f6f8f9",
          100: "#f3f3f3",
          300: "#dbdddd",
          400: "#b7babc",
          500: "#93989a",
          900: "#181a26",
          "400_33": "#cacaca33",
          "400_4c": "#cacaca4c",
          "500_e5": "#93989ae5",
          "900_01": "#15161d",
          "900_0f": "#15161d0f",
          "900_26": "#15161d26",
          "900_26_01": "#130c1a26",
          "900_e5": "#181a26e5"
        },
        green: {
          600: "#34a853",
          "600_01": "#42a846"
        },
        indigo: {
          a200: "#6271eb",
          a200_54: "#6170eb54"
        },
        red: {
          500: "#ea4335",
          600: "#e23434"
        },
        white: {
          a700: "#ffffff",
          a700_cc: "#ffffffcc",
          a700_e5: "#ffffffe5"
        }
      },
      boxShadow: {
        xs: "0 4px 100px 0 #cacaca33",
        sm: "0 4px 100px 0 #cacaca4c"
      },
      // fontFamily: {
      //   urbanist: "Urbanist",
      //   outfit: "Outfit"
      // },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #6271eb, #6170eb54)"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(83deg, rgba(47,83,255,0.6139705882352942) 0%, rgba(67,143,255,0.3842787114845938) 58%, rgba(45,138,255,0.13217787114845936) 100%)',
      },
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
