<template>
   <div id="app">
       <p>type something.....</p>
        <i>press enter</i>
        <br />

        <form v-on:submit.prevent>
            <input type="text" v-on:keypress="submit" v-model="name" autofocus>
        </form>
        
        <ul>
            <li v-for="(item, index) in data" v-bind:key="index" >{{ item }}</li>
        </ul>
   </div>
</template>

<script>
export default {
    name: 'test',
    data: function(){
        return {
           name: '',
           data:[],            
        }
    },
    methods: {
        submit: function(e) {
            if (e.keyCode === 13) {
            this.data.push(this.name);
            this.name = "";
            }
        }
    }
};
</script>

<style>
    #app li {
        border: 1px solid green;
        padding: 5px;
    }
</style>
