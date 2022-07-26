import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '../boot/firebase.js';

const state = {
    loggedIn: false
  
}

const mutations = {
   setLoggedIn(state, value) {
        state.loggedIn = value
   }
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
    },
    logoutUser(){
        firebaseAuth.signOut()
    },
    handleAuthStateChange({commit}) {
        firebaseAuth.onIdTokenChanged(user => {
            if(user) {
                commit('setLoggedIn', true)
                this.$router.push('/')
            } else {
                commit('setLoggedIn', false)
                this.$router.replace('/auth')
            }
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