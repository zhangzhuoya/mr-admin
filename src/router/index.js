import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(store);
  if (to.path !== '/login') {
    if (store.state.userInfo.appkey && store.state.userInfo.username
       && store.state.userInfo.role) {
      return next();
    }
    return next('/login');
  }
  return next();
});
export default router;
