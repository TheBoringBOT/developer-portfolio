module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // highlight: "#007AFF",
        "highlight-hover": "#0077ED",
        highlight: "#fe2851",
        "highlight-hover": "#fe3d62",
        black: "#1D1D1F",
        grey: "#DDDDE1",
        "light-grey": "#F5F5F7",
        "dark-grey": "#86868B",

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
