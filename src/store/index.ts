import { Todo } from '@/models/todo';
import Vue from 'vue';
import Vuex from 'vuex';
import backend from '@/api/local-backend';
import { State } from './state';

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: {
    todos: [],
    visibility: 'all',
  },
  getters: {
    isVisibility: (state) => (visibility: string) => state.visibility === visibility,
    todos: (state) => state.todos.filter((t) => (state.visibility === 'all' ? true : (
      (state.visibility === 'completed') === t.completed
    ))),
    activeCount: (state) => state.todos.reduce((count, t) => (t.completed ? count : count + 1), 0),
    hasTodos: (state) => state.todos.length > 0,
    hasCompletedTodos: (state) => state.todos.findIndex((t) => t.completed) !== -1,
    allCompleted: (state) => state.todos.findIndex((t) => !t.completed) === -1,
  },
  mutations: {
    setVisibility: (state, visibility) => {
      state.visibility = visibility;
    },
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
    async updateTodoTitle({ commit }, payload: {id: number; title: string}) {
      const todo = await backend.updateTodo(payload.id, { title: payload.title });
      commit('updateTodo', todo);
    },
    async deleteTodo({ commit }, id: number) {
      await backend.deleteTodo(id);
      commit('deleteTodo', id);
    },
    async deleteCompletedTodos({ commit, state }) {
      const deletedIds = await Promise.all(
        state.todos.filter((t) => t.completed).map((t) => backend.deleteTodo(t.id)),
      );
      deletedIds.forEach((id) => commit('deleteTodo', id));
    },
    async syncAllCompletedStates({ commit, state, getters }) {
      const currentState = getters.allCompleted;
      const changedTodos = await Promise.all(
        state.todos.filter((t) => t.completed === currentState)
          .map((t) => backend.updateTodo(t.id, { completed: !currentState })),
      );
      changedTodos.forEach((t) => commit('updateTodo', t));
    },
  },
  modules: {
  },
});
