import Vue from 'vue';
import { uid } from 'quasar';

const state = {
    tasks: {
       'ID1': {
            id: 1,
            name: 'Call transmission guy',
            completed: false,
            dueDate: '2022/08/12',
            dueTime: '14:01'
       },
       'ID2': {
            id: 2,
            name: 'Do Dishes',
            completed: false,
            dueDate: '2022/08/13',
            dueTime: '14:20'
        },
        'ID3': {
            id: 3,
            name: 'Make Dinner',
            completed: false,
            dueDate: '2022/08/12',
            dueTime: '14:45'
        }, 
        'ID4': {
			name: 'Go to shop',
			completed: false,
			dueDate: '2022/08/17',
			dueTime: '18:30'
		},
		'ID5': {
			name: 'Get bananas',
			completed: false,
			dueDate: '2022/08/17',
			dueTime: '14:00'
		},
		'ID6': {
			name: 'Get apples',
			completed: false,
			dueDate: '2022/08/17',
			dueTime: '16:00'
		},
		'ID7': {
			name: 'Clean out car',
			completed: false,
			dueDate: '2022/08/12',
			dueTime: '18:30'
		},
		'ID8': {
			name: 'Get hair dye',
			completed: false,
			dueDate: '2022/08/13',
			dueTime: '14:00'
		},
		'ID9': {
			name: 'Return dress',
			completed: false,
			dueDate: '2022/07/21',
			dueTime: '16:00'
		},
		'ID10': {
			name: 'Finish baby yoda outfit',
			completed: false,
			dueDate: '2022/08/12',
			dueTime: '18:30'
		},
		'ID11': {
			name: 'Get yarn',
			completed: false,
			dueDate: '2022/08/13',
			dueTime: '14:00'
		},
		'ID12': {
			name: 'Crochet heart pannels',
			completed: false,
			dueDate: '2022/08/14',
			dueTime: '16:00'
		},
		'ID13': {
			name: 'Crochet heart pannels',
			completed: false,
			dueDate: '2022/08/16',
			dueTime: '18:30'
		},
		'ID14': {
			name: 'Crochet heart pannels',
			completed: false,
			dueDate: '2022/08/18',
			dueTime: '14:00'
		},
		'ID15': {
			name: 'Crochet heart pannels',
			completed: false,
			dueDate: '2022/08/20',
			dueTime: '16:00'
		},
		'ID16': {
			name: 'Crochet heart pannels',
			completed: false,
			dueDate: '2022/08/22',
			dueTime: '18:30'
		},
		'ID17': {
			name: 'Harmony speech therapy',
			completed: false,
			dueDate: '2022/08/13',
			dueTime: '14:00'
		},
		'ID18': {
			name: 'Harmony OT',
			completed: false,
			dueDate: '2022/08/14',
			dueTime: '16:00'
		},
        'ID19': {
			name: 'Store',
			completed: false,
			dueDate: '2018/07/03',
			dueTime: '14:00'
		},
		'ID20': {
			name: 'Sleep',
			completed: false,
			dueDate: '2022/08/14',
			dueTime: '16:00'
		}
    },
    search: '',
    sort: 'name'
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id)
    },
    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    },
    setSearch(state, value) {
        state.search = value
    },
    setSort(state, value) {
        state.sort = value
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    },
    setSearch({ commit }, value) {
        commit('setSearch', value)
    },
    setSort({ commit }, value) {
        commit('setSort', value)
    }
}

const getters = {
    tasksTodo: (state, getters) => {
        let tasksFiltered = getters.tasksFiltered
        let tasks = {}
        Object.keys(tasksFiltered).forEach(function(key) {
            let task = tasksFiltered[key]
            if(!task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
    tasksCompleted: (state, getters) => {
        let tasksFiltered = getters.tasksFiltered
        let tasks = {}
        Object.keys(tasksFiltered).forEach(function(key) {
            let task = tasksFiltered[key]
            if(task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
    tasksFiltered: (state, getters) => {
        let tasksSorted = getters.tasksSorted
        let tasksFiltered = {}
        if(state.search) {
            Object.keys(tasksSorted).forEach(function(key) {
                let task = tasksSorted[key]
                let taskNameToLowerCase = task.name.toLowerCase()
                let searchToLowerCase = state.search.toLowerCase()
                if(taskNameToLowerCase.includes(searchToLowerCase)) {
                    tasksFiltered[key] = task
                }
            })
            return tasksFiltered
        }
        return tasksSorted
    },
    tasksSorted: (state) => {
        let tasksSorted = {}
        let keysOrdered = Object.keys(state.tasks)
        let tasks = state.tasks
        
        keysOrdered.sort((a, b) => {
            let taskAProp = tasks[a][state.sort].toLowerCase()
            let taskBProp = tasks[b][state.sort].toLowerCase()

            if(taskAProp > taskBProp) return 1

            else if(taskAProp < taskBProp) return -1

            else return 0
        })

        keysOrdered.forEach((key) => {
            tasksSorted[key] = state.tasks[key]
        })

        return tasksSorted
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}