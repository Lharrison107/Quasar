<template>
  <q-page class="q-pa-md">
    <tasksTodo 
      :tasksTodo="tasksTodo"
      v-if="Object.keys(tasksTodo).length"
    />

    <tasksCompleted 
      :tasksCompleted="tasksCompleted"
      v-if="Object.keys(tasksCompleted).length"
    />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
      @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <addTask @close="showAddTask = false"/>
    </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        showAddTask: false
      }
    },
    computed: {
     ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
    },
    components: {
      'task' : require('components/Tasks/Task.vue').default,
      'addTask' : require('components/Tasks/Modals/AddTask.vue').default,
      'tasksTodo' : require('components/Tasks/tasksTodo.vue').default,
      'tasksCompleted' : require('components/Tasks/tasksCompleted.vue').default
    }
  }
</script>

<style>
  
</style>
