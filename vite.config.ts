import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        model: resolve(__dirname, "model/index.html"),
        careers: resolve(__dirname, "careers/index.html"),
        research: resolve(__dirname, "research/index.html"),
        progress: resolve(__dirname, "progress/index.html"),
        news: resolve(__dirname, "news/index.html"),
        developers: resolve(__dirname, "developers/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
      },
    },
  },
});
