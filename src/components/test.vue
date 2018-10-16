<template>
   <div id="app">
       <p v-bind:style="{color: color_name.color}" >{{ message }}</p>

       <!-- input type text, reset, caps, select ## buttons -->
       <input type="text" v-model="message">
       <input type="reset" name="clear" v-on:click="reset">
       <button v-on:click="caps" >Capital</button>

       <select v-model="color_name">
           <option v-for="(col, index) in colors" v-bind:key="index" v-bind:value="{color: col}">{{col}}</option>
       </select>
       
   </div>
</template>

<script>
export default {
    name: 'test',
    data: function(){
        return {
            message: '',
            colors: ['red', 'blue', 'black', 'yellow'],
            color_name: {
                color: 'black'
            }
        }
    },
    methods: {
        reset: function(){
            this.message = ''
        },
        caps: function(){
            var cap = this.message.toUpperCase()
            this.message = cap
        }
    }
};
</script>

<style>
</style>
