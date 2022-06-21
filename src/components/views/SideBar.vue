<template>
  <div class="main-container">
    <div class="side-bar">
      <!--<img class="nav-bar_main-img" src="imgs/Atlantic Globe Green (2).png" alt="main img">-->
      <div class="nav-bar_main-img">
        <router-link to="/">
          <img src="../../assets/imgs/main-img.png" alt="main img" />
        </router-link>
      </div>
      <div class="nav-bar_items">
        <ul class="nav-bar_list">
          <li class="nav-bar_item-1">
            <router-link to="/">
              <img class="home-logo" src="../../assets/imgs/house-solid.svg" />
            </router-link>
          </li>
          <!--<div class="icon-selector_item-1"></div>-->
          <li class="nav-bar_item-2">
            <router-link to="/shipments">
              <img class="ship-logo" src="../../assets/imgs/ship-solid.svg" />
            </router-link>
          </li>
          <li class="nav-bar_item-3">
            <router-link to="/billing">
              <img
                class="bills-logo"
                src="../../assets/imgs/money-bills-solid.svg"
              />
            </router-link>
          </li>
          <li class="nav-bar_item-4">
            <router-link to="/reports">
              <img
                class="chart-logo"
                src="../../assets/imgs/chart-simple-solid.svg"
              />
            </router-link>
          </li>
          <li class="nav-bar_item-5">
            <router-link to="/settings">
              <img
                class="settings-logo"
                src="../../assets/imgs/sliders-solid.svg"
              />
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

@import '../../assets/css/main.css';
@import '../../assets/css/responsive.css';
</style>