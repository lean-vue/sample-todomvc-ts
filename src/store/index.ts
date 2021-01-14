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
    updateTodo: (state, todo: Todo) => {
      state.todos = state.todos.map((t) => (t.id === todo.id ? todo : t));
    },
    deleteTodo: (state, id: number) => {
      state.todos = state.todos.filter((t) => t.id !== id);
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
    async toggleTodo({ commit, state }, id: number) {
      let todo = state.todos.find((t) => t.id === id);
      todo = await backend.updateTodo(id, { completed: !todo?.completed });
      commit('updateTodo', todo);
    },
    async updateTodoTitle({ commit }, payload: {id: number, title: string}) {
      const todo = await backend.updateTodo(payload.id, { title: payload.title });
      commit('updateTodo', todo);
    },
    async deleteTodo({ commit }, id: number) {
      await backend.deleteTodo(id);
      commit('deleteTodo', id);
    },
  },
  modules: {
  },
});
