<template>
  <q-page padding>
    <ul>
      <task v-for="(task, index) in tasks"></task>
    </ul>
  </q-page>
</template>

<script>
  // import Task from 'components/task.vue'
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
    },
    components: {
      // 'task' : Task
      'task' : require('components/task.vue').default
    }
  }
</script>

<style>
  
</style>
