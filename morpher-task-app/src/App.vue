<template>
  <div id="app">
    <h1>Morhper Coding Challenge</h1>
    <Counter />
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  },
  methods: {
    updateNumber(number) {
      this.$store.dispatch('updateNumber', number)
    },
  },
  data: function() {
    return {
      connection: null,
    }
  },
  created: function() {
    const self = this;
    this.connection = new WebSocket('ws://localhost:3000')

    this.connection.onmessage = function(event) {
      if (event) {
        const data = JSON.parse(event.data);
        
        if(data.type === 'NUMBER_UPDATE') {
          self.updateNumber(data.value)
        }
      }
    }

    this.connection.onopen = function() {
      console.log("Successfully connected to the echo websocket server...")
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #363636;
  padding: 60px;
  background-color: #fcf7f7;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}
</style>
