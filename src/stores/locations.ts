import { defineStore } from 'pinia';
import apiInstance from '@/api/index';
import type { Location } from '@/types';

const useLocationsStore = defineStore('locationsStore', {
  state: () => ({
    loader: false,
    locations: [] as Location[]
  }),
  actions: {
    async getLocations() {
      this.loader = true;
      const { data } = await apiInstance.get('/locations');
      this.locations = data;
      this.loader = false;
    }
  }
});

export default useLocationsStore;
