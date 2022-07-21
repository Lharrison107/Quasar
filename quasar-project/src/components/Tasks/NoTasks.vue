<template>
 <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="blue" />
      </template>

      <span class="text-h6">
        No Tasks To Do Today
      </span>

      <template v-slot:action>
        <q-btn
          @click="$root.$emit('showAddTask')"
          flat
          color="blue"
          label="Add Task" />
      </template>
    </q-banner>
  </transition>
</template>

<script>
    export default {
    
    }
</script>

<style>
</style>