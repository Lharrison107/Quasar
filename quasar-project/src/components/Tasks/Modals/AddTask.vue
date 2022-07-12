<template>
    <q-card>
        <modal-header>
            ~Add Task~
        </modal-header>
        
        <q-form @submit.prevent="submitForm">
            <q-card-section class="q-pt-none">
                <div class="row q-mb-sm">
                    <!-- task name -->
                    <modal-task-name :name.sync="taskToSubmit.name"/>
                </div>
                <div class="row q-mb-sm">
                    <!-- task date -->
                    <modal-due-date 
                        :dueDate.sync="taskToSubmit.dueDate"
                        @clear="clearDueDate"
                    />
                </div>
                <div
                  v-if="taskToSubmit.dueDate"
                  class="row q-mb-sm"
                >
                    <!-- task time -->
                    <q-input 
                        outlined 
                        class="col"
                        v-model="taskToSubmit.dueTime" 
                        label="Due Time"
                    >
                        <template v-slot:append>
                             <q-icon
                                v-if="taskToSubmit.dueTime"
                                name="close"
                                @click="taskToSubmit.dueTime = ''"
                                class="cursor-pointer" 
                            />
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

            <pre>{{ taskToSubmit }}</pre>
        </q-form>
    </q-card>
</template>

<script>
import { mapActions } from 'vuex';
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
            ...mapActions('tasks', ['addTask']),
            submitForm() {
                this.$refs.name.validate();
                if(!this.$refs.name.hasError) {
                    this.submitTask()
                }
            },
            submitTask() {
                this.addTask(this.taskToSubmit)
                this.$emit('close')
            },
            clearDueDate() {
                this.taskToSubmit.dueDate = '';
                this.taskToSubmit.dueTime = '';
            }
        },
        components: {
            'modal-header' : require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
            'modal-task-name' : require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
            'modal-due-date' : require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
        }
    }
</script>

<style>

</style>