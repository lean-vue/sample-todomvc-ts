import Vue from 'vue';

export default Vue.directive('focus-on', (el, binding) => {
  if (binding.value) {
    Vue.nextTick(() => {
      el.focus();
    });
  }
});
