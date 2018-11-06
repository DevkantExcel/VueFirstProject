<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <UserLogin></UserLogin> -->
        <!--############## hero #############  -->
    <section class="hero is-warning">
      <div class="hero-body customHeightHero">
        <div class="container">
          <h1 class="title stickLeft">
            VUE
          </h1>
            <a v-show="!showTodo.length" class="button is-light stickRight" @click="pageUserLogin" >Login</a>
            <a v-show="showTodo.length" class="button is-light stickRight" @click="logout" >LogOut </a>
            
        </div>
      </div>
    </section>
    <router-view></router-view>
    <!--############## hero #############  -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import UserLogin from './components/UserLogin.vue'
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'app',
  data: function () {
    return {
      num: 0
    }
  },
  components: {
    // UserLogin
  },
  methods: {
    ...mapActions(['del']),
    pageUserLogin: function () {
      this.$router.push('UserLogin')
    },
    logout: function() {
      this.del(this.num)
      this.$router.push('/')
    }
  },
  computed:{
    ...mapGetters({ showTodo:"showTodoStore" })
  }, 
}
</script>

<style>
#app {
  
}
</style>
