import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import { VitePWA } from 'vite-plugin-pwa'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// Helper imports
import { manifest, seoConfig } from "./utils/seoConfig"

// https://astro.build/config
export default defineConfig({
  site: seoConfig.baseURL,
  output: 'server',
  adapter: netlify(),
  integrations: [react(), svelte(), tailwind()],
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest,
        workbox: {
          globDirectory: 'dist',
          globPatterns: [
            '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
          ],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null,
        },
      })
    ]
  }
});