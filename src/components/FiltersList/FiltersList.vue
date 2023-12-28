<script lang="ts">
import BaseInput from '@/components/ui/BaseInput/BaseInput.vue';
import BaseSelect from '@/components/ui/BaseSelect/BaseSelect.vue';
import BaseSelectDate from '@/components/ui/BaseSelectDate/BaseSelectDate.vue';
import Styles from './style.module.scss';
import useAuthorsStore from '@/stores/autors';
import useFilterStore from '@/stores/filter';
import useLocationsStore from '@/stores/locations';

export default {
  data() {
    return {
      Styles,
      authorsStore: useAuthorsStore(),
      locationsStore: useLocationsStore(),
      filterStore: useFilterStore()
    };
  },
  mounted() {
    this.authorsStore.getAuthors();
    this.locationsStore.getLocations();
  },
  methods: {
    setAuthor(authorId: number) {
      this.filterStore.authorId = authorId;
    },
    setAge({ dateStart, dateEnd }: { dateStart: number; dateEnd: number }) {
      this.filterStore.created_gte = Number(dateStart);
      this.filterStore.created_lte = Number(dateEnd);
    },
    setLocation(locationId: number) {
      this.filterStore.locationId = locationId;
    },
    setTitle(title: { value: string }) {
      this.filterStore.title = title.value;
    }
  },
  components: { BaseInput, BaseSelect, BaseSelectDate }
};
</script>

<template>
  <div :class="Styles.filterList">
    <BaseInput @on-change="setTitle" placeholder="Name" />
    <BaseSelect
      placeholder="Author"
      :options="authorsStore.authors.map((author) => ({ title: author.name, value: author.id }))"
      :tabindex="1"
      @input="setAuthor"
    />
    <BaseSelect
      placeholder="Locations"
      :options="
        locationsStore.locations.map((location) => ({
          title: location.location,
          value: location.id
        }))
      "
      :tabindex="2"
      @input="setLocation"
    />
    <BaseSelectDate placeholder="Created" :tabindex="3" @input="setAge" />
  </div>
</template>
