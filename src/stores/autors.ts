import { defineStore } from 'pinia';
import apiInstance from '@/api/index';
import type { Author } from '@/types';

const useAuthorsStore = defineStore("authorsStore", {
  state: () => ({
    loader: false,
    authors: [] as Author[],
  }),
  actions: {
    async getAuthors() {
      this.loader = true;
      const { data } = await apiInstance.get('/authors');
      this.authors = data;
      this.loader = false;
    },
  },
});

export default useAuthorsStore;
