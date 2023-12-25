<script setup lang="ts">
import Styles from './style.module.scss';
import BaseFilter from '@/components/ui/BaseFilter/BaseFilter.vue';
</script>

<template>
  <div :class="Styles.filterList">
    <BaseFilter />
    <BaseFilter />
    <BaseFilter />
    <BaseFilter />
  </div>
</template>