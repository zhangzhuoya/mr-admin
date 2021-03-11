import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 由于切换右侧导航的状态 false表示不闭合 true表示闭合
    collapsed: false,
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
  },
  modules: {
  },
});
