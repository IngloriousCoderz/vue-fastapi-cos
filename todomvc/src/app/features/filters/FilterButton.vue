<script setup>
defineProps(['label', 'selected', 'hidden'])
const emit = defineEmits(['click'])
</script>

<template>
  <a
    :class="{
      'py-1 px-2 cursor-pointer': true,
      'border border-red-500 rounded-md': selected,
      invisible: hidden,
    }"
    @click="emit('click')"
    >{{ label }}</a
  >
</template>
