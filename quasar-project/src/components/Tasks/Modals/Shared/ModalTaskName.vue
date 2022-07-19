<template>
    <div class="row q-mb-sm">
        <q-input 
            outlined 
            :value="name"
            @input="$emit('update:name', $event)"
            :rules="[val => !!val || 'Field is required']"
            autofocus 
            ref="name"
            v-select-all
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
    </div>
</template>

<script>
import { selectAll } from 'src/directives/directive-select-all.js';

    export default {
        props: ['name'],
        directives: {
            selectAll
        }
    }
</script>

<style>

</style>