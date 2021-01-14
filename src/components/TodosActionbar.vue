<template>
  <footer v-show="hasTodos" class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ activeCount }}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button v-if="hasCompletedTodos" class="clear-completed">Clear completed</button>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters(['activeCount', 'hasTodos', 'hasCompletedTodos']),
  },
});
</script>
