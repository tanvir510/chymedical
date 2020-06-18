<template>
  <div class="section_heading">
    <h5 class="subtitle">{{subtitle}}</h5>
    <h3 class="title">{{title}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style lang="scss" scoped>
.section_heading {
  text-align: center;
  margin-bottom: 50px;
  .subtitle {
    color: #717f86;
    font-size: 15px;
    margin-bottom: 8px;
    letter-spacing: 1px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .title {
    color: #384047;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 600;
  }
}
</style>