import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import App from './App.vue';
import './index.css';

library.add(fas, far);
const app = createApp(App);
app.component('FasIcon', FontAwesomeIcon);
app.mount('#app');
