<template>
  <q-page padding>

    <button
      style="position: absolute; right: 10px"
      @click="counter++"
    >
      {{ counter }}
    </button>

    <input 
      v-model="message" 
      @keyup.esc="clearMessage" 
      @keyup.enter="alertMessage"
      v-autofocus
      :style="errorStyle"
    />

    <button @click="clearMessage">
      Clear
    </button>

    <div>
      {{ message.length }}
    </div>

    <h5 
      class="border-grey" 
      v-if="message.length"
    >

      {{ message }}
    </h5>

    <h6 v-else>
      No Message Entered
    </h6>

    <hr>
    
    <p>
      Uppercase Message: {{ messageToUppercase }} 
    </p>
    <p>
      Lowercase Message: {{ message | messageToLowercase }}
    </p>

  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: 'I Love Vue.js so hard!',
      counter: 0
    }
  },
  computed: {
    messageToUppercase() {
      return this.message.toUpperCase()
    },
    errorStyle() {
      if(this.message.length > 22) {
        return {
              'border' : '3px solid red',
              'color' : 'red',
              'background' : 'pink'
        }
      }
    }
  },
  methods: {
    clearMessage() {
      this.message = ''
    },
    alertMessage() {
      alert(this.message)
    }
  },
  filters: {
    messageToLowercase(value) {
      return value.toLowerCase()
    }
  },
  directives: {
    autofocus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  beforeCreate() {
    console.log('before create')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('before mount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('before update')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('before destroy')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>

<style>
  input, button {
    font-size: 30;
  }
  .border-grey{
    border: 1px solid grey;
  }
  .error{
    border: 3px solid red;
    color: red;
    background: pink;
  }
</style>
