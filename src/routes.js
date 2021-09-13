
import Acasa from "./components/Acasa.vue";
import Despre from "./components/Despre.vue";
import ContactPage from "./components/ContactPage.vue";

const routes = [
  { path: "/", component: Acasa },
  { path: "/despre", component: Despre },
  { path: "/contact", component: ContactPage },
]

export default routes;
