<script lang="ts">
import IconChangeTheme from '../../icons/IconChangeTheme.vue';
import Style from './style.module.scss';
type Themes = "dark-theme" | "light-theme"

export default {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme ?? "light-theme");
  },
  data() {
    return {
      Style,
      userTheme: "light-theme",
    };
  },
  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      }
      else {
        this.setTheme("light-theme");
      }
    },
    getTheme(): Themes | null {
      return localStorage.getItem("user-theme") as Themes;
    },
    setTheme(theme: Themes) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    getMediaPreference(): Themes {
      const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (hasDarkPreference) {
        return "dark-theme";
      }
      else {
        return "light-theme";
      }
    },
  },
  components: { IconChangeTheme }
};
</script>

<template>
  <div>
    <input @change="toggleTheme" type="checkbox" id="checkboxTheme" :class="Style.switchCheckbox" />
    <label for="checkboxTheme" :class="Style.switchLabel">
      <IconChangeTheme variant="black" />
    </label>
  </div>
</template>

<style>
.switchCheckbox {
  display: none;
}

.switchLabel {
  align-items: center;
  background: var(--text-primary-color);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);
  position: relative;
  padding: calc(var(--element-size) * 0.1);
  transition: background-color 0.5s ease;
  justify-content: space-between;
  width: var(--element-size);
  z-index: 1;
}

.switchToggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07);
  left: calc(var(--element-size) * 0.07);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switchToggleChecked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}
</style>