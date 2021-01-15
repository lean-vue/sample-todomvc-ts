<template>
  <section v-show="hasTodos" class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox"
      :checked="allCompleted" @change="syncAllCompletedStates"
    />
    <label for="toggle-all">Mark all as complete</label>
    <todos-list />
  </section>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import TodosList from './TodosList.vue';

export default {
  components: { TodosList },
  computed: {
    ...mapGetters(['hasTodos', 'allCompleted']),
  },
  methods: {
    ...mapActions(['syncAllCompletedStates']),
  },
};
</script>
