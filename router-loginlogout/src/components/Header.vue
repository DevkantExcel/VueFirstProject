<template>
     <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
             <div class="navbar-brand">
                 <div class="navbar-item">
                     <router-link to="/">VUE</router-link>
                 </div>
             </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                     <a v-if="!isLoggedIn" @click="login" class="button is-white">Login</a> 
                     <a v-if="isLoggedIn" @click="logout" class="button is-white">Logout</a> 
                    </div>
                </div>
            </div>
        </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn"
    })
  },
  methods: {
    ...mapActions({
      dologout: "logout"
    }),
    login: function() {
      this.$router.push("login");
    },
    logout: function() {
      this.dologout();
      this.$router.push("/");
    }
  }
};
 </script>
 
 <style>
</style>