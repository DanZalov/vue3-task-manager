<script setup lang="ts">
import VuePicture from '@/components/icons/VuePicture.vue'
import PiniaPicture from '@/components/icons/PiniaPicture.vue'
</script>

<template>
  <h1>Всем привет!</h1>
  <h2>
    <div>
      <span>Это приложение на Vue 3</span>
      <div class="picture">
        <VuePicture />
      </div>
    </div>
    <div>
      <span>с использованием Pinia</span>
      <PiniaPicture />
    </div>
    <div class="last">Переходи на "Список Задач"</div>
  </h2>
</template>

<style scoped>
.picture {
  display: inline-block;
  width: 40px;
  height: 40px;
}

div {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.last {
  margin-top: 20px;
}

span {
  margin-right: 20px;
}
</style>
