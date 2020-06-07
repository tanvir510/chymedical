import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";

// import css style
import "./assets/webfont-medical-icons/css/wfmi-style.css";
import "./assets/css/font.css";
import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
