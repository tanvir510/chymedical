import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/Home.vue";
import About from "../views/pages/About.vue";
import Contact from "../views/pages/Contact.vue";
import Emergency from "../views/pages/Emergency.vue";
import TwentyFourHour from "../views/pages/TwentyFourHour.vue";
import DentalImplants from "../views/pages/service/DentalImplants.vue";
import Whitening from "../views/pages/service/Whitening.vue";
import Vaccinations from "../views/pages/service/Vaccinations.vue";
import Laboratory from "../views/pages/service/Laboratory.vue";
import MedicalDressage from "../views/pages/service/MedicalDressage.vue";
import EmergencyContraception from "../views/pages/service/EmergencyContraception.vue";

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
  {
    path: "/dental-implants",
    name: "Dental Implants",
    component: DentalImplants,
  },
  {
    path: "/whitening",
    name: "Whitening",
    component: Whitening,
  },
  {
    path: "/vaccinations",
    name: "Vaccinations",
    component: Vaccinations,
  },
  {
    path: "/laboratory",
    name: "Laboratory",
    component: Laboratory,
  },
  {
    path: "/medical-dressage",
    name: "Medical Dressage",
    component: MedicalDressage,
  },
  {
    path: "/emergency-contraception",
    name: "Emergency Contraception",
    component: EmergencyContraception,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
