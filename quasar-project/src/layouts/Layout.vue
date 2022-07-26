<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn 
          flat
          v-if="!loggedIn"
          color="info"
          to="/auth"
          icon-right="account_circle"
          label="Login" 
          class="absolute-right"
        />

        <q-btn 
          flat
          v-else
          @click="logoutUser"
          color="info"
          icon-right="logout"
          label="Logout" 
          class="absolute-right"
        />

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-toolbar>
        <q-tabs>
          <q-route-tab 
            v-for="nav of navs"
            :key="nav.label"
            :icon="nav.icon" 
            :label="nav.label"
            :to="nav.to"
            exact 
          />
        </q-tabs>
      </q-toolbar>
    </q-footer>

    <q-drawer
      :width="250"
      v-model="leftDrawerOpen"
      :breakpoint="767"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
        >
          Navigation
        </q-item-label>
        <q-item
          class="text-grey-4"
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          clickable
          exact
        >
          <q-item-section
            avatar
          >
            <q-icon :name="nav.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Layout',
    data () {
      return {
        leftDrawerOpen: false,
        navs:[
          {
            label: 'Todo',
            icon: 'list',
            to: '/'
          },
          {
            label: 'Settings',
            icon: 'settings',
            to: '/settings'
          }
        ]
      }
    }, 
    computed: {
      ...mapState('auth', ['loggedIn'])
    },
    methods: {
      ...mapActions('auth', ['logoutUser'])
    }
  }
 
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }

  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
</style>
