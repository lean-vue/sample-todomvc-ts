<template>
  <ul class="todo-list">
    <todos-item/>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import TodosItem from './TodosItem.vue';

export default Vue.extend({
  components: { TodosItem },
});
</script>
