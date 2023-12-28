<script lang="ts">
import IconChangeTheme from '@/assets/icons/IconChangeTheme.vue';
import type { Themes } from '@/types';
import Style from './style.module.scss';

export default {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme ?? 'lightTheme');
  },
  data() {
    return {
      Style,
      userTheme: 'lightTheme'
    };
  },
  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem('userTheme');
      if (activeTheme === 'lightTheme') {
        this.setTheme('darkTheme');
      } else {
        this.setTheme('lightTheme');
      }
    },
    getTheme(): Themes | null {
      return localStorage.getItem('userTheme') as Themes;
    },
    setTheme(theme: Themes) {
      localStorage.setItem('userTheme', theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    getMediaPreference(): Themes {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (hasDarkPreference) {
        return 'darkTheme';
      }
      return 'lightTheme';
    }
  },
  components: { IconChangeTheme }
};
</script>

<template>
  <div>
    <input @change="toggleTheme" type="checkbox" id="checkboxTheme" :class="Style.switchCheckbox" />
    <label for="checkboxTheme" :class="Style.switchLabel">
      <IconChangeTheme :variant="userTheme === 'darkTheme' ? 'white' : 'black'" />
    </label>
  </div>
</template>
