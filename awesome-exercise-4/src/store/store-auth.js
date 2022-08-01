import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onIdTokenChanged } from "firebase/auth"
import { LocalStorage } from "quasar"
import { FirebaseAuth } from "../boot/firebase.js"
import { showErrorMessage } from "../functions/function-show-error-message.js"


const state = {
    loggedIn: false,
    userEmail: ""
}

const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value
    },
    setUserEmail(state, value) {
        state.userEmail = value
    }
}

const actions = {
	registerUser({}, payload){
        createUserWithEmailAndPassword(FirebaseAuth, payload.email, payload.password)
            .then(response => {
                console.log('response: ', response)
            })
            .catch(error => {
                showErrorMessage(error.message)
            })
    },
    loginUser({}, payload) {
        signInWithEmailAndPassword(FirebaseAuth, payload.email, payload.password)
            .then(response => {
                console.log('response: ', response)
            })
            .catch(error => {
                showErrorMessage(error.message)
            })
    },
    logoutUser(){
        FirebaseAuth.signOut()
    },
    handleAuthStateChange({commit, dispatch}) {
        FirebaseAuth.onIdTokenChanged(user => {
            if(user) {
                const email = user.email
                window.localStorage.setItem('userEmail', email)
                commit('setLoggedIn', true)
                window.localStorage.setItem('loggedIn', true)
                this.$router.push('/')
                dispatch('foods/fbReadData', null, { root: true })
            } else {
                commit('foods/clearFoods', null, {root: true})
                commit('setLoggedIn', false)
                window.localStorage.setItem('userEmail', '')
                window.localStorage.setItem('loggedIn', false)
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