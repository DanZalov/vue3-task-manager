<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/tasks">Список Задач</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: start;
}

nav a.router-link-exact-active {
  color: white;
  background-color: #10c44c;
}

nav a.router-link-exact-active:hover {
  color: white;
  background-color: #0b9439;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: #0b9439;
  border-radius: 10px;
}

nav a:hover {
  background-color: rgb(236, 247, 235);
}

nav a:first-of-type {
  border: 0;
  margin-right: 10px;
}

@media (min-width: 1024px) {
  nav {
    width: 100%;
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding-bottom: 1rem;
  }
}
</style>
