<template>
  <header class="header-login">
    <img src="../public/img/logo.png" alt="" class="header-login__logo" />
    <div>
      <NuxtLink to="/login/registration"> Регистрация </NuxtLink>
      <NuxtLink to="/login" class="active"> Вход </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss">
.header-login {
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
  a {
    padding: 0 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: #97b9ea;
  }
  .active {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 76px;
    height: 44px;

    background: #4a4a4a;
    /* Gray/800 */

    border: 1px solid #1d2939;
    /* Shadow/xs */

    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Base/White */

    color: #ffffff;
  }
}
</style>