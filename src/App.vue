<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <test></test> -->
    <List></List>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import test from './components/test.vue';
import List from './components/List.vue';
export default {
  name: 'app',
  components: {
    // HelloWorld, 
    // test
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
