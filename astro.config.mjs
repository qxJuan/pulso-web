import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://pulso.co',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
