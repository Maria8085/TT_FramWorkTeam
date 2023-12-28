<script setup lang="ts">
import Styles from './style.module.scss';

defineProps<{
  placeholder: string;
  type?: 'text' | 'number';
  max?: number;
  min?: number;
  className?: string;
}>();
</script>

<template>
  <div :class="Styles.inputWrap">
    <input
      aria-label="field"
      :max="max"
      :min="min"
      :type="type ?? 'text'"
      :class="[Styles.input, className]"
      :placeholder="placeholder"
      @change="$emit('onChange', $event.target)"
    />
  </div>
</template>
