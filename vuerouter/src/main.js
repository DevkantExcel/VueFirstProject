import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import store from './store'
import Test from './components/Test.vue';
import TestNew from './components/TestNew.vue';
Vue.use(VueRouter)


Vue.config.productionTip = false

//code for router
const routes = [
  {path: "/:id", component: Test},
  {path: '/TestNew/:id',component: TestNew}
]
const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  router: router,
  render: h => h(App),
  // store,
}).$mount('#app')
