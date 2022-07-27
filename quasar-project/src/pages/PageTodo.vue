<template>
  <div class="q-pa-md full-width full-height absolute column">

    <template v-if="tasksDownloaded">  
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

      <q-scroll-area class="q-scroll-area-tasks">

        <noTasks 
          v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList"
        >
        </noTasks>

        <tasksTodo 
          :tasksTodo="tasksTodo"
          v-if="Object.keys(tasksTodo).length"
        />

        <tasksCompleted 
          :tasksCompleted="tasksCompleted"
          v-if="Object.keys(tasksCompleted).length"
          class="q-mb-xl"
        />

      </q-scroll-area>

      <!-- i cut out no-pointer-events from this class to get plus sign to work -->
      <div class="absolute-bottom text-center q-mb-lg">
        <q-btn
        @click="showAddTask = true"
          round
          color="primary"
          size="24px"
          icon="add"
        />
      </div>
    </template>

    <template v-else>
      <span class="absolute-center">
        <q-spinner  color="info" size="5.5em"/>
      </span>
    </template>

    <q-dialog v-model="showAddTask">
      <addTask @close="showAddTask = false"/>
    </q-dialog>

  </div>
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
      ...mapGetters('settings', ['settings']),
      ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted', 'tasksSorted']),
      ...mapState('tasks', ['search', 'tasksDownloaded'])
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
  .q-scroll-area-tasks {
    display: flex;
    flex-grow : 1;
  }
</style>
