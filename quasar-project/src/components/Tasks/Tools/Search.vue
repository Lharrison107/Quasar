<template>
    <div>
        <q-input
          v-model="searchField"
          @keyup.esc="searchField = ''"
          v-select-all
          label="Search"
          class="col"
          outlined
        >

        <template v-slot:append>
            <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
            <q-icon name="search" />
        </template>

        </q-input>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { selectAll } from 'src/directives/directive-select-all.js';

    export default {
        computed: {
            ...mapState('tasks', ['search']),
            searchField: {
                get() {
                    return this.search
                },
                set(value) {
                    this.setSearch(value)
                }
           } 
        },
        methods: {
            ...mapActions('tasks', ['setSearch'])
        },
         directives: {
            selectAll
        }
    }
</script>

<style>

</style>