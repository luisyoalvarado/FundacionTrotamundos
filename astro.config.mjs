// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Reemplaza con el dominio final de la fundación
  site: 'https://fundaciontrotamundos.org', 
  integrations: [sitemap()],
});