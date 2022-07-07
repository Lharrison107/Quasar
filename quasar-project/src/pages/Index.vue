<template>
  <q-page padding>
    <ul>
      <task 
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :index="index"
      >
        {{ task.name }}
      </task>
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
            id: 1,
            name: 'Got to shop',
            dueDate: '2022/27/09',
            dueTime: '14:00'
          },
          {
            id: 2,
            name: 'Get bananas',
            dueDate: '2022/27/10',
            dueTime: '14:00'
          },
          {
            id: 3,
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
