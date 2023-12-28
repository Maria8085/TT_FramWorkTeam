<script lang="ts">
import FiltersList from '@/components/FiltersList/FiltersList.vue';
import PictureList from '@/components/PictureList/PictureList.vue';
import BasePagination from '@/components/ui/BasePagination/BasePagination.vue';
import Styles from './style.module.scss';

export default {
  data() {
    return {
      Styles
    };
  },
  components: { FiltersList, PictureList, BasePagination }
};
</script>

<template>
  <main :class="Styles.main">
    <div class="container">
      <FiltersList />
      <PictureList />
      <BasePagination />
    </div>
  </main>
</template>
