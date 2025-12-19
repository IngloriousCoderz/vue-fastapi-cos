<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const users = ref([
  { id: 1, name: 'Alice', text: 'Alice is a nice lady.' },
  { id: 2, name: 'Bob', text: 'Bob is a handsome guy.' },
])
const user = users.value.find((user) => user.id === Number(route.params.id))
</script>

<template>
  <h1>User {{ user.name }}</h1>

  <p>{{ user.text }}</p>

  <nav>
    <p>
      <RouterLink :to="`/users/${$route.params.id}/profile`" replace>Profile</RouterLink>
      |
      <RouterLink :to="`/users/${$route.params.id}/posts`" replace>Posts</RouterLink>
    </p>
  </nav>

  <RouterView />

  <button @click="$router.back()">Go back</button>
</template>
