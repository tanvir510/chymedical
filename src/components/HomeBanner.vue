<template>
  <div class="banner">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="(banner, index) in banners">
          <img :src="getBanner(banner.img)" />
          <div class="banner_element">
            <div class="container">
              <div class="banner_content">
                <h3 class="title">{{banner.title}}</h3>
                <h1 class="heading">
                  {{banner.heading}}
                  <span class="bold_text">{{banner.bold}}</span>
                </h1>
                <p class="para">{{banner.para}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-custom-button-prev">
        <span class="prev_btn"></span>
      </div>
      <div class="swiper-custom-button-next">
        <span class="next_btn"></span>
      </div>
    </div>
    <div class="feature_area">
      <HomeSchedule />
    </div>
  </div>
</template>

<script>
import banners from "../json/banner";
import HomeSchedule from "./HomeSchedule";
export default {
  components: {
    HomeSchedule
  },
  data() {
    return {
      banners: banners,
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
@import "../assets/sass/_variables.scss";
// Banner part scss code here
.banner {
  overflow: hidden;
  position: relative;
  .banner_element {
    position: absolute;
    left: 0;
    top: 40%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 9;
    .banner_content {
      max-width: 60%;
      margin: 0 auto;
      text-align: center;
      .title {
        font-size: 20px;
        color: $white;
        margin-bottom: 20px;
      }
      .heading {
        font-size: 36px;
        font-family: $font2;
        color: $white;
        line-height: 26px;
        .bold_text {
          color: $base1;
        }
      }
      .para {
        color: $white;
        line-height: 23px;
      }
    }
  }
}
.feature_area {
  position: absolute;
  bottom: 0;
  z-index: 9;
  width: 100%;
  left: 0;
}
// Swiper slider code here
.swiper-slide {
  overflow: hidden;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  img {
    width: 100%;
    height: auto;
  }
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
