<script setup lang="ts">
import { useTaskStore, type Task } from '@/stores/tasks'
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import IconPlus from './icons/IconPlus.vue'
import IconSave from './icons/IconSave.vue'

const emit = defineEmits(['close'])
const props = defineProps<{ taskId: string }>()
const store = useTaskStore()

const newTitle = ref<string>('')

if (props.taskId) {
  newTitle.value = store.getTaskById(props.taskId)?.title || ''
}

const isNew = !props.taskId

function submitForm() {
  newTitle.value = newTitle.value.trim()
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
  <div class="task" v-on-click-outside="escHandler">
    <input
      type="text"
      class="myinput"
      v-model="newTitle"
      placeholder="Название задачи"
      @keydown.enter="submitForm"
      @keydown.esc="escHandler"
      required
    />
    <button type="submit" class="mybtn" :class="isNew ? 'green' : 'primary'" @click="submitForm">
      <span class="desktop">{{ isNew ? 'Добавить' : 'Сохранить' }}</span>
      <span class="mobile">
        <IconPlus v-if="isNew" :size="24" />
        <IconSave v-else :size="24" />
      </span>
    </button>
  </div>
</template>

<style scoped>
.desktop {
  display: none;
}

.mobile {
  display: flex;
}

.mybtn.mobile {
  padding: 6px;
}

@media (min-width: 768px) {
  .desktop {
    display: flex;
  }

  .mobile {
    display: none;
  }
}
</style>
