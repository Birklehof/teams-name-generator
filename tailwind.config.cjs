const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#004e47",
          secondary: "#e4f1de",
          accent: "#d9e5ec",
          neutral: "#ffffff",
          "base-100": "#FFFFFF",
          success: "#B7C82C",
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },

  plugins: [require("daisyui")],
};

module.exports = config;
