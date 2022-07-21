<template>
    <transition
        appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
    >
        <div class="q-mt-lg">
            <listHeader bgColor="bg-teal-13">~Completed~</listHeader>
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
    export default {
        props: ['tasksCompleted'],
        components: {
            'task' : require('components/Tasks/Task.vue').default,
            'listHeader' : require('components/Shared/ListHeader.vue').default,
        }
    }
</script>

<style>

</style>