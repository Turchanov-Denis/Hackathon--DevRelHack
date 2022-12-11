<template>
  <div class="wrapper">
    <template v-if="route.name=='index'"><Header></Header></template>
    <template v-if="route.name=='github'"><HomeHeader></HomeHeader></template>
    <template v-if="route.name=='habr'"><HomeHeader></HomeHeader></template>
    <template v-if="route.name=='calendar'"><HomeHeader></HomeHeader></template>

    <template v-if="route.name=='community'"><HomeHeader></HomeHeader></template>
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&family=Play:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,200&display=swap');
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