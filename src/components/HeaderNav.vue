<template>
  <div class="header_nav">
    <div class="container">
      <div class="wrapper_div">
        <h1 class="logo">
          <router-link to="/">ChyMedical</router-link>
        </h1>
        <nav>
          <ul class="nav_area">
            <li class="nav_list">
              <router-link class="nav_item" to="/">Home</router-link>
              <router-link class="nav_item" to="/about-us">About Us</router-link>
              <router-link class="nav_item" to="/contact">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.scrollNavbar();
  },
  methods: {
    scrollNavbar() {
      var header = document.querySelector(".header_nav");
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 70) {
          header.classList.add("menu-fixed", "fade_in_down");
        } else {
          header.classList.remove("menu-fixed", "fade_in_down");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
// fadeInDown Animation code here
.fade_in_down {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
