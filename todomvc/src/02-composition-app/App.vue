<script setup>
import { ref } from 'vue'

const text = ref('')
const tasks = ref([
  { id: 1, text: 'Learn Vue', completed: true },
  { id: 2, text: 'Look for a job', completed: false },
  { id: 3, text: 'Forget everything' },
])

function handleSubmit() {
  const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
  tasks.value.push({ id: maxId + 1, text: text.value })
  text.value = ''
}

function handleSpanClick(index) {
  tasks.value[index].completed = !tasks.value[index].completed
}

function handleButtonClick(index) {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <h1>My Todo List</h1>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="What next?" autofocus v-model="text" />
    <button>Add</button>
  </form>

  <ul>
    <li v-for="(task, index) of tasks" :key="task.id">
      <span :class="{ completed: task.completed }" @click="handleSpanClick(index)">{{
        task.text
      }}</span>
      &nbsp;
      <button @click="handleButtonClick(index)">x</button>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
