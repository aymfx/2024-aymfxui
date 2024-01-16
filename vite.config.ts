import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

const compsRoot = path.resolve(__dirname, './packages/components');
const esPath = path.resolve(__dirname, './dist/es'); // es组件
const libPath = path.resolve(__dirname, './dist/lib'); // lib组件

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: [esPath, libPath],
    }),
  ],
  build: {
    outDir: 'es',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'element-plus'],
      input: path.resolve(compsRoot, 'index.ts'),
      output: [
        {
          format: 'es',
          // 让打包目录和我们目录对应
          preserveModules: true,
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].mjs',
          // 配置打包根目录
          dir: esPath,
        },
        {
          format: 'cjs',
          preserveModules: true,
          entryFileNames: '[name].js',
          dir: libPath,
        },
      ],
    },
    lib: {
      entry: path.resolve(compsRoot, 'index.ts'),
      name: 'aymfxUi',
      fileName: 'aymfx-ui',
    },
  },
});
