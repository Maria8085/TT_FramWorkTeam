<script lang="ts">
import Styles from './style.module.scss';
import BaseInput from '@/components/ui/BaseInput/BaseInput.vue';
import BaseSelect from '@/components/ui/BaseSelect/BaseSelect.vue';
import useAuthorsStore from '@/stores/autors';
import useFilterStore from '@/stores/filter';
import useLocationsStore from '@/stores/locations';

export default {
  data() {
    return {
      Styles,
      authorsStore: useAuthorsStore(),
      locationsStore: useLocationsStore(),
      filterStore: useFilterStore(),
    }
  },
  mounted() {
    this.authorsStore.getAuthors();
    this.locationsStore.getLocations();
  },
  methods: {
    setAuthor(authorId: number) {
      this.filterStore.authorId = authorId;
    },
    setLocation(locationId: number) {
      this.filterStore.locationId = locationId;
    },
    setTitle(title: { value: string }) {
      console.log(title.value);
      this.filterStore.title = title.value;
    },
  },
  components: { BaseInput, BaseSelect }
}
</script>


<template>
  <div :class="Styles.filterList">
    <BaseInput @on-change="setTitle" />
    <BaseSelect placeholder="Author"
      :options="authorsStore.authors.map((author) => ({ title: author.name, value: author.id }))" :tabindex="1"
      @input="setAuthor" />
    <BaseSelect placeholder="Locations"
      :options="locationsStore.locations.map((location) => ({ title: location.location, value: location.id }))"
      :tabindex="1" @input="setLocation" />
    <!-- <BaseSelect :options="['go', 'python', 'rust', 'javascript']" class="select" /> -->
  </div>
</template>