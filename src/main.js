import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import './assets/main.css'; // Certifica-te de que os estilos estão incluídos

const app = createApp(App);
app.use(router);
app.mount('#app');

const pinia = createPinia();
app.use(pinia);
