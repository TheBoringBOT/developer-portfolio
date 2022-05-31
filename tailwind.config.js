module.exports = {
  darkMode: "class",
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        highlight: "#0071e3",
        "highlight-hover": "#0077ED",
        black: "#151516",
        "black-2": "#1d1d1f",
        "black-secondary": "#000",
        grey: "#DDDDE1",
        "light-grey": "#F2F2F2",
        "dark-grey": "#a1a1a6",

        // dark mode colors
        "highlight-dark": "#2f84f0",
        "highlight-dark-hover": "#146ddd",

        //used for avatar
        "ghost-bg": "#d6d6d680",
        "ghost-border": "#ffffff4d",
      },
      backgroundImage: {
        //gradients
        "pastel-gradient":
          "radial-gradient(circle farthest-side at 100% 100%,#9873ff,rgba(152,115,255,0)),radial-gradient(circle farthest-side at 100% 0,#0ba5f7,rgba(85,196,255,0)),radial-gradient(circle farthest-side at 0 0,#ff763c,rgba(255,176,60,0)),radial-gradient(circle farthest-side at 0 100%,#ff5aaa,rgba(255,90,170,0))",
      },
    },
  },
  plugins: [],
};
