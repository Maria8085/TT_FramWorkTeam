<script setup lang="ts">
import Styles from './style.module.scss';
</script>

<template>
  <div :class="Styles.cardPicture">
    <div :class="Styles.pictureInfo">
      <p :class="Styles.infoName">Title</p>
      <p :class="Styles.infoText"><span :class="Styles.infoTitle">Author:</span> кто-то</p>
      <p :class="Styles.infoText"><span :class="Styles.infoTitle">Created:</span> когда-то</p>
      <p :class="Styles.infoText"><span :class="Styles.infoTitle">Location:</span> где-то</p>
    </div>
  </div>
</template>
