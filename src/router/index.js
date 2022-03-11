import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/FrontProducts.vue'),
      },
      {
        path: 'products/:id',
        component: () => import('../views/FrontProductView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/FrontCart.vue'),
      },
      {
        path: 'login',
        component: () => import('../views/LoginView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/BackendDashboard.vue'),
    children: [{
      path: 'products',
      name: 'BEProducts',
      component: () => import('../views/DashboardProducts.vue'),
    }],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
