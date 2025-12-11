<script>
export default {
  name: 'App',

  data() {
    return {
      text: '',
      tasks: [
        { id: 1, text: 'Learn Vue', completed: true },
        { id: 2, text: 'Look for a job', completed: false },
        { id: 3, text: 'Forget everything' },
      ],
    }
  },

  methods: {
    // handleInput(event) {
    //   this.text = event.target.value
    // },

    handleSubmit() {
      const maxId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0
      this.tasks.push({ id: maxId + 1, text: this.text })
      this.text = ''
    },

    handleSpanClick(index) {
      this.tasks[index].completed = !this.tasks[index].completed
    },

    handleButtonClick(index) {
      this.tasks.splice(index, 1)
    },
  },
}
</script>

<template>
  <h1>My Todo List</h1>
  <form @submit.prevent="handleSubmit">
    <!-- <input type="text" placeholder="What next?" autofocus :value="text" @input="handleInput" /> -->
    <input type="text" placeholder="What next?" autofocus v-model="text" />
    <button :disabled="!text">Add</button>
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
