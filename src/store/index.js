import Vue from 'vue';
import Vuex from 'vuex';

import { setCookie, getCookie, removeCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 由于切换右侧导航的状态 false表示不闭合 true表示闭合
    collapsed: false,
    userInfo: getCookie(),
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
  },
  modules: {
  },
});
