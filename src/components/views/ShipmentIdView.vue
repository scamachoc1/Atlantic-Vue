<template>
  <MsgComponent msg="Shipment #0138523" />
  <div class="submit-process">
    <div class="submit-process-step step1">
      <div class="process-icon icon1">
        <i class="fa-solid fa-check"></i>
      </div>
      <div class="submit-step-menu submitted1">
        <p class="process-title submitted-text submitted1">ISF Submitted</p>
        <div class="submit-menu-icon icon1">
          <button class="submit-menu-button button1">
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="submit-process-step step2">
      <div class="process-icon icon2">
        <p class="process-icon-text text1">2</p>
      </div>
      <div class="submit-step-menu next-step2">
        <p class="process-title next-step-text next-step-text-2">
          Upload Documents
        </p>
        <div class="submit-menu-icon icon2">
          <button class="submit-menu-button button2">
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="submit-process-step step3">
      <div class="process-icon icon3">
        <p class="process-icon-text text3">3</p>
      </div>
      <div class="submit-step-menu unrechable-step step3">
        <p class="process-title unreachable3">Shipment Released</p>
        <div class="submit-menu-icon icon3">
          <button class="submit-menu-button button3">
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="line"></div>
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
@import "../../assets/css/shipments/shipment-id.css";

@import "../../assets/css/main.css";
@import "../../assets/css/responsive.css";
</style>