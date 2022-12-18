module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [

      // {
      //   extend: {
      //     backgroundImage: {
      //       'hero-pattern': "url('../doctors-portal-client/src/assets/images/')",
      //       'footer-texture': "url('/img/footer-texture.png')",
      //     }
      //   }
      // },
      {
        light: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}


