<template>
  <div class="container">
    <div class="upcoming_page">
      <div class="wrapper_div">
        <div class="content">
          <h4 class="title">
            Welcome in
            <span>{{this.$route.name}}</span> page.
          </h4>
          <h1 class="heading">Coming Soon...</h1>
          <h6 class="text">Content currently not available.</h6>
        </div>
        <div class="contact">
          <span>Feel free to know:</span>
          <SocialList />
        </div>
        <div class="back_btn">
          <router-link to="/" class="custom_btn">Go Back Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialList from "../reusable/SocialList";
export default {
  components: {
    SocialList
  }
};
</script>

<style lang="scss" scoped>
.upcoming_page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  .wrapper_div {
    .content {
      text-align: center;
      padding: 60px 50px;
      box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.2);
      margin-bottom: 30px;
      background: #fff;
      transition: all ease-in-out 0.6s;
      &:hover {
        background: #2fa5eb;
        .title {
          color: #fff;
          span {
            background: #fff;
            color: #2fa5eb;
          }
        }
        .heading {
          color: #fff;
        }
        .text {
          color: #fff;
        }
      }
      .title {
        margin: 0px 0px 12px;
        transition: all ease-in-out 0.6s;
        color: #000;
        span {
          background: #2fa5eb;
          padding: 6px 10px;
          border-radius: 2px;

          color: #fff;
          transition: all ease-in-out 0.6s;
        }
      }
      .heading {
        font-size: 50px;
        margin: 0;
        text-transform: capitalize;
        transition: all ease-in-out 0.6s;
        color: #000;
      }
      .text {
        font-size: 15px;
        margin: 8px 0px 0px;
        letter-spacing: 4px;
        transition: all ease-in-out 0.6s;
        color: #000;
        &:hover {
          color: #fff;
        }
      }
    }
    .contact {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .back_btn {
      padding: 40px 0px;
      text-align: center;
      .custom_btn {
        background: #2fa5eb;
        color: #fff;
      }
    }
  }
}
</style>