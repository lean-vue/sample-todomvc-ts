import { DirectiveHook, nextTick } from 'vue';

const focusOn: DirectiveHook = (el, binding) => {
  if (binding.value) {
    nextTick(() => {
      el.focus();
    });
  }
};

export default focusOn;
