<template>
  <ul class="social_list">
    <li v-for="(social, index) in socials" :key="index">
      <a :href="social.url" target="_blank">
        <i :class="social.name"></i>
      </a>
    </li>
  </ul>
</template>

<script>
import socials from "../../json/social";
export default {
  data() {
    return {
      socials: socials
    };
  }
};
</script>

<style lang="scss" scoped>
.social_list {
  display: flex;
  li {
    margin-left: 8px;
    a {
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      color: #fff;
      display: inline-block;
      background: #107fc9;
      border-radius: 3px;
    }
  }
}
</style>