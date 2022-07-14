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
    search: 'store input'
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
    }
}

const getters = {
    tasksTodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function(key) {
            let task = state.tasks[key]
            if(!task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
    tasksCompleted: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function(key) {
            let task = state.tasks[key]
            if(task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}