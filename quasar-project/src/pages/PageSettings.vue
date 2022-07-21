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
import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters('settings', ['settings']),
      show12HourTimeFormat() {
        return this.settings.show12HourTimeFormat
      }
    }
  }
</script>

<style>
  
</style>
