import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          primary: "#4EBEE1",

          secondary: "#706800",

          accent: "#00d644",

          neutral: "#241b13",

          "base-100": "#FFFFFF",

          info: "#0079f1",

          success: "#00ffb8",

          warning: "#e85800",

          error: "#ff8d8d",
        },
      },
    ],
  },

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "340px",
        md: "797px",
        lg: "1024px",
        xl: "1280px",
      },
      
    },
  },
  plugins: [require("daisyui")],
};
export default config;
