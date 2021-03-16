import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/login.vue';
import Index from '../views/page/Index.vue';

import Perssion from '../utils/perssion';

Vue.use(VueRouter);
const asyncRoute = [
  {
    path: '/Product',
    name: 'Product',
    component: Home,
    meta: {
      title: '商品',
      icon: 'inbox',
      hidden: false,
    },
    children: [
      {
        path: 'ProductList',
        name: 'ProductList',
        meta: {
          title: '商品列表',
          icon: 'unordered-list',
          hidden: false,
        },
        component: () => import('../views/page/ProductList.vue'),
      },
      {
        path: 'ProductAdd',
        name: 'ProductAdd',
        meta: {
          title: '添加商品',
          icon: 'file-add',
          hidden: false,
        },
        component: () => import('../views/page/ProductAdd.vue'),
      },
      {
        path: 'Edit/:id',
        name: 'ProductEdit',
        meta: {
          title: '商品编辑',
          icon: 'file-add',
          hidden: true,
        },
        component: () => import('../views/page/ProductAdd.vue'),
      },
      {
        path: '/Category',
        name: 'Category',
        meta: {
          title: '商品类目',
          hidden: true,
        },
        component: () => import('../views/page/Category.vue'),
      },
    ],
  },

];
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'home',
      hidden: false,
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        meta: {
          title: '统计',
          icon: 'number',
          hidden: false,
        },
        component: Index,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
    },
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});
let isRoute = false;
router.beforeEach((to, from, next) => {
  console.log(store);
  if (to.path !== '/login') {
    if (store.state.userInfo.appkey && store.state.userInfo.username
       && store.state.userInfo.role) {
      if (!isRoute) {
        const routesArr = Perssion(store.state.userInfo.role, asyncRoute);
        store.dispatch('setRouteMenu', routes.concat(routesArr)).then(() => {
          router.addRoutes(routesArr);
        });
        isRoute = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});
export default router;
