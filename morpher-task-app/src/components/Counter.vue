<template id="counter">
  <div>
    <p v-if="busy">Loading...</p>
    <p v-if="!busy && number !== null">Current Number: {{number}}</p>
    <p v-if="!busy && errorMessage">Error: {{errorMessage}}</p>
    <button @click="incrementNumber" :disabled="busy || errorMessage">Increment</button>
  </div>
</template>

<script>
  export default {
      name: 'Counter',
      methods: {
        fetchNumber() {
          this.$store.dispatch('fetchNumber')
        },
        incrementNumber() {
          this.$store.dispatch('incrementNumber')
        }
      },
      computed: {
        busy() {
          return this.$store.getters.busy
        },
        number() {
          return this.$store.getters.number
        },
        errorMessage() {
          return this.$store.getters.errorMessage
        }
      },
      mounted() {
        this.fetchNumber()
      }
  }
</script>

<style scoped src="./Counter.css"></style>
