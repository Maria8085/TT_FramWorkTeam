<script setup lang="ts">
import Styles from './style.module.scss';
</script>

<template>
  <div>
    <button @click="prev">
      	Prew
      </button>
      <span style="color:var(--text-primary-color);">Пагинация!!!</span>
      <button @click="next">
      	Next
      </button>
  </div>
</template>
