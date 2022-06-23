<template>
  <MsgComponent msg="Shipment #0138523" />
  <div class="submit-process">
    <div class="submit-process-1">
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

      <div class="delivery-order">
        <p class="big-subtitle">Update Delivery Order</p>
        <div class="delivery-order-fields">
          <div class="delivery-field trucker-selection">
            <p class="small-subtitle">Trucker Name</p>
            <!--should be a sliding menu-->
            <input class="input-delivery" placeholder="Select a Trucker" />
          </div>
          <div class="delivery-field warehouse-selection">
            <p class="small-subtitle">Warehouse Destination</p>
            <!--should be a sliding menu-->
            <input class="input-delivery" placeholder="Select a Warehouse" />
          </div>
        </div>
        <div class="button-update-container">
          <button class="update-delivery-btn" type="submit">
            <span class="btn-text">Update</span>
          </button>
        </div>
      </div>
      <div class="shipments-notes"></div>
    </div>
    <div class="submit-process-2">
      <div class="submit-process-2_info">
        <p class="normal-title shipmentid-title">Shipment Details</p>
        <div class="double-grid-box container">
          <p class="bold-title">Container Number</p>
          <p class="normal-text container">
            FCIU86, FS41438 <br />FCIU286, FS4143328
          </p>
        </div>
        <div class="double-grid-box container">
          <p class="bold-title">Reference Number</p>
          <p class="normal-text container">FCIU8641438</p>
        </div>
        <div class="double-grid-box container">
          <p class="bold-title">ISF Number</p>
          <p class="normal-text container">10284921932</p>
        </div>
        <div class="double-grid-box container">
          <p class="bold-title">Master Bill of Lading</p>
          <p class="normal-text container">SNH7282192</p>
        </div>
        <div class="double-grid-box container">
          <p class="bold-title">House Bill of Lading</p>
          <p class="normal-text container">SNH7282192</p>
        </div>
        <div class="double-grid-box container">
          <p class="bold-title">Origin</p>
          <p class="normal-text container">Shanghai, China</p>
        </div>
        <div class="double-grid-box container">
          <p class="bold-title">Destination</p>
          <p class="normal-text container">Los Angeles <br />California, US</p>
        </div>
        <div class="double-grid-box container">
          <p class="bold-title">Destination Terminal</p>
          <p class="normal-text container">APM</p>
        </div>
        <div class="double-grid-box container">
          <p class="bold-title">Steamship Line</p>
          <p class="normal-text container">ZIM</p>
        </div>
        <div class="double-grid-box container">
          <p class="bold-title">Vessel</p>
          <p class="normal-text container">12345</p>
        </div>
        <div class="double-grid-box container">
          <p class="bold-title">Mode of Transport</p>
          <p class="normal-text container">Ocean</p>
        </div>
        <div class="double-grid-box container no-border-box">
          <p class="bold-title">ETA</p>
          <p class="normal-text container">09/10/2022 10:40</p>
        </div>
      </div>
      <div class="submit-process-2_files">
        <div class="file-icon file-icon1">
          <i class="fa-solid fa-file-arrow-down"></i>
          <p class="light-text">Form 7501</p>
        </div>
        <div class="file-icon file-icon1">
          <i class="fa-solid fa-file-arrow-down"></i>
          <p class="light-text">Delivery Order</p>
        </div>
        <div class="file-icon file-icon1">
          <i class="fa-solid fa-file-arrow-down"></i>
          <p class="light-text">Billing Invoice</p>
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
@import "../../assets/css/shipments/shipment-id.css";

@import "../../assets/css/main.css";
@import "../../assets/css/responsive.css";
</style>