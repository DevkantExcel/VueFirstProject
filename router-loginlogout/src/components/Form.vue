<template>
  <div id="submitForm">
     <section>
          <b-field label="Username">
             <b-input required v-model="username" maxlength="30"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input type="password"
                v-model="password"
                password-reveal>
            </b-input>
        </b-field>
        <button @click="loginClick" :class="{ 'button': true, 'is-full' : true, 'is-loading' : login_progress}">Login</button>
    </section>
</div>
</template>
 
 <script>
 import { mapActions, mapGetters } from "vuex";
 export default {
   name: "Form",
   watch: {
     user: function(val) {
      if (val.username) {
        this.$router.push("profile");
      }
    },
    error_message: function(val) {
      if (val) {
        this.$snackbar.open({
          duration: 5000,
          message:
            "Login failed. " + val.message,
          type: "is-danger",
          position: "is-bottom-left"
        });
      }
    }
  },
  methods: {
    ...mapActions(["login"]),
    loginClick: function() {
      this.login({
        username: this.username,
        password: this.password
      });
    }
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    }),
    login_progress: function() {
      return this.$store.state.login.login_progress;
    },
    error_message: function() {
      return this.$store.state.login.error;
    },
    username: {
      get: function() {
        return this.$store.state.login.username;
       },
       set: function(val) {
         this.$store.commit("updateUsername", val);
       }
     },
     password: {
       get: function() {
         return this.$store.state.login.password;
       },
       set: function(val) {
         this.$store.commit("updatePassword", val);
       }
     }
   }
 };
 </script>
 
 <style>
</style>