<template>
    <q-item
        @click="updateTask({ id: id, updates: { completed: !task.completed }})"
        :class="!task.completed ? 'bg-pink-1' : 'bg-teal-1'"
        v-touch-hold:1000.mouse="showEditTaskModal"
        clickable
        v-ripple
    >
        <q-item-section side top>
        <q-checkbox 
            :value="task.completed"
            class="no-pointer-events"
        />
        </q-item-section>

        <q-item-section>
        <q-item-label
            :class="{ 'text-strike' : task.completed }"
        >
            {{ task.name }}
        </q-item-label>
        </q-item-section>

        <q-item-section
            v-if="task.dueDate"
            side
        >
            <div class="row">
                <div class="column justify-center">
                <q-icon
                    class="q-mr-xs"
                    name="event"
                    size="18px"
                />
                </div>
            <div class="column">
                <q-item-label
                class="row justify-end"
                caption
                >
                {{ task.dueDate | niceDate }}
                </q-item-label>
                <q-item-label
                class="row justify-end"
                caption
                >
                <small>{{ task.dueTime }}</small>
                </q-item-label>
            </div>
            </div>
        </q-item-section>

        <q-item-section side>
            <div class="row">
                <q-btn 
                    @click.stop="showEditTaskModal"
                    flat 
                    round 
                    dense
                    color="primary" 
                    icon="edit" 
                />
                <q-btn 
                    @click.stop="promptToDelete(id)"
                    flat 
                    round 
                    dense
                    color="negative" 
                    icon="delete" 
                />
            </div>
        </q-item-section>

        <q-dialog v-model="showEditTask">
            <EditTask 
                @close="showEditTask = false"
                :task="task"
                :id="id"
            />
        </q-dialog>
    </q-item>
</template>

<script>
import { mapActions } from 'vuex'
import EditTask from './Modals/EditTask.vue'
import { date } from 'quasar'

export default {
    props: ["task", "id"],
    data() {
        return {
            "showEditTask": false
        };
    },
    methods: {
        ...mapActions("tasks", ["updateTask", "deleteTask"]),
        promptToDelete(id) {
            this.$q.dialog({
                title: "Confirm",
                message: "Would you like to delete this task?",
                cancel: true,
                persistent: true
            }).onOk(() => {
                this.deleteTask(id);
            });
        },
        showEditTaskModal() {
            this.showEditTask = true
        }
    },
    components: { EditTask },
    filters: {
        niceDate(value) {
            return date.formatDate(value, 'MMM D')
        }
    }
}
</script>

<style>

</style>