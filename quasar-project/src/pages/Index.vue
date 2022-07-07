<template>
  <q-page padding>
    <li
      v-for="task in tasks"
    >
      {{ task }}
    </li>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        tasks : ['Go to shop', 'Get bananas', 'Get apples']
      }
    }
  }
</script>

<style>
  
</style>
