<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['close'])
const isVisible = ref(true)

const close = () => {
  emit('close')
}
</script>

<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>

<style>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
