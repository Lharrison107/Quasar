<template>
	<!--
	Awesome Exercise 2 - Vue.js Lists & Components

	// 1) Create an array for the food items you see on the page. Each object in the array should contain properties for the image url, name, description and deliciousness
	// 2) Create a v-for loop that displays these food items onto the page, with all the data coming from the food array (hint: for the image src, use :src)
	// 3) Add your own food item to the list
	// 4) Create a child component and use it to display each of your items (don't use the components/Solution/Food.vue file)
	// 5) Add unique id's to the food array for each item, and apply these to a :key property on your v-for loop

	-->
  <q-page padding>
  	<div class="q-pa-md row items-stretch">
		<foodCards
			 v-for="(item, index) in foods" 
			:key="item.id"
			:item="item"
			:index="index"
		>
		</foodCards>
  	</div>
  </q-page>
</template>

<script>
	export default {
		data() {
			return {
				foods: [
					{
						id: 1, 
						imgURL: 'https://i.imgur.com/0umadnY.jpg',
						title: 'Burger',
						description: 'A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
						delicousness: 4
					},
					{
						id: 2, 
						imgURL: 'https://i.imgur.com/b9zDbyb.jpg',
						title: 'Pizza',
						description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.',
						delicousness: 5
					},
					{
						id: 3, 
						imgURL: 'https://i.imgur.com/RbKjUjB.jpg',
						title: 'Sprouts',
						description: 'The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds.',
						delicousness: 1
					},
					{
						id: 4, 
						imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xsKd7kO7VMSKjbT7MZ3Qq5Kmt2HvdORC46BFb6w4XoxwKG_X_N56XVtEzHFQcC5ucvk&usqp=CAU',
						title: 'Tacos',
						description: 'The taco is a food everyone should have once in a while.',
						delicousness: 12
					}
				]
			}
		},
		 components: {
			'foodCards' : require('components/food.vue').default
		}
	}
</script>

<style>
	.card {
		flex-basis: 210px;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 5px;
		margin-right: 10px;
		margin-bottom: 10px;
	}
	.card img {
		max-width: 100%;
	}
	.card-content {
		padding: 0 10px;
	}
	h1 {
		font-size: 23px;
	}
	p {
		font-size: 14px;
	}
</style>
