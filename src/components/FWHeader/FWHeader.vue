<script setup lang="ts">
import BaseButtonTheme from '@/components/ui/BaseButtonTheme/BaseButtonTheme.vue';
import Styles from './style.module.scss';
</script>

<template>
  <header>
    <div class="container" :class="Styles.container">
      <div :class="Styles.logoWrap">
        <img src="@/assets/images/Logo.png" alt="" />
      </div>
      <BaseButtonTheme />
    </div>
  </header>
</template>
