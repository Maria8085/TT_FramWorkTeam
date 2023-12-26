import { defineStore } from 'pinia';
import apiInstance from '@/api/index'
import type { Paint } from '@/types'

const usePaintingsStore = defineStore("paintingsStore", {
  state: () => ({
    loader: false,
    paintings: [] as Paint[],
  }),
  actions: {
    async getPaintings(props: { authorId?: number, q?: string }) {
      let queries = Object.entries(props).filter(([key, value]) => Boolean(value)).map(([key, value]) => `${key}=${value}`).join('&')
      if (queries) {
        queries = '?' + queries
      }

      this.loader = true;
      const { data } = await apiInstance.get(`/paintings${queries}`);
      this.paintings = data;
      this.loader = false;
    },
  },
});

export default usePaintingsStore;
