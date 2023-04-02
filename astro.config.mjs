import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  // site: 'https://muru7-8.github.io',
  // base: '/',
  integrations: [react(), svelte(), tailwind()]
});