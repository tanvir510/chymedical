<template>
  <div class="about_area">
    <div class="container">
      <div class="wrapper_div">
        <div class="about_content">
          <h5 class="title">We are medical center</h5>
          <h3 class="heading">We Have Medicare Plan Options for You!</h3>
          <p
            class="para"
          >Phasellus pretium orci sit amet mi ullamcorper egestas. Sed non mattis metus. Integer vel lorem tincidunt, pharetra eros nec, posuere odio. Nullam eget bibendum sem, venenatis lacinia justo. Duis aliquet lobortis neque, eget volutpat nulla iaculis a.</p>

          <p
            class="para"
          >In hac habitasse platea dictumst. Praesent condimentum justo justo, at ultricies diam accumsan vitae. Donec ac elementum diam. Ut quam orci, posuere quis lacus sed, vehicula rhoncus massa. Nunc volutpat nibh nulla, tincidunt egestas tellus faucibus nec.</p>
          <ul class="about_feature">
            <li class="feature_list" v-for="(feature, index) in features" :key="index">
              <i class="fas fa-arrow-circle-right"></i>
              {{feature.title}}
            </li>
          </ul>
        </div>
        <div class="about_thumb">
          <img src="../../assets/images/about/about-area.png" alt="about-area" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: "Nulla venenatis auctor quam, ac porta lectus dictum in"
        },
        {
          title: "Aliquam sodales nisi sit amet lorem"
        },
        {
          title: "Suspendisse vulputate tellus in justo convallis imperdiet"
        },
        {
          title: "Morbi id lorem consequat, sodales mi non"
        },
        {
          title: "Nulla venenatis auctor quam, ac porta lectus dictum in"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.about_area {
  padding-top: 60px;
  .wrapper_div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    .about_content {
      width: 50%;
      .title {
        color: #384047;
        font-size: 18px;
        margin-bottom: 10px;
      }
      .heading {
        color: #384047;
        font-size: 24px;
        margin-bottom: 15px;
      }
      .para {
        font-size: 14px;
        color: #717f86;
        line-height: 21px;
        margin-bottom: 20px;
      }
      .about_feature {
        padding-left: 30px;
        li {
          color: #384047;
          font-size: 14px;
          padding: 6px 0px;
          i {
            margin-right: 3px;
            color: #2fa5eb;
          }
        }
      }
    }
    .about_thumb {
      width: 50%;
      display: flex;
      img {
        width: 100%;
      }
    }
  }
}
</style>