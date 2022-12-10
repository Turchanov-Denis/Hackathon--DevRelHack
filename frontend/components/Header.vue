<template>
  <header class="header">
    <div style="display: flex; align-items: center">
      <img src="../public/img/logo.png" alt="" class="header__logo" />
    </div>
    <input @input="event=>changeCartFilter(event.target.value)" placeholder="найти сообщества" type="text" />
  </header>
</template>

<script>
import { useMainStore } from "~/store/common";
export default {
  setup() {
    const MainStore = useMainStore();
    const changeCartFilter = MainStore.changeCartFilter;

    return { changeCartFilter };
  },
};
</script>

<style lang="scss">
.header {
  align-items: center;
  padding: 0 300px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: #232323;
  border: 1px solid #3a3a3a;
  &__logo {
    width: 163px;
    height: 48px;
  }
  ul {
    display: flex;
    li {
      padding: 0 10px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      color: #ffffff;
    }
  }
  input {
    padding-left: 10px;
    width: 390px;
    height: 45px;
    background: #ffffff;
    border: 2px solid #fe7865;
    box-shadow: 0px 16px 48px rgba(183, 184, 190, 0.459862);
    border-radius: 3px;
  }
}
</style>