<template>
  <div id="app">
    <NavBar/>
    <VideoHeader />
    <Avantaje />
    <Galerie />
    <Facilitati />
    <CaseOcupate />
    <Etape />
    <Contact />
    <Footer/>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import VideoHeader from './VideoHeader.vue'
import Facilitati from './Facilitati.vue'
import Etape from './Etape.vue'
import Contact from './Contact.vue'
import Avantaje from './Avantaje.vue'
import Galerie from './Galerie.vue'
import CaseOcupate from './CaseOcupate.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    VideoHeader,
    Facilitati,
    Etape,
    Contact,
    Avantaje,
    Galerie,
    CaseOcupate,
  }
}
</script>

<style>

</style>
