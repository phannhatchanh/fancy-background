import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './hooks/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      primaryLite: '#92c6e7',
      primaryMedium: '#4a93c2',
      primary: '#088CDE',
      primaryDark: '#4E7A94',
      typography: '#27272a',
      typographyLite: '#52525b',
      typographyDark: '#18181b',
      siteBackground: '#f4f4f5',
      white: '#fff',
      black: '#000',
      liteGray: '#E5E7EB',
      paper: 'rgba(244, 244, 245, 0.95)',
      paperDark: 'rgba(0, 0, 0, 0.85)',
      yellow: '#ffd53d',
      red: '#f25c54',
      green: '#48cb8a',
    },
    screens: {
      xs: {
        min: '0px',
        max: '767px',
      },
      sm: {
        min: '0px',
        max: '767px',
      },
      print: {
        raw: 'print',
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
