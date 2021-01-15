<template>
  <input v-model="title" @keyup.enter="createTodo" v-focus-on="true"
    class="new-todo" placeholder="What needs to be done?" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return { title: '' };
  },
  methods: {
    createTodo() {
      this.title = this.title.trim();
      if (this.title) {
        this.$emit('create', this.title);
        this.title = '';
      }
    },
  },
});
</script>
