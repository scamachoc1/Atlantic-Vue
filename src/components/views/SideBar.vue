<template>
  <div class="main-container">
    <div class="side-bar">
      <!--<img class="nav-bar_main-img" src="imgs/Atlantic Globe Green (2).png" alt="main img">-->
      <div class="nav-bar_main-img">
        <img src="../../assets/imgs/main-img.png" alt="main img" />
      </div>
      <div class="nav-bar_items">
        <ul class="nav-bar_list">
          <li class="nav-bar_item">
            <router-link to="/">
              <i class="icon fa-solid fa-house"></i>
            </router-link>
          </li>
          <!--<div class="icon-selector_item-1"></div>-->
          <li class="nav-bar_item">
            <router-link to="/shipments">
              <i class="fa-solid fa-ship icon"></i>
            </router-link>
          </li>
          <li class="nav-bar_item">
            <router-link to="/billing">
              <i class="fa-solid fa-money-bills icon"></i>
            </router-link>
          </li>
          <li class="nav-bar_item">
            <router-link to="/reports">
              <i class="fa-solid fa-chart-simple icon"></i>
            </router-link>
          </li>
          <li class="nav-bar_item">
            <router-link to="/settings">
              <i class="fa-solid fa-sliders icon"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="sub-main">
      <div class="sub-main_2">
        <router-view></router-view>
        <div class="empty"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../../assets/css/sidebar/side-bar.css";

@import "../../assets/css/main.css";
@import "../../assets/css/responsive.css";
</style>