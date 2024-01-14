import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
import path from 'path';

const uiRoot = path.resolve(__dirname, './packages/aymfx-ui');

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(uiRoot, 'index.ts'),
      name: 'aymfx-ui',
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {},
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outDir: [
        path.resolve(__dirname, './dist/es'),
        path.resolve(__dirname, './dist/lib'),
      ],
      tsconfigPath: path.resolve(__dirname, './tsconfig.web.json'),
    }),
  ],
});
