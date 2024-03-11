import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export interface Task {
  id: string
  title: string
}

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: useLocalStorage('tasks', [] as Task[])
  }),
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
    },
    removeTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    updateTask(updatedTask: Task) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id)
      if (index !== -1) {
        this.tasks[index] = updatedTask
      }
    },
    getTaskById(id: string) {
      return this.tasks.find((task) => task.id === id)
    }
  }
})
