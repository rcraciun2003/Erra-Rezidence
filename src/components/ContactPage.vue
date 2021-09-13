<template>
  <div id="app">
    <NavBar/>    
    <Avantaje />
    <Galerie />
    <Facilitati />
    <Etape />
    <ContactMap />
    <Footer/>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import ContactMap from './ContactMap.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    ContactMap,
  }
}
</script>

<style>

</style>
