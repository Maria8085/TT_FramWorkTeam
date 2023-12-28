<script setup lang="ts">
import useAuthorsStore from '@/stores/autors';
import Styles from './style.module.scss';
import type { Paint } from '@/types';
import useLocationsStore from '@/stores/locations';

defineProps<{
  paint: Paint;
}>();

const authorsStore = useAuthorsStore();
const locationStore = useLocationsStore();
</script>

<template>
  <div :class="Styles.cardPicture">
    <img
      :src="'https://test-front.framework.team/' + paint.imageUrl"
      alt=""
      :class="Styles.picture"
    />
    <div :class="Styles.pictureInfo">
      <h2 :class="Styles.infoName">{{ paint.name }}</h2>
      <p :class="Styles.infoText">
        <span :class="Styles.infoTitle">Author:</span>
        {{
          authorsStore.authors.find((author) => {
            return author.id === paint.authorId;
          })?.name
        }}
      </p>
      <p :class="Styles.infoText">
        <span :class="Styles.infoTitle">Created:</span> {{ paint.created }}
      </p>
      <p :class="Styles.infoText">
        <span :class="Styles.infoTitle">Location:</span>
        {{
          locationStore.locations.find((location) => {
            return location.id === paint.locationId;
          })?.location
        }}
      </p>
    </div>
  </div>
</template>
