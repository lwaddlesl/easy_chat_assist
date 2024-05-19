import './assets/main.css';
import 'primevue/resources/primevue.min.css';

// Themes
// https://primevue.org/theming/

import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/themes/lara-dark-blue/theme.css';

// Core primevue
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });

app.mount('#app');
