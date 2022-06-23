<template>
  <MsgComponent msg='Shipments'/>
  <NotifContainerComponent />
  <router-link to="/shipments/id">
  <ChartSearchComponent />
  </router-link>
</template>

<script>

import MsgComponent from  '../MsgComponent.vue';
import NotifContainerComponent from "../NotifContainerComponent.vue";
import ChartSearchComponent from "../ChartSearchComponent.vue";
export default {
  components: {
    NotifContainerComponent,
    ChartSearchComponent,
    MsgComponent,
  },
};
</script>

<style>
@import "../../assets/css/main.css";
@import "../../assets/css/responsive.css";
</style>