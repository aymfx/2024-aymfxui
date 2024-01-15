import { createApp } from 'vue';
const modules = import.meta.glob('./dir/*.js');
console.log(modules);

for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod);
  });
}

import './style.css?inline';
import App from './App.vue';

createApp(App).mount('#app');
