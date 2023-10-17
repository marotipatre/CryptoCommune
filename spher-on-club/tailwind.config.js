/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-page": "url('/src/assets/bg.svg')",
        loginPic: "url('/src/assets/loginPic1.svg')",
      },
      backgroundColor: {
        "hearverse-bg": "#111827",
      },
      fontFamily: {
        spaceGrotesk : ["Space Grotesk"],
        poppins : ["Poppins"],
        inter : ["inter"],
      },
    },
  },
  plugins: [],
};
