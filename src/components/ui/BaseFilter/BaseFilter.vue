<script setup lang="ts">
import Styles from './style.module.scss';
</script>

<template>
  <div :class="Styles.filterWrap">
    <input type="text" :class="Styles.filter" placeholder="Это инпут" />
  </div>
</template>
