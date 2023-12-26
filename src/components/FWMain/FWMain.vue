<script setup lang="ts">
import Styles from './style.module.scss';
import FWFiltersList from '@/components/FWFiltersList/FWFiltersList.vue';
import FWPictureList from '@/components/FWPictureList/FWPictureList.vue';
</script>

<template>
  <main :class="Styles">
    <div class="container">
      <FWFiltersList />
      <FWPictureList />
    </div>
  </main>
</template>
