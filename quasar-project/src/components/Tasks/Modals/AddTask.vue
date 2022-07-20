<template>
    <q-card>
        <modal-header>
            ~Add Task~
        </modal-header>
        
        <q-form @submit.prevent="submitForm">
            <q-card-section class="q-pt-none">
                
                <!-- task name -->
                <modal-task-name 
                    :name.sync="taskToSubmit.name"
                    ref="modalTaskName"
                />
                
                <!-- task date -->
                <modal-due-date 
                    :dueDate.sync="taskToSubmit.dueDate"
                    @clear="clearDueDate"
                />
                
                <!-- task time -->
                <modal-due-time 
                    v-if="taskToSubmit.dueDate"
                    :dueTime.sync="taskToSubmit.dueTime"
                />
        
            </q-card-section>

           <modal-buttons />
        </q-form>
    </q-card>
</template>

<script>
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task';
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
        mixins: [mixinAddEditTask],
        methods: {
            ...mapActions('tasks', ['addTask']),
            submitTask() {
                this.addTask(this.taskToSubmit)
                this.$emit('close')
            }
        },
    }
</script>

<style>

</style>