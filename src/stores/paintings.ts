import { defineStore } from 'pinia';
import apiInstance from '@/api/index';
import type { Paint } from '@/types';

const usePaintingsStore = defineStore('paintingsStore', {
  state: () => ({
    loader: false,
    paintings: [] as Paint[],
    total: undefined as number | undefined
  }),
  actions: {
    async getPaintings(props: {
      authorId?: number;
      q?: string;
      locationId?: number;
      created_gte?: number;
      created_lte?: number;
      _limit?: number;
      _page?: number;
    }) {
      let queries = Object.entries(props)
        .filter(([_, value]) => Boolean(value))
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
      if (queries) {
        queries = `?${queries}`;
      }

      this.loader = true;
      const res = await apiInstance.get(`/paintings${queries}`);
      this.total = res.headers['x-total-count'];
      this.paintings = res.data;
      this.loader = false;
    }
  }
});

export default usePaintingsStore;
