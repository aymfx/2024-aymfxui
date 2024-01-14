

// 打包入口文件夹
const uiRoot = path.resolve(__dirname, '../packages/aymfx-ui');
const compsRoot = path.resolve(__dirname, '../packages/components');

const distPath = path.resolve(__dirname, '../dist'); //全量打包组建
const esPath = path.resolve(__dirname, '../dist/es'); // es组件
const libPath = path.resolve(__dirname, '../dist/lib'); // lib组件

const tsConfigFilePath = path.resolve(__dirname, '../tsconfig.web.json');

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outputDir: [esPath, libPath],
      tsConfigFilePath,
    }),
  ],
});

const rollupOptions = {
  // 确保外部化处理那些你不想打包进库的依赖
  external: ['vue', 'element-plus'],
  input:path.resolve(uiRoot, 'index.ts'),
  output: [
    {
      format: 'es',
      // 不用打包成.es.js,这里我们想把它打包到.js
      entryFileNames: '[name].js',
      // 让打包目录和我们目录对应
      preserveModules: true,
      // 配置打包根目录
      dir: esPath,
    },
    {
      format: 'cjs',
      entryFileNames: '[name].js',
      preserveModules: true,
      dir: libPath,
    },
  ],
};

// 全量打包
async function buildFull() {
  await build({
    ...baseConfig,
    build: {
      lib: {
        entry: path.resolve(uiRoot, 'index.ts'),
        name: 'aymfx-ui',
      },
      outDir: distPath,
      rollupOptions,
    },
  });
}

const buildlib = async () => {
  await buildFull();
};

buildlib();
