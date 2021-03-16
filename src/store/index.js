import Vue from 'vue';
import Vuex from 'vuex';

import { setCookie, getCookie, removeCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 由于切换右侧导航的状态 false表示不闭合 true表示闭合
    collapsed: false,
    userInfo: getCookie(),
    routeMenu: [],
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    outLogin(state) {
      state.userInfo = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
    /**
     * 展示所筛选的路由
     * @param {*} state
     * @param {*} data 展示路由的数组
     */
    setRouteMenu(state, data) {
      state.routeMenu = data;
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      console.log('ddddzzz');
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, data) {
      commit('setUserInfo', data);
      setCookie(data);
    },
    outLogin({ commit }) {
      console.log('ffff');
      commit('outLogin');
      console.log('ggggg');
      removeCookie();
      console.log(getCookie());
    },
    setRouteMenu({ commit }, data) {
      commit('setRouteMenu', data);
    },
  },
  modules: {
  },
});
