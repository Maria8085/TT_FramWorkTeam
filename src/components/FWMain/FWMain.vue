<script lang="ts">
import FiltersList from '@/components/FiltersList/FiltersList.vue';
import PictureList from '@/components/PictureList/PictureList.vue';
import BasePagination from '@/components/ui/BasePagination/BasePagination.vue';

export default {
  components: { FiltersList, PictureList, BasePagination }
};
</script>

<template>
  <main>
    <div class="container">
      <FiltersList />
      <PictureList />
      <BasePagination />
    </div>
  </main>
</template>
