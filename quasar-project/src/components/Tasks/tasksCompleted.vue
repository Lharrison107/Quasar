<template>
    <q-list
      v-if="Object.keys(tasksCompleted).length"
      separator
      bordered
    >
        <task
          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key"
        />
    </q-list>
</template>

<script>
    export default {
        props: ['tasksCompleted'],
        components: {
            'task' : require('components/Tasks/Task.vue').default,
        }
    }
</script>

<style>

</style>