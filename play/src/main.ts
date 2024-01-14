import { createApp } from 'vue';
import aymfxUI from '../../dist/aymfxui';
import './style.css';
import App from './App.vue';

createApp(App).use(aymfxUI).mount('#app');
