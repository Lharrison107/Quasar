import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { LocalStorage, Loading } from "quasar";
import { firebaseAuth } from '../boot/firebase.js';
import { showErrorMessage } from "src/functions/function-show-error-message.js";

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
        Loading.show({message: 'Hold your horses... Important things are happening'})
        createUserWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
            .then(response => {
                console.log('response: ', response)
            })
            .catch(error => {
                showErrorMessage(error.message)
            })
    },
    loginUser({}, payload) {
        Loading.show({message: 'Hold your horses... Important things are happening'})
        signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
            .then(response => {
                console.log('response: ', response)
            })
            .catch(error => {
                showErrorMessage(error.message)
            })
    },
    logoutUser(){
        firebaseAuth.signOut()
    },
    handleAuthStateChange({commit}) {
        firebaseAuth.onIdTokenChanged(user => {
            Loading.hide()
            if(user) {
                commit('setLoggedIn', true)
                LocalStorage.set('loggedIn', true)
                this.$router.push('/').catch(err => {})
            } else {
                commit('setLoggedIn', false)
                LocalStorage.set('loggedIn', false)
                this.$router.replace('/auth').catch(err => {})
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