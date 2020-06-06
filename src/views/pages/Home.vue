<template>
  <div class="home">
    <HomeBanner />
    <HomeAboutArea />
    <HomeFeatures />
  </div>
</template>

<script>
import HomeBanner from "../../components/HomeBanner";
import HomeAboutArea from "../../components/HomeAboutArea";
import HomeFeatures from "../../components/HomeFeatures";
export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeAboutArea,
    HomeFeatures
  }
};
</script>
