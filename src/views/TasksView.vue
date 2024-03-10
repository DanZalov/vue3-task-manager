<script setup lang="ts">
import { useTaskStore, type Task } from '@/stores/tasks'
import TaskForm from '@/components/TaskForm.vue'
import { ref } from 'vue'

const store = useTaskStore()
const form = ref({ show: false, id: '' })

function deleteTask(id: string) {
  store.removeTask(id)
}

function openForm(id: string) {
  form.value.show = true
  form.value.id = id
  setTimeout(() => {
    const inputs = document.querySelectorAll('input')
    inputs[inputs.length - 1].focus()
  })
}
</script>

<template>
  <div>
    <h1>Список задач</h1>
    <TaskForm taskId="" />
    <hr />
    <ul>
      <li v-for="task in store.tasks" :key="task.id">
        <TaskForm
          v-if="form.show && form.id === task.id"
          :taskId="task.id"
          @close="form.show = false"
        />
        <span v-else @click="openForm(task.id)">{{ task.title }}</span>
        <button
          class="danger"
          v-show="!(form.show && form.id === task.id)"
          @click="deleteTask(task.id)"
        >
          Удалить
        </button>
      </li>
    </ul>
  </div>
</template>
