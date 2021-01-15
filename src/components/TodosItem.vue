<template>
  <li :class="{ completed: todo.completed, editing: editMode }">
    <div class="view">
      <input class="toggle" type="checkbox"
        :checked="todo.completed" @change="toggleTodo(todo.id)" />
      <label @dblclick="beginEdit">{{ todo.title }}</label>
      <button class="destroy" @click="deleteTodo(todo.id)"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template"
      v-focus-on="editMode"
      v-model="editTitle"
      @keyup.enter="commitEdit"
      @blur="commitEdit"
      @keyup.esc="cancelEdit"
    />
  </li>
</template>

<script lang="ts">
// See: https://github.com/vuejs/eslint-config-typescript/issues/14
/* eslint-disable no-unused-vars */
import { Todo } from '@/models/todo';
import Vue, { PropType } from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  props: {
    todo: Object as PropType<Todo>,
  },
  data() {
    return {
      editMode: false,
      editTitle: '',
    };
  },
  methods: {
    ...mapActions(['toggleTodo', 'updateTodoTitle', 'deleteTodo']),
    beginEdit() {
      this.editMode = true;
      this.editTitle = this.todo.title;
    },
    cancelEdit() {
      this.editMode = false;
    },
    commitEdit() {
      if (this.editMode) {
        const title = this.editTitle.trim();
        if (title) {
          this.updateTodoTitle({ id: this.todo.id, title });
        } else {
          this.deleteTodo(this.todo.id);
        }
        this.editMode = false;
      }
    },
  },
});
</script>
