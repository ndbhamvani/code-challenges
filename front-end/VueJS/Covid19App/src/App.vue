<template>
<div id="app">
  <img alt="Vue logo" src="./assets/Covid19Illustration-medium.png">
  <Covid19Data />
</div>
</template>

<script>
import Covid19Data from './components/Covid19Data.vue'

export default {
  name: 'App',
  components: {
    Covid19Data
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@700&display=swap');

#app {
  font-family: 'Ubuntu Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: x-large;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
