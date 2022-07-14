<template>
    <div>
        <q-input
          class="col"
          v-model="searchField"
          label="Search"
          outlined
          :dense="dense"
        >

        <template v-slot:append>
            <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
            <q-icon name="search" />
        </template>

        </q-input>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchField: ''
            }
        },
        methods: {
        },
        components: {
        }
    }
</script>

<style>

</style>