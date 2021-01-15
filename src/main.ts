import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

// Import app styles
import 'todomvc-app-css/index.css';

// Import global directives
import focusOn from './directives/focus-on';

createApp(App)
  .directive('focus-on', focusOn)
  .use(router)
  .use(store)
  .mount('#app');
