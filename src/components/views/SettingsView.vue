<template>
  <MsgComponent msg="Settings" />
  <div class="info-container">
    <div class="personal-info">
      <p class="info-bold-text">Personal Information</p>
      <p class="info-light-text">
        To Update your personal information notify broker@atnalnticft.com
      </p>
    </div>
    <div class="line"></div>
    <div class="account-name">
      <p class="info-normal-text">Account Name</p>
      <div class="double-info-container">
        <p class="info-light-text">To edit this notify broker@atlanticft.com</p>
        <p class="info-light-text">JR Classics Inc</p>
      </div>
    </div>
    <div class="line"></div>

    <div class="account-adress">
      <p class="info-normal-text">Account Adress</p>
      <div class="double-info-container">
        <p class="info-light-text">To edit this notify broker@atlanticft.com</p>
        <p class="info-light-text">123 First Street, Brooklyn NY 12121</p>
      </div>
    </div>
    <div class="line"></div>

    <div class="password">
      <p class="info-normal-text">Password</p>
      <p class="info-light-text">Enter a new password to reset your password</p>
    </div>
    <div class="line"></div>

    <div class="notifications">
      <p class="info-bold-text">Notifications</p>
      <P class="info-light-text">Update your Notifications settings</P>
    </div>
    <div class="line"></div>

    <div class="documents">
      <p class="info-normal-text">Documents Required</p>
      <div class="double-info-container billing">
        <p class="info-light-text">
          Where should reminders to upload documents be sent?
        </p>
        <div class="billing-info">
          <i class="icon fa-solid fa-envelope"></i>
          <div class="billing-text-info">
            <p class="info-normal-text">Billing@doecompany.com</p>
            <p class="info-normal-text">Billing@doecompany.com</p>
          </div>
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
@import "../../assets/css/settings/settings.css";

@import "../../assets/css/main.css";
@import "../../assets/css/responsive.css";
</style>