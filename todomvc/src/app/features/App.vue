<script setup>
import './assets/style.css'

import AppHeader from './header/AppHeader.vue'
import AppForm from './form/AppForm.vue'
import AppList from './list/AppList.vue'
import AppFilters from './filters/AppFilters.vue'

import { onMounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('App mounted!')
})

onUpdated(() => {
  console.log('App updated!')
})
</script>

<template>
  <div class="max-w-120 mx-auto m-8 shadow-xl border border-violet-500 rounded-sm p-4">
    <AppHeader name="Matteo Antony" />
    <AppForm />
    <AppList />
    <AppFilters />
  </div>
</template>
