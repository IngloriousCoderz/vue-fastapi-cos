<script setup>
import { storeToRefs } from 'pinia'
import { useListStore } from './store/list'

const list = useListStore()
const { tasks } = storeToRefs(list)
const { toggle, remove } = list
</script>

<template>
  <ul>
    <li v-for="(task, index) of tasks" :key="task.id">
      <span :class="{ completed: task.completed }" @click="toggle(index)">{{ task.text }}</span>
      &nbsp;
      <button @click="remove(index)">x</button>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
