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
