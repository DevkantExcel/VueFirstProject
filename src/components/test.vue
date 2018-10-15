<template>
   <div id="app">
       <p>{{ message }}</p>
       <input type="text" v-model="message">
       <input type="reset" name="clear" v-on:click="reset">
       <button v-on:click="caps" >Capital</button>
   </div>
</template>

<script>
export default {
    name: 'test',
    data: function(){
        return {
            message: ''
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
