const { defineConfig,build } = require('vite');
const vue = require('@vitejs/plugin-vue');
const { resolve } = require('path');

// 打包入口文件夹
const entryDir = path.resolve(__dirname,'../packages')

// 出口文件