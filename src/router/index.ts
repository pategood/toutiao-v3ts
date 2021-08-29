import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { index: 1 },
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/index.vue'),
    meta: { index: 1 },
  },
  {
    path: '/article/:articleId',
    name: 'article',
    // 将动态路由参数映射到组件的props
    props: true,
    component: () => import('@/views/article/index.vue'),
    meta: {
      index: 2,
    },
  },
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          login_require: false,
          title: '主页',
          meta: { index: 0 }
        }
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa/index.vue'),
        meta: {
          login_require: false,
          title: 'QA页',
          index: 0
        }
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/index.vue'),
        meta: {
          login_require: false,
          title: '视频页',
          index: 0
        }
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/index.vue'),
        meta: {
          login_require: false,
          title: 'MY页',
          index: 0
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
