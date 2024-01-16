import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import vue from '@vitejs/plugin-vue';
import consolePlugin from './vite/console';
import virtual from './vite/virtual';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0'),
  },
  plugins: [vue(), Inspect(), consolePlugin(), virtual()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
