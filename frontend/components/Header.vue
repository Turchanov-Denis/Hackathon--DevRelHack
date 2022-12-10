<template>
  <header class="header">
    <img src="../public/img/logo.png" alt="" class="header__logo" />
    <input placeholder="найти сообщества" type="text" />
  </header>
</template>


<style lang="scss">
.header {
  padding: 0 300px;
  align-items: center;
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