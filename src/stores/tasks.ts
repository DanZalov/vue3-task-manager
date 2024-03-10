import { defineStore } from 'pinia'

export interface Task {
  id: string
  title: string
}

export const useTaskStore = defineStore('task', {
  state: (): { tasks: Task[] } => ({
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]') || []
  }),
  actions: {
    persistToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    addTask(task: Task) {
      this.tasks.push(task)
      this.persistToLocalStorage()
    },
    removeTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
      this.persistToLocalStorage()
    },
    updateTask(updatedTask: Task) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id)
      if (index !== -1) {
        this.tasks[index] = updatedTask
      }
      this.persistToLocalStorage()
    },
    getTaskById(id: string) {
      this.persistToLocalStorage()
      return this.tasks.find((task) => task.id === id)
    }
  }
})
