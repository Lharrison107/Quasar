<template>
    <q-input 
        outlined 
        :value="name"
        @input="$emit('update:name', $event)"
        :rules="[val => !!val || 'Field is required']"
        autofocus 
        ref="name"
        label="Task Name" 
        class="col"
    >
        <template v-slot:append>
            <q-icon
                v-if="name"
                name="close"
                @click="$emit('update:name', '')"
                class="cursor-pointer" 
            />
        </template>
    </q-input>
</template>

<script>
    export default {
        props: ['name']
    }
</script>

<style>

</style>