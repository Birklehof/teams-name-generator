import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { ViteFaviconsPlugin } from "vite-plugin-favicon";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/birklehof-teams-name-generator/",
  plugins: [svelte(), ViteFaviconsPlugin("./src/assets/favicon.png")],
});
