<template>
    <q-select
        v-model="sortBy"
        :options="options"
        label="Sort by"
        class="col q-ml-sm"
        filled
        stack-label
        emit-value
        map-options
    />
</template>

<script>
    import { mapState, mapActions} from 'vuex';

    export default {
        data () {
            return {
                options: [
                    {
                        value: 'dueDate',
                        label: 'Date'
                        
                    },
                    {
                        value: 'dueTime',
                        label: 'Time'
                    },
                    {
                        value: 'name',
                        label: 'Name'
                    }
                ],
            }
        },
        computed: {
            ...mapState('tasks', ['sort']),
            sortBy: {
                get() {
                    return this.sort
                },
                set(value) {
                    this.setSort(value)
                }
            }
        },
        methods: {
            ...mapActions('tasks', ['setSort']),
        }
    }
</script>

<style scoped>
    .q-select {
        flex: 0 0 112px;
    }
</style>