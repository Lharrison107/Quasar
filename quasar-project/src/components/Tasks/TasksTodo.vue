<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <listHeader bgColor="bg-pink">~Todo~</listHeader>
      
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
    export default {
        props: ['tasksTodo'],
        components: {
            'task' : require('components/Tasks/Task.vue').default,
            'listHeader' : require('components/Shared/ListHeader.vue').default,
        }
    }
</script>

<style>

</style>