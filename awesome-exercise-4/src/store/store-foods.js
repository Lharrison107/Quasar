import Vue from 'vue'
import { uid } from 'quasar'
import { FirebaseAuth, FirebaseDB } from '../boot/firebase'
import { ref, onChildAdded, onChildChanged, onChildRemoved, set, update, remove } from 'firebase/database'
import { showErrorMessage } from '../functions/function-show-error-message'

const state = {
	foods: {
		// 'id1': {
		// 	name: 'Burger',
		// 	description: 'A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
		// 	imageUrl: 'https://i.imgur.com/0umadnY.jpg',
		// 	rating: 4
		// },
		// 'id2': {
		// 	name: 'Pizza',
		// 	description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.',
		// 	imageUrl: 'https://i.imgur.com/b9zDbyb.jpg',
		// 	rating: 5
		// },
		// 'id3': {
		// 	name: 'Sprouts',
		// 	description: 'The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds.',
		// 	imageUrl: 'https://i.imgur.com/RbKjUjB.jpg',
		// 	rating: 1
		// }	
	}
}

const mutations = {
	deleteFood(state, id) {
		Vue.delete(state.foods, id)
	},
	addFood(state, payload) {
		Vue.set(state.foods, payload.id, payload.food)
	},
	updateFood(state, payload) {
		Object.assign(state.foods[payload.id], payload.updates)
	},
	clearFoods(state) {
		console.log('foods')
		state.foods = {}
	}
}

const actions = {
	deleteFood({ dispatch }, id) {
		dispatch('fbDeleteFood', id)
	},
	addFood({ dispatch }, food) {
		let newId = uid()
		let payload = {
			id: newId,
			food: food
		}
		dispatch('fbAddFood', payload)
	},
	updateFood({ dispatch }, payload) {
		dispatch('fbUpdateFood', payload)
	},
	fbReadData({commit}) {
		console.log('user change')
		let user = FirebaseAuth.currentUser.uid
		console.log(user)
		const userFoods = ref(FirebaseDB, 'foods/' + user)

		onChildAdded(userFoods, snapshot => {
			console.log('child add')
			const food = snapshot.val()
			const payload = {
				id: snapshot.key,
				food: food
			}
			commit('addFood', payload)
		})

		onChildChanged(userFoods, snapshot => {
			console.log('child change')
			const food = snapshot.val()
			const payload = {
				id: snapshot.key,
				updates: food
			}
			commit('updateFood', payload)
		})

		onChildRemoved(userFoods, snapshot => {
			console.log('child removed')
			const food = snapshot.key
			commit('deleteFood', food)
		})
	},
	fbAddFood({}, payload) {
		let user = FirebaseAuth.currentUser.uid
		const foodRef = ref(FirebaseDB, 'foods/' + user + '/' + payload.id)

		set(foodRef, payload.food).catch(error => {
			if(error.message){
				showErrorMessage(error.message)	
			}
		})
	},
	fbUpdateFood({}, payload) {
		const user = FirebaseAuth.currentUser.uid
		// user = "CPCVTM1xA4RUfQQVcrcVqdyzh1I2"
		const foodRef = ref(FirebaseDB, 'foods/' + user + '/' + payload.id)

		update(foodRef, payload.updates).catch(error => {
			if(error.message){
				showErrorMessage(error.message)	
			}
		})
	},
	fbDeleteFood({}, id) {
		const user = FirebaseAuth.currentUser.uid
		const foodRef = ref(FirebaseDB, 'foods/' + user + '/' + id)

		remove(foodRef, id).catch(error => {
			if(error.message){
				showErrorMessage(error.message)	
			}
		})
	}
}

const getters = {
	foods: (state) => {
		return state.foods
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}