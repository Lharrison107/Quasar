import Vue from 'vue';
import { uid, Notify } from 'quasar';
import { firebaseDB, firebaseAuth } from 'src/boot/firebase';
import { ref, onChildAdded, onChildChanged, onChildRemoved, set, update, remove } from "firebase/database"
import { showErrorMessage } from 'src/functions/function-show-error-message';

const state = {
    tasks: {
    //    'ID1': {
    //         id: 1,
    //         name: 'Call transmission guy',
    //         completed: false,
    //         dueDate: '2022/08/12',
    //         dueTime: '14:01'
    //    },
    //    'ID2': {
    //         id: 2,
    //         name: 'Do Dishes',
    //         completed: false,
    //         dueDate: '2022/08/13',
    //         dueTime: '14:20'
    //     },
    //     'ID3': {
    //         id: 3,
    //         name: 'Make Dinner',
    //         completed: false,
    //         dueDate: '2022/08/12',
    //         dueTime: '14:45'
    //     },
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
    },
    clearTasks(state) {
        state.tasks = {}
    }
}

const actions = {
    updateTask({ dispatch }, payload) {
        dispatch('fbUpdateTask', payload)
    },
    deleteTask({ dispatch }, id) {
        dispatch('fbDeleteTask', id)
    },
    addTask({ dispatch }, task) {
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        dispatch('fbAddTask', payload)
    },
    setSearch({ commit }, value) {
        commit('setSearch', value)
    },
    setSort({ commit }, value) {
        commit('setSort', value)
    },
    firebaseReadData({ commit }) {
        let user = firebaseAuth.currentUser.uid
        // user = 'ySsaFJm52TOCn41O6QTWSbISKl13'
        const userTasks = ref(firebaseDB, 'tasks/' + user)
  
        onChildAdded( userTasks, snapshot => {
            console.log(snapshot)
            const task = snapshot.val()
                const payload = {
                    id: snapshot.key,
                    task: task
            }
            commit('addTask', payload)
        })

        onChildChanged(userTasks, snapshot => {
            console.log(snapshot)
            const task = snapshot.val()
                const payload = {
                    id: snapshot.key,
                    updates: task
            }
            commit('updateTask', payload)
        })

        onChildRemoved(userTasks, snapshot => {
            const taskID = snapshot.key
            commit('deleteTask', taskID)
        })
            
    },
    fbAddTask({}, payload) {
        let user = firebaseAuth.currentUser.uid
        // user = 'ySsaFJm52TOCn41O6QTWSbISKl13'
        const taskRef = ref(firebaseDB, 'tasks/' + user + '/' + payload.id)

        set(taskRef, payload.task).then(error => {
            if(error) {
                showErrorMessage(error.message)    
            } else {
                Notify.create({
                    message: 'Task sucessfully added',
                    type: 'positive'
                })
            }
        })
    },
    fbUpdateTask({}, payload) {
        let user = firebaseAuth.currentUser.uid
        // user = 'ySsaFJm52TOCn41O6QTWSbISKl13'
        const taskRef = ref(firebaseDB, 'tasks/' + user + '/' + payload.id)
        console.log(payload)
        update(taskRef, payload.updates).then(error => {
            if(error) {
                showErrorMessage(error.message)    
            } else {
                let keys = Object.keys(payload.updates)
                if(!(keys.includes('completed') && keys.length === 1)) {
                    Notify.create({
                    message: 'Task sucessfully updated',
                    type: 'positive'
                })
                }
            }
        })
    },
    fbDeleteTask({}, id) {
        let user = firebaseAuth.currentUser.uid
        // user = 'ySsaFJm52TOCn41O6QTWSbISKl13'
        const taskRef = ref(firebaseDB, 'tasks/' + user + '/' + id)
        remove(taskRef, id).then(error => {
            if(error) {
                showErrorMessage(error.message)    
            } else {
                Notify.create({
                    message: 'Task sucessfully deleted',
                    type: 'positive'
                })
            }
        })
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