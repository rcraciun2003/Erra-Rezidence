import Vue from 'vue'
import App from './App.vue'
import { Plugin } from 'vue-responsive-video-background-player'
import VueRouter from "vue-router";
import routes from "./routes";
import LightGallery from 'vue-light-gallery';
 
Vue.use(LightGallery);
Vue.use(VueRouter);
Vue.use(Plugin);



Vue.config.productionTip = false
const router = new VueRouter({ mode: "history", routes });
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
