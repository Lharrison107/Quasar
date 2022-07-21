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
            v-html="$options.filters.searchHighlight(task.name, search)"
        >
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
                <small>{{ taskDueTime }}</small>
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
import { mapState, mapActions, mapGetters } from 'vuex'
import { date } from 'quasar'
import EditTask from 'components/Tasks/Modals/EditTask.vue';

export default {
    props: ["task", "id"],
    data() {
        return {
            "showEditTask": false
        };
    },
    components: { EditTask },
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
    filters: {
        niceDate(value) {
            return date.formatDate(value, 'MMM D')
        },
       searchHighlight(value, search) {
			if (search) {
				let searchRegExp = new RegExp(search, 'ig')
				return value.replace(searchRegExp, (match) => {
					return '<span class="bg-info">' + match + '</span>'
				})
			}
			return value
		}
    },
    computed: {
        ...mapState('tasks', ['search']),
        ...mapGetters('settings', ['settings']),
        taskDueTime() {
           if (this.settings.show12HourTimeFormat) {
				return date.formatDate(this.task.dueDate + ' ' + this.task.dueTime, 'h:mm A')
			}
			return this.task.dueTime
        },
    }
}
</script>

<style>

</style>