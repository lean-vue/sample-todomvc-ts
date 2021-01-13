import Vue from 'vue';
import Vuex from 'vuex';
import { State } from './state';

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: {
    todos: [],
  },
  getters: {
    todos: (state) => state.todos,
    hasTodos: (state) => state.todos.length > 0,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
