<template>
  <div>
    <router-view></router-view>
    <!--############## hero #############  -->
    <!-- <section class="hero is-warning">
      <div class="hero-body customHeightHero">
        <div class="container">
          <h1 class="title stickLeft">
            VUE
          </h1>
            <a class="button is-light stickRight">Login</a>
        </div>
      </div>
    </section> -->
    <!--############## hero #############  -->

        <!--############## info #############  -->
   <section class="section isViolet">
    <div class="container">
      <h1 class="title isCenter">Login Page</h1>
    </div>
  </section>
    <!--############## info #############  -->

    <!-- ################# Form ################# -->
    <form @submit.prevent>
      <section class="section hasWidth">
    <div class="field">
      <label class="label">User Name</label>
      <div class="control">
        <input v-model="userName" class="input" type="text" placeholder="User Name">
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input v-model="password" class="input" type="password" placeholder="Password">
      </div>
    </div>
    <a class="button" @click="login">Login</a>
      </section>
    </form>
    <!-- ################# Form ################# -->
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex';
export default {
  name: 'UserLogin',
  data: function() {
    return {
      userName: null,
      password: null,
    }
  },
  methods:{
    ...mapActions(['add']),
    login: function() {
      if(this.userName !== null && this.password !== null && this.userName !== '' && this.password !== '') {
        // console.log ('logged in successfully')
        this.add(this.userName)
        this.$router.push('UserProfile')

      }
    }
  }
}
</script>

<style>
#app {
  
}
.container {
  /* position: relative; */
}
.customHeightHero {
    height: 71px;
    padding: 1em 0em;
}
.stickLeft {
  position: absolute;
  left: 0
}
.stickRight {
  position: absolute;
  right: 0
}
.isCenter {
  text-align: center;
  background: #7957d5;
  color: #fff;
}
.isViolet {
  background: #7957d5;  
}
.hasWidth {
  width: 50%;
  margin: 0 auto;
}
</style>
