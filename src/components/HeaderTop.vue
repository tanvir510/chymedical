<template>
  <div class="header_top">
    <div class="container">
      <div class="wrapper_div">
        <div class="left_content">
          <ul class="contact_info">
            <li>
              <i class="fas fa-map-marker-alt"></i>701 Shadow Ln, Las Vegas, NV 89106
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
          <ul class="social_list">
            <li v-for="social in socials">
              <a :href="social.url" target="_blank">
                <i :class="social.name"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          name: "fab fa-facebook-f",
          url: "https://www.facebook.com"
        },
        {
          name: "fab fa-twitter",
          url: "https://www.twitter.com"
        },
        {
          name: "fab fa-linkedin-in",
          url: "https://www.linkedin.com"
        },
        {
          name: "fab fa-pinterest-p",
          url: "https://www.pinterest.com/"
        },
        {
          name: "fab fa-google-plus-g",
          url: "https://www.google.com"
        }
      ]
    };
  }
};
</script>

<style>
</style>