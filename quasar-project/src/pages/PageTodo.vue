<template>
  <q-page class="q-pa-md">
    <p>Todo Page</p>

     <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ task.name }}</q-item-label>
        </q-item-section>
      </q-item>

  </q-page>
</template>

<script>
import { ref } from 'vue'

  export default {
    data() {
      return {
        tasks: [
           {
              id: 1,
              name: 'Go to store',
              completed: ref(false),
            },
            {
              id: 2,
              name: 'Get bananas',
              completed: ref(false),
            },
            {
              id: 3,
              name: 'Get apples',
              completed: ref(false),
            }
        ]
      }
    }
  }
</script>

<style>
  
</style>
