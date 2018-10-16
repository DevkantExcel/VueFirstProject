<template>
   <div id="app">
       <p v-bind:style="{color: color_name.color}" >{{ message }}</p>

       <!-- input type text, reset, caps, select ## buttons -->
       <input type="text" v-model="message">
       <input type="reset" name="clear" v-on:click="reset">
       <button v-on:click="caps" >Capital</button>

       <select v-model="color_name">
           <option v-bind:value="{color: 'red'}">Red</option>
           <option v-bind:value="{color: 'blue'}">Blue</option>
           <option v-bind:value="{color: 'black'}">Black</option>
           <option v-bind:value="{color: 'yellow'}">Yellow</option>
       </select>
       
   </div>
</template>

<script>
export default {
    name: 'test',
    data: function(){
        return {
            message: '',
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
