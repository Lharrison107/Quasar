<template>
  <div>
    <listHeader bgColor="bg-pink">~Todo~</listHeader>
    
    <q-list
      v-if="Object.keys(tasksTodo).length"
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