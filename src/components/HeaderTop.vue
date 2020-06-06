<template>
  <div class="header_top">
    <div class="container">
      <div class="wrapper_div">
        <div class="left_content">
          <ul class="contact_info">
            <li>
              <i class="fas fa-map-marker-alt"></i>701 Shadow Ln, Las Vegas, NV
              89106
            </li>
            <li>
              <i class="fas fa-phone-alt"></i>1 (800) 233-2742
            </li>
            <li>
              <i class="far fa-envelope"></i>info@example.com
            </li>
          </ul>
        </div>
        <div class="right_content">
          <SocialList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialList from "../components/reusable/SocialList";
export default {
  components: {
    SocialList
  }
};
</script>

<style></style>
