import Vue from 'vue'
import App from './App.vue'
import store from './store' //added explicitely
import VueRouter from 'vue-router' //added explicitly

//import all the pages here as well
import UserLogin from './components/UserLogin.vue';
import UserProfile from './components/UserProfile.vue';


Vue.use(VueRouter) //added explicitly

Vue.config.productionTip = false

//code for router added explicitly
const routes = [
  {path: '/UserLogin', component: UserLogin },
  {path: '/UserProfile', component: UserProfile },
]
const router = new VueRouter({
  routes //short for `routes: routes`
})

new Vue({
  router: router,
  store,
  render: h => h(App),
  //store,
}).$mount('#app')
