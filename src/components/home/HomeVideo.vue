<template>
  <div class="video_area section_padding bg_sky">
    <div class="container">
      <div class="video_content">
        <h5 class="subtitle">Recommended Video</h5>
        <h4 class="title">Watch our hospital video</h4>
        <p
          class="para"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper egestas. Sed non mattis metus. Integer vel lorem tincidunt, pharetra eros nec, posuere odio. Nullam eget bibendum sem, venenatis lacinia justo. Duis aliquet lobortis neque, eget volutpat nulla iaculis a. Morbi iaculis, quam a facilisis condimentum, risus erat tincidunt dolor, ac interdum lorem urna non augue. In hac habitasse platea dictumst.</p>
        <div class="watch_btn">
          <a
            class="custom_btn"
            href="https://www.youtube.com/embed/rKjX0r4TGxA"
            target="_blank"
          >Watch Video</a>
        </div>
      </div>
    </div>
    <div class="play_area">
      <a class="play_btn" href="https://www.youtube.com/watch?v=rKjX0r4TGxA" target="_blank"></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.video_area {
  position: relative;
  .video_content {
    width: 50%;
    .subtitle {
      font-size: 15px;
      text-transform: uppercase;
      margin-bottom: 10px;
      font-weight: 400;
      color: #2fa5eb;
    }
    .title {
      font-size: 21px;
      text-transform: uppercase;
      margin-bottom: 15px;
      font-weight: 600;
      color: #384047;
    }
    .para {
      font-size: 14px;
      color: #717f86;
      line-height: 25px;
      padding-right: 25px;
    }
    .watch_btn {
      display: inline-block;
      margin-top: 20px;
      .custom_btn {
        background: #2fa5eb;
        border: 2px solid transparent;
        color: #fff;
        &:hover {
          background: transparent;
          color: #2fa5eb;
          border: 2px solid #2fa5eb;
        }
      }
    }
  }
  .play_area {
    background-image: url("../../assets/images/about/bg.jpg");
    background-size: cover;
    height: 100%;
    width: 50%;
    top: 0;
    right: 0;
    position: absolute;
    &:after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 100%;
    }
    .play_btn {
      display: block;
      position: absolute;
      width: 70px;
      height: 70px;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.5);
      background-image: url("../../assets/images/about/play.png");
      background-size: cover;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      z-index: 2;
      cursor: pointer;
    }
  }
}
</style>