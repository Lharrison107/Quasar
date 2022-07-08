<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-toolbar>
        <q-tabs>
          <q-route-tab 
            icon="list" 
            label="Todo"
            to="/"
            exact 
          />
          <q-route-tab 
            icon="settings" 
            label="Settings"
            to="/settings" 
            exact
          />
        </q-tabs>
      </q-toolbar>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <q-item
          to="/"
          clickable
          exact
        >
          <q-item-section
            avatar
          >
            <q-icon name="list" />
          </q-item-section>

          <q-item-section>
            <q-item-label>ToDo</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          to="/settings"
          clickable
          exact
        >
          <q-item-section
            avatar
          >
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
