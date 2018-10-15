<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <newcomponent></newcomponent>
    <newfile/>
    <anotherFile></anotherFile>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import newcomponent from './components/newComponent.vue'
import newfile  from  './components/Newfile.vue'
import anotherFile from './components/anotherFile.vue';
export default {
  name: 'app',
  components: {
    // HelloWorld,
    newcomponent,
    newfile,    
    anotherFile
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
