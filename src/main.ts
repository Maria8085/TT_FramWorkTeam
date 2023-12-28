import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const clickOutside = {
  beforeMount: (el: any, binding: any) => {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted: (el: any) => {
    document.removeEventListener('click', el.clickOutsideEvent);
  }
};

const app = createApp(App);

app.use(createPinia());
app.directive('click-outside', clickOutside);
app.mount('#app');
