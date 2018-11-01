<template>
    <div>
         Testing
         <button @click="click">Please Click Here</button>
    </div>
</template>
<script>
export default {
  name : "Test",
  methods: {
    click: function() {
        this.$router.push('TestNew')
    }
  }
}
</script>
<style>
</style>