<template>
    <q-card-actions align="right">
        <q-btn  
            type="submit"
            label="save" 
            color="primary"
            @click="reloadPage"
        />
    </q-card-actions>
</template>

<script>
    export default {
        methods: {
            reloadPage() {
                window.location.reload()
            }
        }
    }
</script>

<style>

</style>