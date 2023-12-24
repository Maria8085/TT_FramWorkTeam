<script setup lang="ts">
import Styles from './style.module.scss';
import FWFilters from '@/components/FWFilters/FWFilters.vue';
import FWPictureList from '@/components/FWPictureList/FWPictureList.vue';
</script>

<template>
  <main :class="Styles">
    <FWFilters />
    <FWPictureList />
  </main>
</template>
