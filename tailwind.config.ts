import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#1C1C1C',
        accent: '#007A33',
        text: '#F8F8FF',
        muted: '#A9A9A9',
        highlight: '#FF6F61',
      },
    }
  },

  plugins: []
} satisfies Config;
