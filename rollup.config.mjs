import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
export default {
  input: 'src/main.js',
  output: {
    dir: 'dist',
    name: `[hash].js`,
    format: 'es',
  },
  plugins: [json(), terser()],
};
