import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomE.vue";
import about from "../components/AbouT.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/#",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: about
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;