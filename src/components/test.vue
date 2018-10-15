<template>
   <div id="app">
       <p>{{ message }}</p>
       <input type="text" v-model="message">
   </div>
</template>

<script>
export default {
    name: 'test',
    data: function(){
        return {
            message: ''
        }
    }
};
</script>

<style>

</style>
