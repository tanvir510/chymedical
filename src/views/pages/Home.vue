<template>
  <div class="home">
    <HomeBanner />
    <HomeAboutArea />
    <HomeFeatures />
    <HomeService />
  </div>
</template>

<script>
import HomeBanner from "../../components/home/HomeBanner";
import HomeAboutArea from "../../components/home/HomeAboutArea";
import HomeFeatures from "../../components/home/HomeFeatures";
import HomeService from "../../components/home/HomeService";
export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeAboutArea,
    HomeFeatures,
    HomeService
  }
};
</script>
