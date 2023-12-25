<script setup lang="ts">
import Styles from './style.module.scss';
import FWFilters from '@/components/FWFilters/FWFilters.vue';
import FWPictureList from '@/components/FWPictureList/FWPictureList.vue';
</script>

<template>
  <main :class="Styles">
    <div class="container">
      <FWFilters />
      <FWPictureList />
    </div>
  </main>
</template>
