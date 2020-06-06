<template>
  <div class="header_nav">
    <div class="container">
      <div class="wrapper_div">
        <h1 class="logo">
          <router-link to="/">ChyMedical</router-link>
        </h1>
        <nav>
          <ul class="nav_area">
            <li class="nav_list">
              <router-link class="nav_item" to="/">Home</router-link>
              <router-link class="nav_item" to="/about-us">About Us</router-link>
              <router-link class="nav_item" to="/contact">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
