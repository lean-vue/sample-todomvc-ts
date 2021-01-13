import { Todo } from '@/models/todo';
import Vue from 'vue';
import Vuex from 'vuex';
import backend from '@/api/local-backend';
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
    initialize: (state, todos: Todo[]) => {
      state.todos = todos;
    },
    createTodo: (state, todo: Todo) => {
      state.todos.push(todo);
    },
  },
  actions: {
    async initialize({ commit }) {
      const todos = await backend.getAll();
      commit('initialize', todos);
    },
    async createTodo({ commit }, title: string) {
      const todo = await backend.createTodo(title);
      commit('createTodo', todo);
    },
  },
  modules: {
  },
});
