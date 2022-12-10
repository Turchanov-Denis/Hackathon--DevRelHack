<template>
  <div class="wrapper">
    <template v-if="!isLogin"><HeaderLogin /></template>
    <template v-else><Header></Header></template>

    <slot></slot>
  </div>
</template>

<script>
import HeaderLogin from "~~/components/HeaderLogin.vue";
import Header from "~~/components/Header.vue";
import { useMainStore } from "~/store/common";
export default {
  components: { HeaderLogin, Header },
  setup() {
    const MainStore = useMainStore();
    const isLogin = MainStore.isLogin;

    return { isLogin };
  },
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