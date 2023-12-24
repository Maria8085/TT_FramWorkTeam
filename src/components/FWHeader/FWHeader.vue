<script setup lang="ts">
import Styles from './style.module.scss';
import BaseButtonTheme from '@/components/ui/BaseButtonTheme/BaseButtonTheme.vue';
</script>

<template>
  <header>
    <div :class="Styles">
      <img src="@/assets/images/Logo.png" alt="" />
    </div>
    <BaseButtonTheme />
  </header>
</template>
