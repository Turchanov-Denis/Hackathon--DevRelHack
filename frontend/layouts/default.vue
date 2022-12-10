<template>
  <div class="wrapper">
    <HeaderLogin />
    <slot></slot>
  </div>
</template>

<script>
import HeaderLogin from "~~/components/HeaderLogin.vue";
export default {
  components: { HeaderLogin },
};
</script>

<style lang="scss">
@import "../assets/scss/nullstyle.scss";

body {
}
.wrapper {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>