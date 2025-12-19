<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleSubmit() {
  localStorage.setItem('auth', 'true')
  router.replace('/secret')
}
</script>

<template>
  <h1>Login</h1>
  <form @submit.prevent="handleSubmit">
    <div>
      <input placeholder="username" />
    </div>
    <div>
      <input type="password" placeholder="password" />
    </div>
    <button>Login</button>
  </form>
</template>
