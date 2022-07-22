<template>
  <q-page padding>

    <q-list
      class="q-mb-md"
      bordered
      paddin
    >
      <q-item-label header class="text-pink">Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="pink" v-model="show12HourTimeFormat" />
        </q-item-section>
      </q-item>

       <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show tasks in one list</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="pink" v-model="showTasksInOneList" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered padding class="q-mb-md">
      <q-item-label header class="text-pink">More</q-item-label>
        <q-item
          tag="label"
          v-ripple
          to="/settings/help"
        >
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side >
         <q-icon name="chevron_right" color="pink" />
        </q-item-section>
      </q-item>

      <q-item
        tag="label"
        v-ripple
        @click="emailUs"
      >
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side >
         <q-icon name="chevron_right" color="pink" />
        </q-item-section>
      </q-item>

      <q-item
        tag="label"
        v-ripple
        @click="visitOurWebsite"
      >
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side >
         <q-icon name="chevron_right" color="pink" />
        </q-item-section>
      </q-item>

    </q-list>

  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters('settings', ['settings']),
      show12HourTimeFormat: {
        get() {
          return this.settings.show12HourTimeFormat
        },
        set(value) {
          this.setShow12HourTimeFormat(value)
        }
      },
      showTasksInOneList: {
        get() {
          return this.settings.showTasksInOneList
        },
        set(value) {
          this.setShowTasksInOneList(value)
        }
      }
    },
    methods: {
      ...mapActions('settings', ['setShow12HourTimeFormat', 'setShowTasksInOneList']),
      visitOurWebsite() {
        openURL('https://www.youtube.com/watch?v=yaU8yO968F4&list=RDMMZkqyIoYAXV8&index=8')
      },
      emailUs() {
        window.location.href = 'mailto:Lharrison@diesellaptops.com?subject=Awesome Todo Feedback'
      }
    }
  }
</script>

<style>
  
</style>
