<script setup lang="ts">
import Styles from './style.module.scss';
import BaseCardPicture from '@/components/ui/BaseCardPicture/BaseCardPicture.vue';
import BasePagination from '@/components/ui/BasePagination/BasePagination.vue';
</script>

<template>
  <div :class="Styles.pictureList">
    <BaseCardPicture />
    <BaseCardPicture />
    <BaseCardPicture />
    <BaseCardPicture />
    <BaseCardPicture />
    <BaseCardPicture />
    <BaseCardPicture />
    <BaseCardPicture />
    <BasePagination />
  </div>
</template>