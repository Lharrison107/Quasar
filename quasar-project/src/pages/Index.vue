<template>
  <q-page padding>
    <li
      v-for="(task, index) in tasks"
    >
      <div>{{ task.name }} {{ index }}</div>
      <hr>
      <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
      <button @click="deleteTask(index)">X</button>
    </li>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        tasks : [
          {
            name: 'Got to shop',
            dueDate: '2022/27/09',
            dueTime: '14:00'
          },
          {
            name: 'Get bananas',
            dueDate: '2022/27/10',
            dueTime: '14:00'
          },
          {
            name: 'Get apples',
            dueDate: '2022/27/19',
            dueTime: '14:00'
          }
        ]
      }
    },
    methods: {
      deleteTask(index) {
        this.tasks.splice(index, 1)
      }
    }
  }
</script>

<style>
  
</style>
