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
    export default {
        props: ['name'],
        directives: {
            selectAll: {
                inserted(el) {
                    let input = el.querySelector('.q-field__native')
                    input.addEventListener('focus', () => {
                        if(input.value.length) {
                           input.select() 
                        } 
                    })
                }
            }
        }
    }
</script>

<style>

</style>