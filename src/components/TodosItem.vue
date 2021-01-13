<template>
  <!-- List items should get the class `editing` when editing
             and `completed` when marked as completed -->
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.completed" />
      <label>{{ todo.title }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>

<script lang="ts">
// See: https://github.com/vuejs/eslint-config-typescript/issues/14
/* eslint-disable no-unused-vars */
import { Todo } from '@/models/todo';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    todo: Object as PropType<Todo>,
  },
});
</script>
