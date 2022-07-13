<template>
    <q-banner class="bg-grey-3">

        <template v-slot:avatar>
            <q-icon name="check" color="teal-13" />
        </template>
            No Tasks To Do Today
        <template v-slot:action>
            <q-btn flat color="primary" label="Add Task" />
        </template>
    </q-banner>

</template>

<script>
    export default {
    
    }
</script>

<style>
</style>