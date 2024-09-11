/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}', // Include all JavaScript, JSX, TypeScript, and TSX files in your `src` folder.
  './public/index.html',
];
export const theme = {
  extend: {backgroundImage: {
    'gradient-text': 'linear-gradient(to right, #f58529, #dd2a7b, #8134af, #515bd4)',
  },
  textColor: {
    'gradient': 'transparent',
  }},
};
export const plugins = [ function({ addUtilities, theme, variants }) {
  addUtilities({
    '.text-gradient': {
      backgroundImage: theme('backgroundImage.gradient-text'),
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: theme('textColor.gradient'),
      WebkitTextFillColor: 'transparent',
    },
  }, variants('textColor'));
}];
