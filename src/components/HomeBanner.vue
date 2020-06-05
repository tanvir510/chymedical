<template>
  <div class="banner">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="(banner, index) in banners">
          <img :src="getBanner(banner.img)" />
        </div>
      </div>
      <div class="swiper-custom-button-prev">
        <span class="prev_btn"></span>
      </div>
      <div class="swiper-custom-button-next">
        <span class="next_btn"></span>
      </div>
    </div>
  </div>
</template>

<script>
import banners from "../data";
export default {
  data() {
    return {
      banners,
      swiperOption: {
        autoplay: { delay: 3000 },
        loop: true,
        navigation: {
          nextEl: ".swiper-custom-button-next",
          prevEl: ".swiper-custom-button-prev"
        }
        // ...
      }
    };
  },
  mounted() {
    this.mySwiper.slideTo(3, 1000, false);
  },
  methods: {
    getBanner(src) {
      return require("../assets/images/banner/" + src);
    }
  }
};
</script>
<style lang="scss" scoped>
.swiper-slide {
  overflow: hidden;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  img {
    width: 100%;
    height: auto;
  }
}
.banner {
  position: relative;
  overflow: hidden;
}
.swiper-custom-button-prev,
.swiper-custom-button-next {
  position: absolute;
  top: 40%;
  left: 0%;
  transform: translateY(-50%);
  z-index: 9;
  cursor: pointer;
  height: 80px;
  width: 25px;
  background: rgba(0, 0, 0, 0.3);
}
.swiper-custom-button-next {
  left: auto;
  right: 0%;
}
.prev_btn,
.next_btn {
  width: 10px;
  height: 10px;
  box-shadow: -2px 2px 0px rgba(255, 255, 255, 1);
  display: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) rotate(45deg);
}
.next_btn {
  transform: translateY(-50%) rotate(-135deg);
  left: auto;
  right: 50%;
}
</style>
