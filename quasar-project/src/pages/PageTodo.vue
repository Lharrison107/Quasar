<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg ">
      <search class="col"/>
      <sort />
    </div>

    <p 
      v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length"
      class="text-center"
    >
      <i>No search results</i>
    </p>

    <div class="relative-position">

      <noTasks 
        v-if="!Object.keys(tasksTodo).length && !search"
      >
      </noTasks>

      <tasksTodo 
        :tasksTodo="tasksTodo"
        v-if="Object.keys(tasksTodo).length"
      />

      <tasksCompleted 
        :tasksCompleted="tasksCompleted"
        v-if="Object.keys(tasksCompleted).length"
      />

    </div>

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
import { mapGetters, mapState } from 'vuex'

  export default {
    data() {
      return {
        showAddTask: false
      }
    },
    mounted() {
      this.$root.$on('showAddTask', () => {
        this.showAddTask = true
      })
    },
    computed: {
     ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted', 'tasksSorted']),
     ...mapState('tasks', ['search'])
    },
    components: {
      'task' : require('components/Tasks/Task.vue').default,
      'addTask' : require('components/Tasks/Modals/AddTask.vue').default,
      'tasksTodo' : require('components/Tasks/tasksTodo.vue').default,
      'tasksCompleted' : require('components/Tasks/tasksCompleted.vue').default,
      'noTasks' : require('components/Tasks/NoTasks.vue').default,
      'search' : require('components/Tasks/Tools/Search.vue').default,
      'sort' : require('components/Tasks/Tools/Sort.vue').default,
    }
  }
</script>

<style>
  
</style>
