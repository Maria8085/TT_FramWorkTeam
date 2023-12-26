<script lang="ts">
import usePaintingsStore from '@/stores/paintings';
import useAuthorsStore from '@/stores/autors';
import Styles from './style.module.scss';
import BaseCardPicture from '@/components/ui/BaseCardPicture/BaseCardPicture.vue';
import useLocationsStore from '@/stores/locations';
import useFilterStore from '@/stores/filter';
import type { Paint } from '@/types';
// import BasePagination from '@/components/ui/BasePagination/BasePagination.vue';

export default {
  data() {
    return {
      Styles,
      filtredPaintings: [] as Paint[],
      paintingsStore: usePaintingsStore(),
      authorsStore: useAuthorsStore(),
      locationsStore: useLocationsStore(),
      filterStore: useFilterStore(),
    }
  },
  mounted() {
    this.paintingsStore.getPaintings({});
    this.authorsStore.getAuthors();
    this.locationsStore.getLocations();
  },
  methods: {
    getPaintings() { this.paintingsStore.getPaintings({ authorId: this.filterStore.authorId, q: this.filterStore.title }) }
  },
  watch: {
    'paintingsStore.paintings': function () {
      this.filtredPaintings = this.paintingsStore.paintings.filter(paint => { if (!this.filterStore.locationId) return true; return paint.locationId === this.filterStore.locationId })
    },
    filterStore: {
      handler() {
        this.getPaintings()
      },
      deep: true
    }
  },
  components: { BaseCardPicture }
}
</script>

<template>
  <div :class="Styles.pictureList">
    <BaseCardPicture :paint="paint" v-for="paint in filtredPaintings" />
    <!-- <BasePagination
      :totalPages="10"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    /> -->
  </div>
</template>