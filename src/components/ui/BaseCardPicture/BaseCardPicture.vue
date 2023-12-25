<script setup lang="ts">
import Styles from './style.module.scss';
import type { Paint } from '@/types'
defineProps<{
  paint: Paint,
}>()
</script>

<template>
  <div :class="Styles.cardPicture">
    <img :src="'https://test-front.framework.team/' + paint.imageUrl" alt="" :class="Styles.picture">
    <div :class="Styles.pictureInfo">
      <p :class="Styles.infoName">{{ paint.name }}</p>
      <p :class="Styles.infoText"><span :class="Styles.infoTitle">Author:</span> {{ paint.authorId }}</p>
      <p :class="Styles.infoText"><span :class="Styles.infoTitle">Created:</span> {{ paint.created }}</p>
      <p :class="Styles.infoText"><span :class="Styles.infoTitle">Location:</span> {{ paint.locationId }}</p>
    </div>
  </div>
</template>
