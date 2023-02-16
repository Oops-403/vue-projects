import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacyPlugin from '@vitejs/plugin-legacy';

// config doc: https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    legacyPlugin(({
      targets: ['chrome 52'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }))
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/init.scss";'
      }
    }
  },
  build: {
    outDir: 'vivo_guesssong',
    minify: 'esbuild',
  },
  envPrefix: 'VITE_',
  esbuild: {
    // @TODO:
    drop: ['console', 'debugger']
  }
});
