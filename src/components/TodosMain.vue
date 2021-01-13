<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <todos-list />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import TodosList from './TodosList.vue';

export default Vue.extend({
  components: { TodosList },
});
</script>
