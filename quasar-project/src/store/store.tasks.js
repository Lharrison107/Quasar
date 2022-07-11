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
    }
    // tasks: [
    //     {
    //        id: 1,
    //        name: 'Go to store',
    //        completed: false,
    //        dueDate: '7/10/25',
    //        dueTime: '14:00'
    //      },
    //      {
    //        id: 2,
    //        name: 'Get bananas',
    //        completed: false,
    //        dueDate: '7/10/23',
    //        dueTime: '14:00'
    //      },
    //      {
    //        id: 3,
    //        name: 'Get apples',
    //        completed: false,
    //        dueDate: '7/10/29',
    //        dueTime: '14:00'
    //      }
    // ]
}

const mutations = {

}


const actions = {

}


const getters = {
    tasks: (state) => {
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