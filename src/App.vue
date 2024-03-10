<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 425px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    max-width: 600px;
  }
}
</style>
