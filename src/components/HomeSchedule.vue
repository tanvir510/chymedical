<template>
  <div class="container">
    <div class="schedule_element">
      <div class="schedule_item">
        <div class="schedule_heading">
          <h4 class="title">EMERGENCY CASE</h4>
        </div>
        <div class="schedule_content">
          <p
            class="para"
          >Duis tincidunt leo sed dolor lacinia posuere. Nulla eu aliquam enim. Proin et nibh ut massa lacinia lacinia. Duis sit amet dictum nisl, vitae porttitor nunc. Vestibulum ante ipsum.</p>
          <div class="read_more_btn">
            <router-link to="/emergency" class="custom_btn">Read More</router-link>
          </div>
        </div>
      </div>
      <div class="schedule_item">
        <div class="schedule_heading">
          <h4 class="title">24 HOURS SERVICE</h4>
        </div>
        <div class="schedule_content">
          <p
            class="para"
          >Duis tincidunt leo sed dolor lacinia posuere. Nulla eu aliquam enim. Proin et nibh ut massa lacinia lacinia. Duis sit amet dictum nisl, vitae porttitor nunc. Vestibulum ante ipsum.</p>
          <div class="read_more_btn">
            <router-link to="/twenty-four-hour" class="custom_btn">Read More</router-link>
          </div>
        </div>
      </div>
      <div class="schedule_item">
        <div class="schedule_heading">
          <h4 class="title">OPENING HOURS</h4>
        </div>
        <div class="schedule_content">
          <ul class="schedule_time">
            <li>
              <span class="day">Monday – Thursday</span>
              <span class="time">8.00 – 17.00</span>
            </li>
            <li>
              <span class="day">Friday</span>
              <span class="time">9.30 – 17.30</span>
            </li>
            <li>
              <span class="day">Saturday - Sunday</span>
              <span class="time">Closing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.schedule_element {
  display: flex;
  flex-wrap: nowrap;
  .schedule_item {
    width: 33.33%;
    padding: 30px;
    &:nth-child(1) {
      background: #2fa5eb;
    }
    &:nth-child(2) {
      background: #107fc9;
    }
    &:nth-child(3) {
      background: #006fba;
    }
    .schedule_heading {
      .title {
        color: #fff;
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 15px;
      }
    }
    .schedule_content {
      .para {
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        margin-top: 0;
        margin-bottom: 15px;
      }
      .read_more_btn {
        margin-top: 15px;
        display: inline-block;
        .custom_btn {
          border: 2px solid #fff;
          color: #fff;
          &:hover {
            border: 2px solid transparent;
            color: #2fa5eb;
            background: #fff;
          }
        }
      }
      .schedule_time {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          font-size: 13px;
          padding: 13px 0px;
          border-bottom: 1px dashed #fff;
          &:first-child {
            border-top: 1px dashed #fff;
          }
        }
      }
    }
  }
}
</style>    