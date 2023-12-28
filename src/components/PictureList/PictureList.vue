<script lang="ts">
import BaseCardPicture from '@/components/ui/BaseCardPicture/BaseCardPicture.vue';
import usePaintingsStore from '@/stores/paintings';
import useAuthorsStore from '@/stores/autors';
import Styles from './style.module.scss';
import useLocationsStore from '@/stores/locations';
import useFilterStore from '@/stores/filter';

export default {
  data() {
    return {
      Styles,
      paintingsStore: usePaintingsStore(),
      authorsStore: useAuthorsStore(),
      locationsStore: useLocationsStore(),
      filterStore: useFilterStore()
    };
  },
  mounted() {
    this.getPaintings();
    this.authorsStore.getAuthors();
    this.locationsStore.getLocations();
  },
  methods: {
    getPaintings() {
      this.paintingsStore.getPaintings({
        authorId: this.filterStore.authorId,
        locationId: this.filterStore.locationId,
        q: this.filterStore.title,
        created_gte: this.filterStore.created_gte,
        created_lte: this.filterStore.created_lte,
        _limit: this.filterStore.limit,
        _page: this.filterStore.currantPage
      });
    }
  },
  watch: {
    filterStore: {
      handler() {
        this.getPaintings();
      },
      deep: true
    }
  },
  components: { BaseCardPicture }
};
</script>

<template>
  <div :class="Styles.pictureList">
    <h2 :class="Styles.titleList" v-if="paintingsStore.paintings.length < 1">
      The paintings were not found
    </h2>
    <BaseCardPicture
      v-bind:key="paint.id"
      :paint="paint"
      v-for="paint in paintingsStore.paintings"
    />
  </div>
</template>
