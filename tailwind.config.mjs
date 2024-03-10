/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      transitionProperty: {
        mw: "max-width",
        mh: "max-height",
        left: "left",
      },
      animation: {
        "move-left": "left 400ms ease-in-out forwards",
        "move-left-md": "leftmd 400ms ease-in-out forwards",
        "move-right": "right 300ms ease-in-out forwards",
        "move-right-md": "rightmd 300ms ease-in-out forwards",
      },
      keyframes: {
        left: {
          "0%": {
            width: "10rem",
            height: "4rem",
          },
          "65%": {
            width: "100%",
            height: "4rem",
          },
          "100%": {
            width: "100%",
            height: "25rem",
          },
        },
        leftmd: {
          "0%": {
            width: "10rem",
            height: "4rem",
          },
          "65%": {
            width: "100%",
            height: "4rem",
          },
          "100%": {
            width: "100%",
            height: "11rem",
          },
        },
        right: {
          "0%": {
            width: "100%",
            height: "25rem",
          },
          "40%": {
            width: "100%",
            height: "4rem",
          },
          "100%": {
            width: "10rem",
            height: "4rem",
          },
        },
        rightmd: {
          "0%": {
            width: "100%",
            height: "11rem",
          },
          "40%": {
            width: "100%",
            height: "4rem",
          },
          "100%": {
            width: "10rem",
            height: "4rem",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
