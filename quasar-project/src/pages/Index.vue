<template>
  <q-page padding>
    <input v-model="message"/>
    <button @click="clearMessage">Clear</button>
    <h5>{{ message }}</h5>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: 'I Love Vue.js so hard!'
    }
  },
  methods: {
    clearMessage() {
      this.message = ''
    }
  }
}
</script>

<style>
</style>
