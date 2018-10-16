<template>
   <div id="app">
       <p v-bind:class="{red: isActive}">{{ message }}</p>
       <input type="text" v-model="message">
       <input type="reset" name="clear" v-on:click="reset">
       <button v-on:click="caps" >Capital</button>
       <input type="checkbox" v-on:click="isRed" :checked="isActive" v-model="isActive" /> RED
   </div>
</template>

<script>
export default {
    name: 'test',
    data: function(){
        return {
            message: '',
            isActive: false
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
        },
        isRed: function(){
            // eslint-disable-next-line
            console.log(this.isRed)
        }
    }
};
</script>

<style>
    .red {
        color: red;
    }
</style>
