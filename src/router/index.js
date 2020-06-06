import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/Home.vue";
import About from "../views/pages/About.vue";
import Contact from "../views/pages/Contact.vue";
import Emergency from "../views/pages/Emergency.vue";
import TwentyFourHour from "../views/pages/TwentyFourHour.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "About Us",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/emergency",
    name: "Emergency",
    component: Emergency,
  },
  {
    path: "/twenty-four-hour",
    name: "24 Hour Service",
    component: TwentyFourHour,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
