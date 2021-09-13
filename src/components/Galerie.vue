<template>
<div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <h1 class="text-black text-xxl text-center my-5 sm:text-center sm: text-5xl">Galerie</h1>
        <LightGallery
      :images="images"
      :index="index"
      :disable-scroll="true"
      @close="index = null"
    />
      <ul class="grid col-span-2 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:h-full" style="height: 800px;">

        <li class="content relative lg:col-span-2 md:row-span-2 md:rounded-r-none bg-white rounded-lg shadow overflow-hidden" v-for="(thumb, thumbIndex) in images"
        :key="thumbIndex"
        @click="index = thumbIndex">
              <div class="content-overlay"></div>
              <img class="w-full h-full object-cover object-bottom" :src="thumb.url" alt="Sunset in the mountains">
        </li>           
      </ul>
    </div>
</template>

<script>
import { LightGallery } from 'vue-light-gallery';
export default {
    components: {
      LightGallery,
    },
    data() {
      return {
        images: [
          { title:'Erra Rezidence', url: 'https://imaginicampanii.s3.us-east-2.amazonaws.com/imggalerie12.jpeg' },
          { title:'Erra Rezidence', url: 'https://imaginicampanii.s3.us-east-2.amazonaws.com/imggalerie10.jpeg' },
          { title:'Erra Rezidence', url: 'https://imaginicampanii.s3.us-east-2.amazonaws.com/imggalerie7.jpeg' },
          { title:'Erra Rezidence', url: 'https://imaginicampanii.s3.us-east-2.amazonaws.com/imggalerie11.jpeg' },
          { title:'Erra Rezidence', url: 'https://imaginicampanii.s3.us-east-2.amazonaws.com/imggalerie13.jpeg' },
          { title:'Erra Rezidence', url: 'https://imaginicampanii.s3.us-east-2.amazonaws.com/imggalerie.jpeg' },
        ],
        index: null,
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-overlay {
  background: rgba(0,0,0,0.3);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay{
  opacity: 1;
}
</style>
