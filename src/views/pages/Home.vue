<template>
  <div class="home">
    <HomeBanner />
    <HomeAboutArea />
    <HomeFeatures />
    <HomeService />
    <HomeVideo />
    <HomeContact />
    <HomeTeam />
  </div>
</template>

<script>
import HomeBanner from "../../components/home/HomeBanner";
import HomeAboutArea from "../../components/home/HomeAboutArea";
import HomeFeatures from "../../components/home/HomeFeatures";
import HomeService from "../../components/home/HomeService";
import HomeVideo from "../../components/home/HomeVideo";
import HomeContact from "../../components/home/HomeContact";
import HomeTeam from "../../components/home/HomeTeam";
export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeAboutArea,
    HomeFeatures,
    HomeService,
    HomeVideo,
    HomeContact,
    HomeTeam
  }
};
</script>
