import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const Layout = () => import('@/layout/index.vue');

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
    name: 'Login',
  },
  {
    path: '/register',
    component: () => import('@/views/Register.vue'),
    name: 'Register',
  },
  // {
  //   path: "/404",
  //   component: () => import("@/views/error-page/404.vue"),
  //   name:"404"
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
      },
      {
        path: '/test',
        component: () => import('@/views/test/index.vue'),
        name: 'Test',
      },
    ],
  },
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory('/'),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: '/login' });
}

export default router;
