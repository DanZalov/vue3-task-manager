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

function submitForm() {
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

function escHandler() {
  newTitle.value = ''
  emit('close')
}
</script>

<template>
  <div class="task">
    <input
      type="text"
      class="myinput"
      v-model="newTitle"
      placeholder="Название задачи"
      @keydown.enter="submitForm"
      @keydown.esc="escHandler"
      required
    />
    <button type="submit" class="mybtn" :class="isNew ? 'primary' : 'green'" @click="submitForm">
      {{ isNew ? 'Добавить' : 'Сохранить' }}
    </button>
  </div>
</template>
