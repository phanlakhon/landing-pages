import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F53E32",
        "custom-color": {
          F0E8D5: "#F0E8D5",
          F3E8E8: "#F3E8E8",
          E7EAF3: "#E7EAF3",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  safelist: [
    "bg-custom-color-F0E8D5",
    "bg-custom-color-F3E8E8",
    "bg-custom-color-E7EAF3",
  ],
  plugins: [],
};
export default config;
