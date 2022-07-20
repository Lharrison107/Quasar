<template>
    <q-card>
        <modal-header>
            ~Edit Task~
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
        mixins: [mixinAddEditTask],
        props: ['task', 'id'],
        data() {
            return {
                taskToSubmit: {}
            }
        },
        methods: {
            ...mapActions('tasks', ['updateTask']),
            submitTask() {
                this.updateTask({
                    id: this.id,
                    updates: this.taskToSubmit
                })
                this.$emit('close')
            },
        },
        mounted() {
            this.taskToSubmit = Object.assign({}, this.task)
        }
    }
</script>

<style>

</style>