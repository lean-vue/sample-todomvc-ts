<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todos-input @create="createTodo" />
    </header>
    <todos-main />
    <todos-actionbar />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import TodosActionbar from './TodosActionbar.vue';
import TodosInput from './TodosInput.vue';
import TodosMain from './TodosMain.vue';

export default Vue.extend({
  components: { TodosMain, TodosInput, TodosActionbar },
  methods: {
    ...mapActions(['createTodo']),
  },
  mounted() {
    this.$store.dispatch('initialize');
  },
});
</script>
