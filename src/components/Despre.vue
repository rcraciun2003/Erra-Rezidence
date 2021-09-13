<template>
  <div id="app">
    <NavBar/>    
    <Facilitati />
    <Footer/>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import Facilitati from './Facilitati.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    Facilitati,
    }
}
</script>

<style>

</style>
