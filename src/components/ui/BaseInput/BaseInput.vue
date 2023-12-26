<script setup lang="ts">
import Styles from './style.module.scss';
</script>

<template>
  <div :class="Styles.inputWrap">
    <input type="text" :class="Styles.input" placeholder="Это инпут" @change="$emit('onChange', $event.target)" />
  </div>
</template>
