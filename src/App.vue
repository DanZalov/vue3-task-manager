<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="wrapper">
    <Navigation />

    <RouterView />
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    place-items: flex-start;
  }
}
</style>
