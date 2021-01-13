<template>
  <ul class="todo-list">
    <todos-item v-for="t in todos" :key="t.id" :todo="t" />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import TodosItem from './TodosItem.vue';

export default Vue.extend({
  components: { TodosItem },
  computed: {
    ...mapGetters(['todos']),
  },
});
</script>
