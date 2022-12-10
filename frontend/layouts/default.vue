<template>
  <div class="wrapper">
    <template v-if="!isLogin"><HeaderLogin /></template>
    <template v-if="route.name=='index'"><Header></Header></template>
    <template v-if="route.name=='github'"><HomeHeader></HomeHeader></template>

    <slot></slot>
  </div>
</template>

<script>
import HeaderLogin from "~~/components/HeaderLogin.vue";
import Header from "~~/components/Header.vue";
import HomeHeader from "~~/components/HomeHeader.vue";
import { useMainStore } from "~/store/common";
export default {
  components: { HeaderLogin, Header,HomeHeader },
  setup() {
    const route = useRoute();
    console.log("current name", route.name);
    const MainStore = useMainStore();
    const isLogin = MainStore.isLogin;

    return { isLogin, route };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/nullstyle.scss";
@import "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css";
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