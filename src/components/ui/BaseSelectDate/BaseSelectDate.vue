<script setup lang="ts">
import BaseInput from '@/components/ui/BaseInput/BaseInput.vue';
import Styles from './style.module.scss';

defineProps<{
  placeholder: string;
  tabindex: number;
}>();
</script>

<script lang="ts">
export default {
  data() {
    return {
      dateStart: undefined as number | undefined,
      dateEnd: undefined as number | undefined,
      open: false
    };
  },
  methods: {
    clear(e: Event) {
      e.stopPropagation();
      this.open = false;
      this.dateStart = undefined;
      this.dateEnd = undefined;
      this.$emit('input', { dateStart: undefined, dateEnd: undefined });
    },
    setAgeGte(title: { value: string }) {
      this.dateStart = Number(title.value);
      this.$emit('input', { dateStart: this.dateStart, dateEnd: this.dateEnd });
    },
    setAgeLte(title: { value: string }) {
      this.dateEnd = Number(title.value);
      this.$emit('input', { dateStart: this.dateStart, dateEnd: this.dateEnd });
    }
  },
  computed: {
    fullAge() {
      if (!this.dateStart && !this.dateEnd) {
        return undefined;
      }
      return (
        (this.dateStart ? `с ${this.dateStart} ` : '') + (this.dateEnd ? `по ${this.dateEnd}` : '')
      );
    }
  },
  components: { BaseInput }
};
</script>

<template>
  <div
    :class="Styles.customSelect"
    :tabindex="tabindex"
    v-click-outside="
      () => {
        open = false;
      }
    "
  >
    <div :class="[Styles.selected, open ? Styles.open : '']" @click="open = !open">
      <div :class="Styles.selectText">{{ fullAge ?? placeholder }}</div>
      <!-- <button @click="clear" :class="[Styles.buttonClose, fullAge && Styles.visible]" /> -->
    </div>
    <div :class="[Styles.items, !open ? Styles.selectHide : Styles.selectShow]">
      <div :class="Styles.wrapItems">
        <BaseInput
          :min="1200"
          :max="2100"
          @on-change="setAgeGte"
          placeholder="from"
          type="number"
          :class-name="Styles.inputDate"
        />
        <div :class="Styles.line"></div>
        <BaseInput
          :min="1200"
          :max="2100"
          @on-change="setAgeLte"
          placeholder="before"
          type="number"
          :class-name="Styles.inputDate"
        />
      </div>
    </div>
  </div>
</template>
