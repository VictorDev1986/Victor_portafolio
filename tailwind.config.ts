import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#f5741c",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
         "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,44,187,1) 49%, rgba(9,15,33,1) 100%);",
      },
    },
  },
  plugins: [],
};
export default config;
