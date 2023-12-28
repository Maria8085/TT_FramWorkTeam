<script lang="ts">
import DoubleArrow from '@/assets/icons/DoubleArrow.vue';
import ArrowIcon from '@/assets/icons/ArrowIcon.vue';
import Styles from './style.module.scss';
import usePaintingsStore from '@/stores/paintings';
import useFilterStore from '@/stores/filter';

export default {
  data() {
    return {
      Styles,
      paintingsStore: usePaintingsStore(),
      filterStore: useFilterStore()
    };
  },
  computed: {
    totalPages() {
      return Array.from(
        {
          length: Math.ceil(Number(this.paintingsStore.total) / Number(this.filterStore.limit))
        },
        (_, index) => index + 1
      );
    },
    pagesToShow() {
      const min = Math.max(
        0,
        this.filterStore.currantPage === this.totalPages.length
          ? this.filterStore.currantPage - 3
          : this.filterStore.currantPage - 2
      );
      const max = Math.min(
        this.totalPages.length,
        this.filterStore.currantPage === 1 ? 3 : this.filterStore.currantPage + 1
      );
      const a = this.totalPages.slice(min, max);
      return a;
    },
    startDisabled() {
      return Number(this.filterStore.currantPage) <= 1;
    },
    endDisabled() {
      return Number(this.filterStore.currantPage) >= Number(this.totalPages.length);
    }
  },
  watch: {
    'filterStore.title'() {
      this.setPage(1);
    },
    'filterStore.authorId'() {
      this.setPage(1);
    },
    'filterStore.locationId'() {
      this.setPage(1);
    },
    'filterStore.created_gte'() {
      this.setPage(1);
    },
    'filterStore.created_lte'() {
      this.setPage(1);
    }
  },
  methods: {
    setPage(page: number) {
      this.filterStore.currantPage = page;
    }
  },
  components: { DoubleArrow, ArrowIcon }
};
</script>

<template>
  <div :class="Styles.pagination" v-if="pagesToShow.length > 2">
    <button
      type="button"
      @click="filterStore.currantPage = 1"
      :class="[Styles.button, startDisabled ? Styles.buttonDisabled : '']"
    >
      <DoubleArrow />
    </button>
    <button
      type="button"
      @click="filterStore.currantPage = Math.max(filterStore.currantPage - 1, 1)"
      :class="[Styles.button, startDisabled ? Styles.buttonDisabled : '']"
    >
      <ArrowIcon />
    </button>

    <button
      type="button"
      :class="[Styles.button, page === filterStore.currantPage ? Styles.currentPage : '']"
      @click="setPage(page)"
      v-bind:key="page"
      v-for="page in pagesToShow"
    >
      {{ page }}
    </button>

    <button
      type="button"
      @click="filterStore.currantPage = Math.min(filterStore.currantPage + 1, totalPages.length)"
      :class="[Styles.button, endDisabled ? Styles.buttonDisabled : '']"
    >
      <ArrowIcon />
    </button>
    <button
      type="button"
      @click="filterStore.currantPage = totalPages.length"
      :class="[Styles.button, endDisabled ? Styles.buttonDisabled : '']"
    >
      <DoubleArrow />
    </button>
  </div>
</template>
