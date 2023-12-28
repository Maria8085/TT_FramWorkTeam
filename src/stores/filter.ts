import { defineStore } from 'pinia';

const useFilterStore = defineStore('filterStore', {
  state: () => ({
    authorId: undefined as number | undefined,
    locationId: undefined as number | undefined,
    created_gte: undefined as number | undefined,
    created_lte: undefined as number | undefined,
    title: undefined as string | undefined,
    currantPage: 1 as number,
    limit: 6 as number
  })
});

export default useFilterStore;
