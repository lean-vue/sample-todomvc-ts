import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import TodosShell from '@/components/TodosShell.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/:visibility?', component: TodosShell,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
