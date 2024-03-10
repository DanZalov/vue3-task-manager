<script setup lang="ts">
import { useTaskStore, type Task } from '@/stores/tasks'
import { ref } from 'vue'

const emit = defineEmits(['close'])
const props = defineProps<{ taskId: string }>()
const store = useTaskStore()

const newTitle = ref<string>('')

if (props.taskId) {
  newTitle.value = store.getTaskById(props.taskId)?.title || ''
}

const isNew = !props.taskId

const submitForm = () => {
  if (newTitle.value) {
    if (isNew) {
      store.addTask({ title: newTitle.value, id: Date.now().toString() })
    } else {
      store.updateTask({ title: newTitle.value, id: props.taskId })
      emit('close')
    }
    newTitle.value = ''
  }
}
</script>

<template>
  <div class="task">
    <input type="text" v-model="newTitle" placeholder="Название задачи" required />
    <!-- <button type="submit" @click="submitForm">Добавить</button> -->
    <button type="submit" @click="submitForm">{{ isNew ? 'Добавить' : 'Обновить' }}</button>
  </div>
</template>
