import { defineConfig } from "astro/config";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://clementchaumel.github.io",
  base: "/ubuntu-design-astro",
  integrations: [
    prefetch({
      selector: "a[href^='/']",
    }),
  ],
});
