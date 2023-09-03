// path: ./vite.config.js
import { defineConfig } from "vite";
import { terser } from "rollup-plugin-terser";
import createVuePlugin from "@vitejs/plugin-vue";
import "vite-plugin-node"; // Import using default import

export default defineConfig({
  server: {
    cors: {
      origin: [/\localhost:5173$/],
      optionsSuccessStatus: 200,
    },
  },

  plugins: [createVuePlugin()], // Use default import here

  build: {
    rollupOptions: {
      plugins: [terser()],
      external: ["plyr"],
    },
  },
});
