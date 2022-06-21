<template>
  <div class="msg-container">
    <div class="msg-container_text">
      <p>{{ msg }}</p>
    </div>
  </div>
  <div class="line"></div>
</template>

<script>
export default {
  props:['msg']
}
</script>

<style>
@import '../assets/css/home/msg-container.css';


@import '../assets/css/main.css';
@import '../assets/css/responsive.css';
</style>