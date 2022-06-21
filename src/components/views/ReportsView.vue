<template>
  <MsgComponent msg="Reports" />
  <div class="date-filter">
    <!--in this case is "This Month" but it will eventually change-->
    <div class="filter-text"><p>This Month</p></div>
    <button class="filter-button">
      <i class="fa-solid fa-angle-down"></i>
    </button>
  </div>
  <div class="report-charts">
    <div class="reports-chart_1">report 1</div>
    <div class="reports-chart_2">report 2</div>
    <!--CUSTOM REPORTS-->
    <div class="reports-chart_3">custom reports</div>
  </div>
  <div class="recent-reports">
    <MsgComponent msg="Recent Reports" />
    <div class="reportanddate">
      <div class="report-name">
        <div class="date-filter">
          <div class="filter-text"><p class="report-bold">Report Name</p></div>
          <button class="filter-button">
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
        <div class="report-name-text">
          <p class="report-date-text">Daily Statement Report</p>
        </div>
      </div>
      <div class="report-date">
        <div class="date-filter">
          <div class="filter-text"><p class="report-bold">Date</p></div>
          <button class="filter-button">
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
        <div class="report-info">
          <p class="report-date-text">01/20/2020</p>
          <a class="report-download" href="#">Download-</a>
          <a class="report-print" href="#">-Print</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MsgComponent from "../MsgComponent.vue";
export default {
  components: {
    MsgComponent,
  },
};
</script>

<style>
@import "../../assets/css/reports/reports.css";

@import "../../assets/css/main.css";
@import "../../assets/css/responsive.css";
</style>