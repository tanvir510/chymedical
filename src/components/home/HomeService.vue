<template>
  <div class="sevice section_padding bg_white">
    <div class="container">
      <SectionHeading title="WHAT WE OFFER" subtitle="OUR OUTSTANDING SERVICES" />
      <div class="service_element">
        <div class="service_item" v-for="(service, index) in services" :key="index">
          <div class="service_thumb">
            <img :src="getImages(service.thumb)" alt="service" />
          </div>
          <div class="service_content">
            <h5 class="title">{{service.title}}</h5>
            <p class="desc">{{service.desc}}</p>
            <div class="read_more_btn">
              <router-link :to="getSlug(service.title)" class="custom_btn">Read More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeading from "../reusable/SectionHeading";
import services from "../../json/service";
export default {
  components: {
    SectionHeading
  },
  data() {
    return {
      services: services
    };
  },
  methods: {
    getImages(thumb) {
      return require(`../../assets/images/service/${thumb}`);
    },
    getSlug(slug) {
      return slug
        .toLowerCase()
        .split(" ")
        .join("-");
    }
  }
};
</script>

<style lang="scss" scoped>
.service_element {
  display: flex;
  flex-wrap: wrap;
  .service_item {
    flex: 33.33%;
    box-sizing: border-box;
    padding: 15px;
    &:hover {
      .service_content {
        &:after {
          width: 100%;
        }
      }
    }

    &:nth-last-child(-3 + n) {
      padding-bottom: 0px;
    }
    .service_thumb {
      display: flex;
      img {
        width: 100%;
      }
    }
    .service_content {
      background: #f9f9f9;
      padding: 25px 20px;
      border-bottom: 2px solid #e9e9e9;
      position: relative;
      &:after {
        position: absolute;
        content: "";
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: #2fa5eb;
        transition: all ease-in-out 0.4s;
      }
      .title {
        font-weight: 600;
        color: #2fa5eb;
        font-size: 18px;
      }
      .desc {
        line-height: 21px;
        color: #717f86;
        font-size: 14px;
      }
      .read_more_btn {
        padding: 15px 0px 0px;
        .custom_btn {
          border: 2px solid #2fa5eb;
          border-radius: 20px;
          color: #2fa5eb;
          background: transparent;
          &:hover {
            background: #2fa5eb;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>