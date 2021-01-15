<template>
  <div>
    <router-view />
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="https://lean-stack.de">Micha Alt</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>
