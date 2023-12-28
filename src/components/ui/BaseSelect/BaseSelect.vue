<script setup lang="ts">
import Styles from './style.module.scss';

defineProps<{
  placeholder: string;
  options: { value: number; title: string }[];
  default?: number;
  tabindex: number;
}>();
</script>

<script lang="ts">
export default {
  data() {
    return {
      selected: this.default,
      open: false
    };
  },
  methods: {
    clear(e: Event) {
      e.stopPropagation();
      this.$emit('input', undefined);
      this.selected = undefined;
      this.open = false;
    }
  },
  mounted() {
    // this.$emit("input", this.selected);
  }
};
</script>

<template>
  <div :class="Styles.customSelect" :tabindex="tabindex" @blur="open = false">
    <div
      :class="[Styles.selected, open ? Styles.open : '']"
      @keyup="open = !open"
      @click="open = !open"
    >
      <div :class="Styles.selectText">
        {{ options.find((option) => option.value === selected)?.title ?? placeholder }}
      </div>
      <button
        type="button"
        @click="clear"
        :class="[Styles.buttonClose, selected ? Styles.visible : '']"
      />
    </div>
    <div :class="[Styles.items, !open ? Styles.selectHide : '']">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option.value;
          open = false;
          $emit('input', option.value);
        "
        @keyup="
          selected = option.value;
          open = false;
          $emit('input', option.value);
        "
      >
        {{ option.title }}
      </div>
    </div>
  </div>
</template>
