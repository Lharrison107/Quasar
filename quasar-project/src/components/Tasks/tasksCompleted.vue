<template>
    <transition
        appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
    >
        <div :class="{ 'q-mt-lg' : !settings.showTasksInOneList }">
            <listHeader  v-if="!settings.showTasksInOneList" bgColor="bg-teal-13">~Completed~</listHeader>
            <q-list
                separator
                bordered
            >
                <task
                    v-for="(task, key) in tasksCompleted"
                    :key="key"
                    :task="task"
                    :id="key"
                />
            </q-list>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {
        props: ['tasksCompleted'],
        components: {
            'task' : require('components/Tasks/Task.vue').default,
            'listHeader' : require('components/Shared/ListHeader.vue').default,
        },
        computed: {
          ...mapGetters('settings', ['settings'])
        }
    }
</script>

<style>

</style>