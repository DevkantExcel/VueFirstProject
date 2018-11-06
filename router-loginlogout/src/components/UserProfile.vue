<template>
  <div>
    <h1>Welcome {{ showTodo }} </h1>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from "vuex";
export default {
  data(){
    return{
    }
  },
  computed:{
    ...mapGetters({ showTodo:"showTodoStore" })
  }, 
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
</style>
