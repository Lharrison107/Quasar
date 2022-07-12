<template>
    <q-card>
        <q-card-section class="row">
            <div class="text-h6">
                Add Task
            </div>
            <q-space />
            <q-btn
                v-close-popup
                flat 
                round  
                dense
                icon="close" 
            />
        </q-card-section>
        
        <q-form @submit.prevent="submitForm">
            <q-card-section class="q-pt-none">
                <div class="row q-mb-sm">
                    <!-- task name -->
                    <q-input 
                        outlined 
                        v-model="taskToSubmit.name"
                        :rules="[val => !!val || 'Field is required']" 
                        ref="name"
                        label="Task Name" 
                        class="col"
                    /> 
                </div>
                <div class="row q-mb-sm">
                    <!-- task date -->
                    <q-input 
                        outline 
                        label="Due Date"
                        v-model="taskToSubmit.dueDate" 
                    >
                        <template v-slot:append>
                            <q-icon 
                                name="event" 
                                class="cursor-pointer"
                            >
                            <q-popup-proxy 
                                cover transition-show="scale" 
                                transition-hide="scale"
                            >
                                <q-date v-model="taskToSubmit.dueDate">
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
                </div>
                <div class="row q-mb-sm">
                    <!-- task time -->
                    <q-input 
                        outlined 
                        v-model="taskToSubmit.dueTime" 
                        label="Due Time"
                    >
                        <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="taskToSubmit.dueTime">
                                <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                            </q-time>
                            </q-popup-proxy>
                        </q-icon>
                        </template>
                    </q-input>
                </div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn  
                    type="submit"
                    label="save" 
                    color="primary"
                />
            </q-card-actions>
        </q-form>
    </q-card>
</template>

<script>
    export default {
        data() {
            return {
                taskToSubmit: {
                    name: '',
                    dueDate: '',
                    dueTime: '',
                    completed: false
                }
            }
        },
        methods: {
            submitForm() {
                this.$refs.name.validate();
                if(!this.$refs.name.hasError) {
                    this.submitTask()
                }
            },
            submitTask() {
                console.log('submitted')
            }
        }
    }
</script>

<style>

</style>