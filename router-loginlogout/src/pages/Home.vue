<template>
    <div id="home">
        <Header />
        <section class="hero is-primary is-medium">
        <div class="hero-body">
            <div class="container has-text-centered">
            <h1 class="title">
                HOME PAGE
            </h1>
            <h2 class="subtitle hasHeight">
                Vue Router, API, vue Persisted State
            </h2>
            </div>
        </div>
        </section>
    </div>
</template>
<script>
import Header from './../components/Header'
export default {
  name: "Home",
  components: {
      Header
  }
};
</script>
<style>
.hasHeight {
    height: 40vh;
}
</style>