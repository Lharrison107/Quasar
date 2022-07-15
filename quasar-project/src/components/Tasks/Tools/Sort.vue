<template>
    <q-select
        filled
        class="col q-pl-sm"
        v-model="model"
        emit-value
        map-options
        :options="options"
        label="Sort By:"
        stack-label 
    />
</template>

<script>
    import { ref } from 'vue'

    export default {
    setup () {
        return {
        model: ref(null),

        options: [
            {
                label: 'Date',
                value: 'dueDate'
            },
            {
                label: 'Name',
                value: 'name'
            },
                {
                label: 'Time',
                value: 'dueTime'
            }
        ],

        }
    }
    }
</script>

<style scoped>
    .q-select {
        flex: 0 0 112px;
    }
</style>