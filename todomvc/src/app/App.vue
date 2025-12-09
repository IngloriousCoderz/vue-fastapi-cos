<script setup>
import { ref } from 'vue'

import AppHeader from './AppHeader.vue'
import AppForm from './AppForm.vue'
import AppList from './AppList.vue'

const tasks = ref([
  { id: 1, text: 'Learn Vue', completed: true },
  { id: 2, text: 'Look for a job', completed: false },
  { id: 3, text: 'Forget everything' },
])

function handleSubmit(text) {
  const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
  tasks.value.push({ id: maxId + 1, text })
}

function handleSpanClick(index) {
  tasks.value[index].completed = !tasks.value[index].completed
}

function handleButtonClick(index) {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <AppHeader name="Matteo Antony" />

  <AppForm @submit="handleSubmit" />

  <AppList :tasks="tasks" @spanClick="handleSpanClick" @buttonClick="handleButtonClick" />
</template>
