<template>
  <div class="hello">
    <form @submit.prevent>
      <!-- <input type="text" v-model="todo" >  -->
      <p>Todo List Using Vuex</p>
      <div class="columns customWidth" >
        <div class="column is-11">
          <b-input placeholder="AddItem" v-model="todo" rounded></b-input> 
        </div>
        <div class="column">
          <button class="button is-success is-rounded" @click="addItem" > add </button>
        </div>
      </div>
       
      </form>
      <!-- <ul>
        <li v-for="(item, index) in showTodo" :key="index">
          {{ item }}
          <button @click="delThis(index)">Delete this</button>
        </li>
      </ul>  -->

<table v-show="showTodo.length" class="table customWidthTable is-hoverable">
    <thead>
      <tr>
        <th>#</th>
        <th>Item</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in showTodo" :key="index" >
        <td>#</td>
        <td>
          {{ item }}
        </td>
        <td>
          <a @click="delThis(index)" class="button is-danger is-small">Delete</a>
          </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
//buefy css files
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
// buefy css files

import { mapGetters, mapActions } from "vuex";
export default {
  name: 'HelloWorld',
  data(){
    return{
      todo: null
    }
  },
  computed:{
    ...mapGetters({ showTodo:"showTodoStore" })
  },
  methods: {
    ...mapActions(['add','delete']),
    addItem: function(){
      if(this.todo !== null && this.todo !== '') {
      this.add(this.todo)
      this.todo = null
      }
    },
    delThis: function(index){
      this.delete(index)
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.customWidth {
  width: 85%;
  margin: 0 auto;
}
.customWidthTable {
   width: 50%;
   margin: 0 auto;
}
</style>
