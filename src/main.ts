import Vue from 'vue';
import App from './App.vue';

import store from './store';
import router from './router';

// Import app styles
import 'todomvc-app-css/index.css';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render(h) { return h(App); },
}).$mount('#app');
