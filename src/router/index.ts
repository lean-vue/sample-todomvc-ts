import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import TodosShell from '@/components/TodosShell.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/:visibility?', component: TodosShell,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
