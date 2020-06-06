<template>
  <div class="page_header">
    <div class="wrapper_div">
      <div class="page_content">
        <h2 class="title">{{this.$route.name}}</h2>
        <ul class="nav_area">
          <li>
            <router-link to="/" class="home_route">
              <i class="fas fa-home"></i> Home
            </router-link>
          </li>
          <li>
            <span class="back_slash">/</span>
            <span class="current_page">{{this.$route.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page_header {
  background: url("../../assets/images/common/page-header.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 320px;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .wrapper_div {
    display: flex;
    justify-content: center;
    height: inherit;
    align-items: center;
    position: relative;
    z-index: 9;
    .title {
      font-size: 40px;
      color: #fff;
      margin-bottom: 12px;
    }
    .nav_area {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        margin: 0px 5px;
        .home_route {
          color: #fff;
          font-size: 14px;
          font-weight: 500;
        }
        span {
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          &.back_slash {
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>