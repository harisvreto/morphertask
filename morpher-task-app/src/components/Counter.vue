<template id="counter">
  <div>
    <p class="loader" v-show="busy">Loading...</p>
    <p class="number" v-show="number !== null">{{number}}</p>
    <p class="error" v-show="!busy && errorMessage">Error: {{errorMessage}}</p>
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
