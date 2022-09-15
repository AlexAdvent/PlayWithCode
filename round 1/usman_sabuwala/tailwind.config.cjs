/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'main-bg': '#0f103f',
        'form-bg': '#22226c',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
