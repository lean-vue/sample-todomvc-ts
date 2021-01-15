<template>
  <footer v-show="hasTodos" class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ activeCount }}</strong>
      {{ activeCount === 1 ? 'item' : 'items' }} left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <router-link :class="{ selected: isVisibility('all') }" to="/">
          All
        </router-link>
      </li>
      <li>
        <router-link :class="{ selected: isVisibility('active') }" to="/active">
          Active
        </router-link>
      </li>
      <li>
        <router-link :class="{ selected: isVisibility('completed') }" to="/completed">
          Completed
        </router-link>
      </li>
    </ul>
    <button v-if="hasCompletedTodos" @click="deleteCompletedTodos" class="clear-completed">
      Clear completed
    </button>
  </footer>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['activeCount', 'hasTodos', 'hasCompletedTodos', 'isVisibility']),
  },
  methods: {
    ...mapActions(['deleteCompletedTodos']),
  },
};
</script>
