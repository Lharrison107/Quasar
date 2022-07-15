<template>
    <q-select
        filled
        class="col q-pl-sm"
        v-model="model"
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
            'Due Date', 'Due Time', 'Name'
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