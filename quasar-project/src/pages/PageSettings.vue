<template>
  <q-page padding>
    <q-separator spaced />
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="pink" v-model="show12HourTimeFormat" />
        </q-item-section>
      </q-item>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        show12HourTimeFormat: false
      }
    }
  }
</script>

<style>
  
</style>
