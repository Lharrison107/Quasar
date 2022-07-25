import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '../boot/firebase.js';

const state = {

  
}

const mutations = {
   
}

const actions = {
    registerUser({}, payload){
        createUserWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
            .then(response => {
                console.log('response: ', response)
            })
            .catch(error => {
                console.log('error message: ', error.message)
            })
    },
    loginUser({}, payload) {
        signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
            .then(response => {
                console.log('response: ', response)
            })
            .catch(error => {
                console.log('error message: ', error.message)
            })
    }
}

const getters = {
   
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}