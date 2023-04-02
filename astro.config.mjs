import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://muru7-8.github.io/respiro-namiki',
  base: '/',
  integrations: [react(), svelte(), tailwind()]
});