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
    created: function(){
        console.log('Created!!!!');
    },
    mounted: function(){
        console.log('Mounted!!!!');
    },
    updated: function(){
        console.log('Updated!!!!');
    },
    destroyed: function(){
        console.log('Destroyed!!!');
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
