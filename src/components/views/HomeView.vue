<template>
  <MsgComponent msg="Good Morning, JR Classics!" />
  <NotifContainerComponent />
  <div class="boxes">
    <router-link to="/shipments">
      <div class="box box-1">
        <div class="box-1_number">
          <p class="box-number">15</p>
        </div>
        <div class="box-1-text">
          <p class="box-text">
            Shipments <br />
            Needing Uploads
          </p>
        </div>
      </div>
    </router-link>
    <router-link to="/shipments">
      <div class=" box box-2">
        <div class="box-2_number">
          <p class="box-number">2</p>
        </div>
        <div class="box-2_text">
          <p class="box-text">
            7501 Forms <br />
            to Review
          </p>
        </div>
      </div>
    </router-link>
    <router-link to="/shipments">
      <div class="box box-3">
        <div class="box-3_number">
          <p class="box-number">2</p>
        </div>
        <div class="box-3_text">
          <p class="box-text">
            Invoices <br />
            Due
          </p>
        </div>
      </div>
    </router-link>
  </div>
  <!--DATA-CHART CONTAINER-->
  <div class="chart-container">
    <header class="data-chart_header">
      <h1 class="chart-text">Shipments</h1>
      <div class="chart_left-container">
        <div class="all-shipments">
          All Shipments
          <button type="all-shipments_button">
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
        <div class="last-30-days">
          Last 30 Days
          <button type="last-30-days_button">
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
    </header>
    <!--Chart table will be imlemented in Vue-->
    <ChartComponent />
  </div>
</template>

<script>
import ChartComponent from "../ChartComponent.vue";
import MsgComponent from "../MsgComponent.vue";
import NotifContainerComponent from "../NotifContainerComponent.vue";

export default {
  components: { ChartComponent, MsgComponent, NotifContainerComponent },
};
</script>

<style>
@import "../../assets/css/home/boxes.css";
@import "../../assets/css/home/chart.css";
@import "../../assets/css/home/msg-container.css";
@import "../../assets/css/home/notif-container.css";

@import "../../assets/css/main.css";
@import "../../assets/css/responsive.css";
</style>