<template>
  <div class="feature_area section_padding bg_sky">
    <div class="container">
      <SectionHeading title="Why Choose Us" subtitle="Our Features" />
      <div class="feature_element">
        <div class="feature_item" v-for="(feature, index) in features" :key="index">
          <div class="feature_icon">
            <i :class="feature.icon"></i>
          </div>
          <div class="feature_content">
            <h5 class="title">{{ feature.title }}</h5>
            <p class="desc">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeading from "../../components/reusable/SectionHeading";
import features from "../../json/feature";
export default {
  components: {
    SectionHeading
  },
  data() {
    return {
      features: features
    };
  }
};
</script>

<style lang="scss" scoped>
.feature_area {
  .feature_element {
    display: flex;
    flex-wrap: wrap;
    .feature_item {
      flex: 33.33%;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      margin-bottom: 25px;
      &:nth-child(3n + 1) {
        padding-left: 0px !important;
      }
      &:nth-child(3n) {
        padding-right: 0px !important;
      }
      &:nth-last-child(-n + 3) {
        margin-bottom: 0px;
        padding-bottom: 0px;
      }
      &:hover {
        .feature_icon {
          i {
            box-shadow: 0px 0px 0px 1px #2fa5eb inset;
            color: #2fa5eb;
          }
        }
      }
      .feature_icon {
        margin-right: 20px;
        i {
          font-size: 36px;
          width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          box-shadow: 0px 0px 0px 46px #2fa5eb inset;
          color: #fff;
          border-radius: 4px;
          display: inline-block;
          transition: all ease-in-out 0.4s;
        }
      }
      .feature_content {
        .title {
          font-size: 18px;
          margin-bottom: 8px;
          color: #384047;
        }
        .desc {
          font-size: 14px;
          color: #717f86;
          margin-top: 0px;
          line-height: 21px;
          margin-bottom: 0px;
        }
      }
    }
  }
}
</style>
