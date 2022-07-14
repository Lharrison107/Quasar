<template>
      <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="blue" />
      </template>
      <span class="text-h6">No Tasks To Do Today</span>
      <template v-slot:action>
       <q-btn
       @click="$root.$emit('showAddTask')"
          flat
          color="blue"
          label="Add Task" />
      </template>
    </q-banner>
</template>

<script>
    export default {
    
    }
</script>

<style>
</style>