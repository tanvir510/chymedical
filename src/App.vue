<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>
<script>
import Navigation from "./views/Navigation";
export default {
  components: {
    Navigation
  }
};
</script>
<style lang="scss">
@import "./assets/sass/app.scss";
</style>
