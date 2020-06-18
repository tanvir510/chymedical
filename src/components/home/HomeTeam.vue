<template>
  <div class="team_area section_padding bg_sky">
    <div class="container">
      <div class="team_wrapper">
        <div class="team_item">
          <h3 class="heading">OUR GREAT TEAM</h3>
          <p class="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae recusandae iste delectus tempore provident aperiam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi neque laudantium, id vero facere quidem!
          </p>
          <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="team_item" v-for="(team, index) in teams" :key="index">
          <div class="team_thumb">
            <img :src="getImage(team.thumb)" alt="Team" />
            <div class="team_contact">
              <SocialList :socials="team.socials" />
            </div>
          </div>
          <div class="team_content">
            <h6 class="name">{{team.name}}</h6>
            <span class="desg">{{team.desg}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teams from "../../json/team";
import SocialList from "../reusable/SocialList";
export default {
  components: {
    SocialList
  },
  data() {
    return {
      teams: teams
    };
  },
  methods: {
    getImage(img) {
      return require("../../assets/images/team/" + img);
    }
  }
};
</script>

<style lang="scss" scoped>
.team_wrapper {
  display: flex;
  flex-wrap: wrap;
  .team_item {
    flex: 25%;
    box-sizing: border-box;
    padding: 10px;
    &:hover {
      .team_thumb {
        &:after {
          transform: scale(1.4);
        }
        .team_contact {
          opacity: 1;
        }
      }
    }
    .heading {
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
    }
    .team_thumb {
      position: relative;
      overflow: hidden;
      display: flex;
      &:after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba($color: #000000, $alpha: 0.4);
        transform: scale(0);
        transition: all ease-in-out 0.6s;
      }
      img {
        width: 100%;
      }
      .team_contact {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9;
        opacity: 0;
        transition: all ease-in-out 0.7s;
      }
    }
    .team_content {
      background: #fff;
      padding: 15px;
      .name {
        font-size: 16px;
        text-transform: uppercase;
        margin-bottom: 5px;
        font-weight: 600;
        color: #384047;
      }
      .desg {
        color: #717f86;
        font-size: 13px;
        text-transform: uppercase;
      }
    }
  }
}
</style>