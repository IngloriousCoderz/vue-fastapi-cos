<script setup>
import { storeToRefs } from 'pinia'

import { useFiltersStore } from './filters'
import FilterButton from './FilterButton.vue'

const filters = useFiltersStore()
const { tasksLeft, selectedFilter, isClearCompletedShown } = storeToRefs(filters)
const { setFilter, clearCompleted } = filters
</script>

<template>
  <footer class="flex justify-between items-center gap-4">
    <span>{{ tasksLeft }} items left</span>
    <span class="filters">
      <FilterButton label="All" :selected="selectedFilter === 'All'" @click="setFilter('All')" />
      <FilterButton
        label="Active"
        :selected="selectedFilter === 'Active'"
        @click="setFilter('Active')"
      />
      <FilterButton
        label="Completed"
        :selected="selectedFilter === 'Completed'"
        @click="setFilter('Completed')"
      />
    </span>

    <FilterButton
      label="Clear completed"
      :hidden="!isClearCompletedShown"
      @click="clearCompleted"
    />
  </footer>
</template>
