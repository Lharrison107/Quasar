import Vue from 'vue';
import { uid } from 'quasar';

const state = {
    tasks: {
       'ID1': {
            id: 1,
            name: 'Go to store',
            completed: false,
            dueDate: '7/10/25',
            dueTime: '14:00'
       },
       'ID2': {
            id: 2,
            name: 'Get bananas',
            completed: false,
            dueDate: '7/10/23',
            dueTime: '14:00'
        },
        'ID3': {
            id: 3,
            name: 'Get apples',
            completed: false,
            dueDate: '7/10/29',
            dueTime: '14:00'
        }, 
    },
    search: ''
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
    tasksFiltered: (state) => {
        let tasksFiltered = {}
        if(state.search) {
            Object.keys(state.tasks).forEach(function(key) {
                let task = state.tasks[key]
                let taskNameToLowerCase = task.name.toLowerCase()
                let searchToLowerCase = state.search.toLowerCase()
                if(taskNameToLowerCase.includes(searchToLowerCase)) {
                    tasksFiltered[key] = task
                }
            })
            return tasksFiltered
        }
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}