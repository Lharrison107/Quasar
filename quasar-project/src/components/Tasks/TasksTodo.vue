<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <listHeader v-if="!settings.showTasksInOneList" bgColor="bg-pink">~Todo~</listHeader>
      
      <q-list
        separator
        bordered
      >
        <task
          v-for="(task, key) in tasksTodo"
          :key="key"
          :task="task"
          :id="key"
        />
      </q-list>
    </div>  
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        props: ['tasksTodo'],
        components: {
            'task' : require('components/Tasks/Task.vue').default,
            'listHeader' : require('components/Shared/ListHeader.vue').default,
        },
        computed: {
          ...mapGetters('settings', ['settings'])
        }
    }
</script>

<style>

</style>