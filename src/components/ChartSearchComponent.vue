
<template>
  <div class="chart-container">
    <header class="data-chart_header">
      <input type="text" class="chart-input" placeholder= "Search"/>
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
import ChartComponent from './ChartComponent.vue'
export default {
    components: {
        ChartComponent,
    },
    str: 'Search',
}
</script>

<style>
@import '../assets/css/home/chart.css';
</style>