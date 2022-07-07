<template>
     <li>
      <div>{{ task.name }} {{ index }}</div>
      <hr>
      <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
      <button @click="deleteTask(index)">X</button>
    </li>
</template>

<script>
</script>

<style>
</style>