<template>
  <MsgComponent msg="Billing" />
  <MsgComponent msg="Payment Methods" id="payment"/>
  <div class="payment-boxes">
    <div class="payment-box_1">
      <div class="box-text-title">ACH/Wire</div>
      <div class="box-1_info">
        <div class="box-1_info-1">
          <p class="box-text">Account: 472011571</p>
          <p class="box-text">Routing: 021000021</p>
        </div>
        <div class="box-1_info-2">
          <p class="box-text">Swift Code: CHASUS33</p>
          <p class="box-text">Back: Chase</p>
        </div>
      </div>
    </div>
    <div class="payment-box_2">
      <div class="box-text-title">Quickpay/Zelle</div>
      <div class="box-text">
        username is <br />
        hillel@atlanticfb.com
      </div>
    </div>
    <div class="payment-box_3">
      <div class="box-text-title">Email Check Image</div>
      <div class="box-text">
        send to <br />
        hillel@atlanticfb.com
      </div>
    </div>
    <div class="payment-box_4">
      <div class="box-text-title">Mail Check</div>
      <div class="box-text">
        Atlantic Freight Brokers <br />
        POB 50388 <br />
        Brooklyn NY 11205
      </div>
    </div>
  </div>
  <ChartSearchComponent />
</template>

<script>
import MsgComponent from "../MsgComponent.vue";
import ChartSearchComponent from "../ChartSearchComponent.vue";
export default {
  components: {
    MsgComponent,
    ChartSearchComponent,
  },
};
</script>

<style>
@import "../../assets/css/billing/payment-boxes.css";

@import "../../assets/css/main.css";
@import "../../assets/css/responsive.css";
</style>