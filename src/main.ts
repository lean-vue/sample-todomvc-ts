import Vue from 'vue';
import App from './App.vue';
import store from './store';

// Import app styles
import 'todomvc-app-css/index.css';

Vue.config.productionTip = false;

new Vue({
  store,
  render(h) { return h(App); },
}).$mount('#app');
