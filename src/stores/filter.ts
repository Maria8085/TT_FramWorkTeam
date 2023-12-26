import { defineStore } from 'pinia';

const useFilterStore = defineStore("filterStore", {
  state: () => ({
    authorId: undefined as number | undefined,
    locationId: undefined as number | undefined,
    title: undefined as string | undefined,
  }),
});

export default useFilterStore;
