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
import { mapActions, mapMutations } from 'vuex';
import TodosActionbar from './TodosActionbar.vue';
import TodosInput from './TodosInput.vue';
import TodosMain from './TodosMain.vue';

export default Vue.extend({
  components: { TodosMain, TodosInput, TodosActionbar },
  methods: {
    ...mapActions(['createTodo']),
    ...mapMutations(['setVisibility']),
  },
  mounted() {
    this.$store.dispatch('initialize');
    const visibility = this.$route.params.visibility || 'all';
    this.setVisibility(visibility);
  },
  watch: {
    $route(to) {
      const visibility = to.params.visibility || 'all';
      this.setVisibility(visibility);
    },
  },
});
</script>
