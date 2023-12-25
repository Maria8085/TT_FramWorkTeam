<script lang="ts">
import apiInstance from '@/api/index.ts';
import Styles from './style.module.scss';
import BaseCardPicture from '@/components/ui/BaseCardPicture/BaseCardPicture.vue';
// import BasePagination from '@/components/ui/BasePagination/BasePagination.vue';
import type { Paint } from '@/types'

export default {
  data() {
    return {
      Styles,
      paintings: [] as Paint[]
    }
  },
  mounted() {
    apiInstance.get('/paintings').then((response) => {
      console.log(response);
      this.paintings = response.data as Paint[]
    }).catch(e => {
      console.log(e);
    })
  },
  components: { BaseCardPicture }
}
</script>

<template>
  <div :class="Styles.pictureList">
    <BaseCardPicture :paint="paint" v-for="paint in paintings" />
  </div>
</template>