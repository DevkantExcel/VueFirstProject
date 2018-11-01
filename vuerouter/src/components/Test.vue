<template>
    <div>
         <button @click="click">Please Click Here page 1 Test vue</button>
         <p>This is Test.vue page first page 1</p>

         <p>Route Id : {{ $route.params.id }} </p> 
    </div>
</template>
<script>
export default {
  name : "Test",
  methods: {
    click: function() {
        this.$router.push('TestNew/2')
    }
  }
}
</script>
<style>
</style>