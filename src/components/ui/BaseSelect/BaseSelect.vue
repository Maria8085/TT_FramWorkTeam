<script setup lang="ts">
import Styles from './style.module.scss';
defineProps<{
  placeholder: string,
  options: { value: number, title: string }[]
  default?: number,
  tabindex: number,
}>()
</script>

<script lang="ts">
export default {
  data() {
    return {
      selected: this.default,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ options.find(option => option.value === selected)?.title ?? placeholder }}
      <button @click="selected = undefined; $emit('input', undefined)">X</button>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of options" :key="i" @click="
        selected = option.value;
      open = false;
      $emit('input', option.value);
      ">
        {{ option.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 37px;
  line-height: 35px;
}

.custom-select .selected {
  background-color: var(--background-color-secondary);
  border-radius: 7px;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid var(--accent-color);
  border-radius: 6px 6px 0px 0px;

  &::after {
    transform: rotate(180deg) translateY(5px);
  }
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 17px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: var(--accent-color) transparent transparent transparent;
  transition: all .15s ease-out;
}

.custom-select .items {
  color: var(--accent-color);
  border-radius: 0px 0px 6px 6px;
  overflow: auto;
  border-right: 1px solid var(--accent-color);
  border-left: 1px solid var(--accent-color);
  border-bottom: 1px solid var(--accent-color);
  position: absolute;
  background-color: var(--background-color-secondary);
  left: 0;
  right: 0;
  z-index: 1;
  max-height: 200px;

  &::-webkit-scrollbar {
    width: 11px;
    border-right: 10px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    border-right: 10px solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--accent-color);
    border-radius: 10px;
    border-right: 10px solid transparent;
  }
}

.custom-select .items div {
  color: var(--accent-color);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #808080;
}

.selectHide {
  display: none;
}
</style>
