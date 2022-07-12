<template>
   <q-input 
        outline 
        label="Due Date"
        class="col"
        :value="dueDate" 
        @input="$emit('update:dueDate', $event)"
    >
        <template v-slot:append>
            <q-icon
                v-if="dueDate"
                name="close"
                @click="$emit('clear')"
                class="cursor-pointer" 
            />
            <q-icon 
                name="event" 
                class="cursor-pointer"
            >
                <q-popup-proxy 
                    cover transition-show="scale" 
                    transition-hide="scale"
                >
                    <q-date
                      :value="dueDate"
                      @input="$emit('update:dueDate', $event)"
                    >
                    <div class="row items-center justify-end">
                        <q-btn 
                            v-close-popup 
                            label="Close" 
                            color="primary" 
                            flat 
                        />
                    </div>
                    </q-date>
                </q-popup-proxy>
            </q-icon>
        </template>
    </q-input>
</template>

<script>
    export default {
        props: ['dueDate']
    }
</script>

<style>

</style>