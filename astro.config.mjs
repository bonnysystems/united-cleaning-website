import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/edge-functions';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import preact from "@astrojs/preact";

import vanillaExtract from "astro-vanilla-extract";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), preact(), vanillaExtract()],
  output: 'server',
  adapter: netlify()
});