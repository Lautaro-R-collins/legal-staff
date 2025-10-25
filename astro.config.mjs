// astro.config.mjs
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone', // importante para Render
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
