import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import './index.css';
import router from '@/components/router';
import store from './store';
import App from './App.vue';

library.add(fas, far);
const app = createApp(App);
app.use(router);
app.use(store);
app.component('FasIcon', FontAwesomeIcon);
app.mount('#app');
