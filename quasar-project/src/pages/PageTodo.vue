<template>
  <q-page class="q-pa-md">
    <p>Todo Page</p>

     <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{ 'text-strike' : task.completed }"
          >
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon
                class="q-mr-xs"
                name="event"
                size="18px"
              />
            </div>
            <div class="column">
              <q-item-label
                class="row justify-end"
                caption
              >
                {{ task.dueDate }}
              </q-item-label>
              <q-item-label
                class="row justify-end"
                caption
              >
                <small>{{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
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
              dueDate: '7/10/25',
              dueTime: '14:00'
            },
            {
              id: 2,
              name: 'Get bananas',
              completed: ref(false),
              dueDate: '7/10/23',
              dueTime: '14:00'
            },
            {
              id: 3,
              name: 'Get apples',
              completed: ref(false),
              dueDate: '7/10/29',
              dueTime: '14:00'
            }
        ]
      }
    }
  }
</script>

<style>
  
</style>
